import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';


const Glass = ({
    scale,
    position,
    rotation,
    url
 }) => {
    const [model, setModel] = useState();

    const newMaterial = new THREE.MeshPhysicalMaterial({
        color: "skyblue"
      });

    useEffect(() => {
      new GLTFLoader().load(url, setModel)
    }, [url]);
  
    return (
        
        model ? <primitive 
                    renderOrder={1}
                    scale={scale}
                    position={position}
                    rotation={rotation}
                    object={model.scene}
                    mesh={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {   
                            child.material = newMaterial;
                            child.material.transparent = true;
                            child.material.opacity = 0.2; 
                            child.material.clearcoat = 1; 
                            child.material.roughness = 0;
                            child.material.metalness = 1;
                        }
                    })} 
                >                   
                </primitive>  : null
    )
  }

  export default Glass;