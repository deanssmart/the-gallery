import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Hands = () => {
    const [model, setModel] = useState();

    useEffect(() => {
      new GLTFLoader().load("/assets/3D/Hands/scene.gltf", setModel)
    }, []);
  
    return (
        
        model ? <primitive 
                    scale={[0.1, 0.1, 0.1]} 
                    position={[34.8, 12, 12]}
                    rotation={[0, -Math.PI / 2, Math.PI]}
                    object={model.scene}
                    shadows={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {                                     
                            child.castShadow = true;
                            child.receiveShadow = true;
                            // child.material.metalness = 0.4;
                            child.material.toneMapped = false;
                            // child.material.metalness = 0.9;
                            // child.material.roughness = 0.8;
                        }
                    })} 
                /> : null
    )
  }

  export default Hands;