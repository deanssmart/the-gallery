import React, { useMemo } from 'react';
import * as THREE from 'three';

const SLight = () => {

    const light = useMemo(() => new THREE.DirectionalLight(0xffffff), [])

    return (
        <>
            <primitive 
              object={light}
              intensity={0.2} 
              position= {[29, 50, -60]} 
            
            //   penumbra={1.2} 
            //   angle={Math.PI/4}
              castShadow
              shadow-camera-bottom={-15}
              shadow-camera-left={24}
              shadow-camera-right={0}
            //   shadow-camera-far={300}
            //   shadow-bias={-0.00001}
            //   shadow-normalBias={0.1}
              decay={2}
            />
            <primitive object={light.target} position={[5, 0, 10]}  />
            {/* <primitive object={new THREE.DirectionalLightHelper(light)} /> */}
        </>
    )
}

export default SLight;