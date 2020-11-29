import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { draco } from 'drei';

const Picture = ({
  url,
  scale,
  position,  
  rotation,
  metalness,
  roughness

}) => {
    const { scene } = useLoader(GLTFLoader, url, draco());
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
