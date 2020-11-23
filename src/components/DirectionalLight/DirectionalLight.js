import React, { useMemo } from 'react';
import * as THREE from 'three';

const DirectionalLight = () => {

    const light = useMemo(() => new THREE.PointLight(0xffffff), [])

    
    return (
        <>
            <primitive 
              object={light}
              intensity={0.3} 
              position={[0, 19, 20]} 
            //   distance={100}
            
            //   penumbra={1.2} 
            //   angle={Math.PI/4}
 
            //   shadow-camera-bottom={-30}
            //   shadow-camera-top={30}
            //   shadow-camera-left={53}
            //   shadow-camera-right={-53}
            //   shadow-camera-far={300}
            //   shadow-bias={0.01}
            //   shadow-normalBias={0.5}
            //   decay={2}
            />
            {/* <primitive object={light.target} position={[40, 25, -15]}  /> */}
            <primitive object={new THREE.PointLightHelper(light)} />
        </>
    )
}

export default DirectionalLight;