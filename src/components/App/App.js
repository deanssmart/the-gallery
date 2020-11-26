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
import WindowFrames from '../WindowFrames/WindowFrames';
import WindowGlass from '../WindowGlass/WindowGlass';
import Walls from '../Walls/Walls';
import Moon from '../Moon/Moon';
import Hands from '../Hands/Hands';

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
        {night ?<> <Stars /> <Moon position={[110, 170, -250]} /></>: <Sky sunPosition={[110, 170, -250]} /> }
        {night ? <fog attach="fog" args={["black", 2, 250]}/> : <fog attach="fog" args={["white", 2, 250]}/>}
        
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
        <SpotLight
          position={[12, 19.5, 0]}
          target={[21, 4, 0]}
          intensity={1.5} 
          penumbra={0.5}
          shadow-bias={0}
          sNormalBias={0.05}
          angle={Math.PI/10}
          decay={2}          
        /> 
        <SpotLight 
          position={[28, 18, 12]}
          target={[34.5, 13, 12]}
          intensity={1.5} 
          penumbra={0.5}
          sBias={-0.001}
          // shadow-normalBias={0.05}
          angle={Math.PI/4}
          decay={2}
        />   
             
        <Physics gravity={[0, -30, 0]}>
          <Suspense fallback={null}>
            {/* <Dinosaur /> */}
            {/* <CeilingLight /> */}
            {/* <WindowFrames position={[0, 0, 0]}/>
            <WindowGlass position={[0, 0, 0]}/>
            <Walls position={[0, 0, 0]}/> */}
            <Roof 
              position={[0, 27, 13.2]} 
              rotation={[0, 0, 0]}
            />
            <RoofGlass
              position={[0, 27, 13.2]} 
              rotation={[0, 0, 0]}
            />

            <Wall position={[0, 0, -13.5]}/>
            <Window position={[6.5, 8.5, -15]}/>
            <Glass position={[6.5, 8.5, -15]}/>
            <Window position={[-6.5, 8.5, -15]}/>
            <Glass position={[-6.5, 8.5, -15]}/>
            <Bench />
            <Portrait />
            <Hands />
            
            <Display position={[20, 5, 0]} size={[1, 18, 11]} />
            <Display position={[-20, 5, 0]} size={[1, 18, 11]} />
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



