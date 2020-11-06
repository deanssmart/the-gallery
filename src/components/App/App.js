import React from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import Box from '../Box/Box';
import Controls from '../Controls/Controls';
import { Sky, PointerLockControls } from "@react-three/drei"
import Plane from '../Plane/Plane';
import Dinosaur from '../Dinosaur/Dinosaur';
import { Player } from '../Player/Player';
import { Physics } from 'use-cannon';

function App() {
  return (
    <Canvas 
      camera={{ position: [0, 7, 5] }} 
      onCreated={({ gl }) => { 
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}
    >
      {/* <Sky sunPosition={[100, 10, 100]} /> */}
      <fog attach="fog" args={["white", 5, 25]}/>
      {/* <Controls /> */}
      <PointerLockControls />
      <ambientLight intensity={0.1}/>
      <spotLight intensity={1} position= {[0, 15, 20]} penumbra={1} castShadow />
      <Box />w
      <Dinosaur />
      <Physics gravity={[0, -30, 0]}>
        <Plane />
        <Player />
      </Physics>

    </Canvas>
  );
}

export default App;

