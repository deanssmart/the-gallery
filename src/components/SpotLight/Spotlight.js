import React, { useMemo } from 'react';
import * as THREE from 'three';

const Spotlight = () => {

    const light = useMemo(() => new THREE.SpotLight(0xffffff), [])
    return (
        <>
            <primitive 
                object={light}
                position={[16, 11.5, 0]}
                intensity={1} 
                penumbra={0.9}
                castShadow
                // shadow-bias={0.0001}
                shadow-normalBias={0.05}
                angle={Math.PI/5.5}
                decay={2}
                />
            <primitive object={light.target} position={[21, 5, 0]}  />
            {/* <primitive object={new THREE.SpotLightHelper(light)} /> */}
        </>
    )
}

export default Spotlight;
