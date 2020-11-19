import React, { Suspense, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import Box from '../Box/Box';
import Camera from '../Camera/Camera';
import { Stars, Sky } from "@react-three/drei"
import Ground from '../Ground/Ground';
import Room from '../Room/Room';
import Dinosaur from '../Dinosaur/Dinosaur';
import Portrait from '../Portrait/Portrait';
import SpotLight from '../SpotLight/Spotlight'
import CeilingLight from '../CeilingLight/CeilingLight';
import Bench from '../Bench/Bench';
import Player from '../Player/Player';
import { Physics } from 'use-cannon';


const App = () => {
  const [night, setNight] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.code === "KeyN"){
        setNight(!night)        
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  })  

  return (
    <>
      <Canvas 
        onCreated={({ gl }) => { 
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >

        <Camera fov={50} />
        {night ? <Stars /> : <Sky sunPosition={[100, 100, 100]} /> }
        {/* {night ? <fog attach="fog" args={["black", 1, 70]}/> : <fog attach="fog" args={["white", 1, 70]}/>} */}
        
        <ambientLight intensity={night ? 0.15 : 0.3}/>
        <spotLight 
          intensity={0.3} 
          position= {[0, 15, 20]} 
          penumbra={1.2} 
          castShadow
          shadow-bias={-0.00001}
          shadow-normalBias={0.1}
          decay={2}

        />
        {/* <hemisphereLight intensity={0.35} /> */}
          
        
        <SpotLight />        
        <Physics gravity={[0, -30, 0]}>
          <Suspense fallback={null}>
            {/* <Dinosaur /> */}
            {/* <CeilingLight /> */}
            <Bench />
            <Portrait />
            <Room position={[20, 5, 0]} size={[1, 12, 12]} />
            <Room position={[-20, 5, 0]} size={[1, 12, 12]} />                        
          </Suspense>
          
          <Ground />

          <Player />       
          <Box />
        </Physics>

      </Canvas>
    </>
  );
}

export default App;



