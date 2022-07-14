import React, { Suspense, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Stars, Sky, /* Stats */ } from "@react-three/drei";
import Moon from '../Moon/Moon';
import Building from '../Building/Building';
import Ground from '../Ground/Ground';
import Art from '../Art/Art';
import Furniture from '../Furniture/Furniture';
import Camera from '../Camera/Camera';
import Player from '../Player/Player';
import Lights from '../Lights/Lights';


const App = () => {
  const [night, setNight] = useState(true)
  const [performance, setPerformance] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch(e.code) {
        case "KeyN":
          setNight(!night)
          return;
        case "KeyP":
          setPerformance(!performance)
          return;
        default: return;
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [night, performance])  


  return (

    <>
      <Canvas 
        onCreated={({ gl }) => { 
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        <Camera fov={60} />
        
        {night ? 
          <>
            <Stars />
             <Suspense fallback={null}>
                <Moon />
             </Suspense>
            <fog attach="fog" args={["#272730", 30, 250]}/>
          </>
          : 
          <>
            <Sky sunPosition={[110, 170, -250]} /> 
            <fog attach="fog" args={["#f0f4f5", 30, 250]}/>
          </>
        }

        <Lights 
          night={night}
          performance={performance}
        />
             
        <Physics gravity={[0, -30, 0]}>
          <Suspense fallback={null}>
            <Ground /> 
            <Building />            
            <Art />  
            <Furniture />               
          </Suspense>      
          <Player />       
        </Physics>
        {/* <Stats  showPanel={0} /> */}
      </Canvas>
    </>
  );
}

export default App;



