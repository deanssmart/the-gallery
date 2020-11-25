import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
// import { draco } from 'drei';
import * as THREE from 'three';


const WindowFrames = ({ position }) => {
    let newMaterial;
    const [model, setModel] = useState();

    newMaterial = new THREE.MeshPhysicalMaterial({
        color: "black",
      });

    useEffect(() => {
      new GLTFLoader().load("/assets/3D/WindowFrames/scene.gltf", setModel)
    }, []);
  
    return (
        
        model ? <primitive 
                    scale={[4, 4, 4]}
                    position={[0, 0, 0]}
                    rotation={[0, -Math.PI /2, 0]}
                    object={model.scene}
                    shadows={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {   
                            child.material = newMaterial;
                            child.castShadow = true;
                            child.receiveShadow = true;
                            
                            console.log(child);
                            child.material.metalness = 0.8;
                            child.material.roughness = 0.8;
                            child.material.clearcoat = 1;
                            child.material.clearcoatRoughness = 0.6;
                        }
                    })} 
                >                   
                </primitive>  : null
    )
  }

  export default WindowFrames;