import React from 'react';
import { useGLTF } from '@react-three/drei';

const Picture = ({
  url,
  scale,
  position,  
  rotation,
  metalness,
  roughness

}) => {
    const { scene } = useGLTF(url)
    scene.traverse( function ( child ) {
      if ( child.isMesh ) {                                     
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.toneMapped = false;
          child.material.metalness = metalness;
          child.material.roughness =roughness;
      }
  });
  
    return (
         <primitive 
            scale={scale} 
            position={position}
            rotation={rotation}
            object={scene}                    
            dispose={null}
          />
    )
  }

  export default Picture;
