import React, { useState, Suspense } from "react";
import Sound from "./sound/sound.mp3";
import { Canvas } from '@react-three/fiber'
import Sphere from './components/Sphere'
import "./App.css";

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const audio = new Audio(Sound);

  const play = () => {
    setIsPlay(true);
    audio.play();
  };

  
  return (
    <div className="App">
      {isPlay ? (
        <>
          <Canvas>
            <Suspense fallback={null}>
              <Sphere />
            </Suspense>
          </Canvas>
        </>
      ) : (
        <button className="buttonPlay" onClick={play}>Click here!</button>
      )}
    </div>
  );
}

export default App;
