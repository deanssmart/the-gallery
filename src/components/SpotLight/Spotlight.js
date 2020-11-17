import React, { useMemo } from 'react';
import * as THREE from 'three';

const Spotlight = () => {
    const light = useMemo(() => new THREE.SpotLight(0xffffff), [])
    return (
        <>
            <primitive 
                object={light}
                position={[18, 9, 0]}
                intensity={0.8} 
                penumbra={0.7}
                castShadow
                shadow-bias={0.001}
                shadow-normalBias={0.03}
                angle={Math.PI/4}
                decay={2}
                />
            <primitive object={light.target} position={[20, 6, 0]}  />
        </>
    )
}

export default Spotlight;
