import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

import React from 'react';
import './App.css';


function RotatingBox() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current){
      // meshRef.current.rotation.x += 0.01
      // meshRef.current.rotation.y += 0.01
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]}/>
      <meshPhongMaterial color="orange"/>
    </mesh>
  );
}


function App() {
  return (
    <div id="canvas-container" className="App">
      <Canvas>
        <RotatingBox />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0,0,5]} color="red" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

export default App;
