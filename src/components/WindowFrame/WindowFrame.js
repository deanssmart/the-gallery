import React, { useState, useEffect, useMemo } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const WindowFrame = ({ 
    scale,
    position,
    rotation,
    modelUrl,
    mapUrl,
    normalMapUrl
}) => {
    let newMaterial, map;
    const [model, setModel] = useState();

    newMaterial = new THREE.MeshPhysicalMaterial();

    useEffect(() => {
        new GLTFLoader().load(modelUrl, setModel)
      }, [modelUrl]);

    map = useMemo(() => new THREE.TextureLoader().load(mapUrl), [mapUrl]);
    map.flipY=false;
  
    return (
        
        model ? <primitive 
                    scale={scale}
                    position={position}
                    rotation={rotation}
                    object={model.scene}
                    mesh={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {                
                            child.material = newMaterial;      
                            child.castShadow = true;
                            child.receiveShadow = true;
                            child.material.metalness = 1;
                            child.material.clearcoat = 1;
                            child.material.clearcoatRoughness = 0.6;
                            child.material.roughness = 1;
                            child.material.map = map;
                        }
                    })} 
                /> : null
    )
  }

  export default WindowFrame;