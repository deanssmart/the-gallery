import React, { useMemo } from 'react';
import * as THREE from 'three';

const DirectionalLight = ({
    position,
    target,
    intensity,
    color,
    shadowCamBot,
    shadowCamTop,
    shadowCamL,
    shadowCamR
}) => {

    const light = useMemo(() => new THREE.DirectionalLight(), [])

    return (
        <>
            <primitive 
              color={color}
              object={light}
              castShadow
              position={position}
              intensity={intensity}
              shadow-camera-bottom={shadowCamBot}
              shadow-camera-top={shadowCamTop}
              shadow-camera-left={shadowCamL}
              shadow-camera-right={shadowCamR}
              decay={2}
              
            />
            <primitive object={light.target} position={target}  />
            {/* <primitive object={new THREE.DirectionalLightHelper(light)} /> */}

        </>
    )
}

export default DirectionalLight;