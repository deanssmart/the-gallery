import React, { Suspense, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import Box from '../Box/Box';
import Camera from '../Camera/Camera';
import { Stars, Sky } from "@react-three/drei"
import Ground from '../Ground/Ground';
import Display from '../Display/Display';
import Dinosaur from '../Dinosaur/Dinosaur';
import Portrait from '../Portrait/Portrait';
import SpotLight from '../SpotLight/Spotlight';
import SLight from '../SLight/SLight';
import CeilingLight from '../CeilingLight/CeilingLight';
import Bench from '../Bench/Bench';
import Player from '../Player/Player';
import { Physics } from 'use-cannon';
import Controls from '../Controls/Controls';
import Roof from '../Roof/Roof';
import Window from '../Window/Window';
import Glass from '../Glass/Glass';
import Wall from '../Wall/Wall';
import DirectionalLight from '../DirectionalLight/DirectionalLight';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
import RoofGlass from '../RoofGlass/RoofGlass';

RectAreaLightUniformsLib.init()


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

        <Camera fov={60} />
        {night ? <Stars /> : <Sky sunPosition={[29, 50, -60]} /> }
        {/* {night ? <fog attach="fog" args={["black", 1, 70]}/> : <fog attach="fog" args={["white", 1, 70]}/>} */}
        
        <ambientLight intensity={night ? 0.15 : 0.3}/>
        {/* <spotLight 
          intensity={1} 
          position= {[0, 0, 20]} 
          penumbra={0.8} 
          angle={Math.PI/6}
          castShadow
          // shadow-bias={-0.00001}
          // shadow-normalBias={0.1}
          decay={2}
        /> */}
        {/* <hemisphereLight intensity={0.35} /> */}
        <DirectionalLight />
        {/* <rectAreaLight
                intensity={1}
                position={[0, 40, 20]}
                width={50}
                height={50}
                rotation={[-Math.PI / 2, 0, 0]}
            /> */}
        <SLight />
        <SpotLight />        
        <Physics gravity={[0, -30, 0]}>
          <Suspense fallback={null}>
            {/* <Dinosaur /> */}
            {/* <CeilingLight /> */}
            <Roof position={[21, 25, -13.5]}/>
            <RoofGlass position={[21, 25, -13.5]}/>
            <Roof position={[0, 25, -13.5]}/>
            <RoofGlass position={[0, 25, -13.5]}/>
            <Wall position={[0, 0, -13.5]}/>
            <Window position={[6.5, 8.5, -15]}/>
            <Glass position={[6.5, 8.5, -15]}/>
            <Window position={[-6.5, 8.5, -15]}/>
            <Glass position={[-6.5, 8.5, -15]}/>
            <Bench />
            <Portrait />
            <Display position={[20, 5, 0]} size={[1, 16.5, 11]} />
            <Display position={[-20, 5, 0]} size={[1, 15, 11]} />
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



