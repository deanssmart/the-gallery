import React from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import Box from '../Box/Box';
import Controls from '../Controls/Controls';
import Plane from '../Plane/Plane';
import Dinosaur from '../Dinosaur/Dinosaur';

function App() {
  return (
    <Canvas 
      camera={{ position: [0, 7, 5] }} 
      onCreated={({ gl }) => { 
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}
    >
      <fog attach="fog" args={["white", 5, 25]}/>
      <Controls />
      <ambientLight intensity={0.1}/>
      <spotLight intensity={1} position= {[0, 15, 20]} penumbra={1} castShadow />
      {/* <Box /> */}
      <Dinosaur />
      <Plane />
    </Canvas>
  );
}

export default App;

