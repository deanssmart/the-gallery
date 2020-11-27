import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Picture = ({
  url,
  scale,
  position,  
  rotation,
  metalness,
  roughness

}) => {
    const [model, setModel] = useState();

    useEffect(() => {
      new GLTFLoader().load(url, setModel)
    }, [url]);
  
    return (
        
        model ? <primitive 
                    scale={scale} 
                    position={position}
                    rotation={rotation}
                    object={model.scene}
                    shadows={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {                                     
                            child.castShadow = true;
                            child.receiveShadow = true;
                            child.material.toneMapped = false;
                            child.material.metalness = metalness;
                            child.material.roughness =roughness;
                        }
                    })} 
                /> : null
    )
  }

  export default Picture;
