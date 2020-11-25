import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';


const RoofGlass = ({ position, rotation }) => {
    let newMaterial;
    const [model, setModel] = useState();

    newMaterial = new THREE.MeshPhysicalMaterial({
        color: "skyblue"
      });

    useEffect(() => {
      new GLTFLoader().load("/assets/3D/RoofGlass/scene.gltf", setModel)
    }, []);
  
    return (
        
        model ? <primitive 
                    renderOrder={1}
                    scale={[2.7, 2.7, 2.7]}
                    position={position}
                    rotation={rotation}
                    object={model.scene}
                    shadows={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {   
                            child.material = newMaterial;
                            child.material.transparent = true;
                            child.material.opacity = 0.3; 
                            child.material.clearcoat = 1; 
                            child.material.roughness = 0;
                            child.material.metalness = 1;
                        }
                    })} 
                >                   
                </primitive>  : null
    )
  }

  export default RoofGlass;
    
