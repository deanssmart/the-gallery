import React from 'react';
import { useBox } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';

const Bench = ({
  url,
  scale,
  position,
  rotation,
  physicsSize,
  physicsPosition,

}) => {
    const [ref] = useBox(() => ({
        type: "static",
        args: physicsSize,
        position: physicsPosition
     }))

    const { scene } = useGLTF(url)

    scene.traverse( function ( child ) {
      if ( child.isMesh ) {                                     
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.toneMapped = false;
          child.material.metalness = 0.1;
          child.material.roughness = 1;
          child.material.clearcoat= 0.9;
          child.material.clearcoatRoughness= 0.1;
      }
  });
   
    return (  
            <>
              <mesh ref={ref}/>
              <primitive
                  scale={scale}                
                  position={position}
                  rotation={rotation}
                  object={scene}
                  dispose={null}
              />
            </> 
    );
}

export default Bench;