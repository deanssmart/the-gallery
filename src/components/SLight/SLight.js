import React, { useMemo } from 'react';
import * as THREE from 'three';

const SLight = () => {

    const light = useMemo(() => new THREE.DirectionalLight("skyblue"), [])

    return (
        <>
            <primitive 
              object={light}
              intensity={0.2} 
              position= {[29, 50, -60]} 
            
            //   penumbra={1.2} 
            //   angle={Math.PI/4}
              castShadow
              shadow-camera-bottom={-30}
              shadow-camera-top={30}
              shadow-camera-left={53}
              shadow-camera-right={-53}
            //   shadow-camera-far={300}
              shadow-bias={0.01}
              shadow-normalBias={0.5}
              decay={2}
            />
            <primitive object={light.target} position={[-12.5, 0, 50]}  />
            {/* <primitive object={new THREE.DirectionalLightHelper(light)} /> */}
        </>
    )
}

export default SLight;