import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { draco } from 'drei';

const WindowFrame = ({ 
    scale,
    position,
    rotation,
    modelUrl,
    mapUrl,
    normalMapUrl

}) => {
    let newMaterial, map;
    const { scene } = useLoader(GLTFLoader, modelUrl, draco("https://www.gstatic.com/draco/versioned/decoders/1.4.0/"));

    newMaterial = new THREE.MeshPhysicalMaterial();
    
    map = useMemo(() => new THREE.TextureLoader().load(mapUrl), [mapUrl]);
    map.flipY=false;

    scene.traverse( function ( child ) {
        if ( child.isMesh ) { 
            child.material = newMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.metalness = 0.9;
            child.material.clearcoat = 1;
            child.material.clearcoatRoughness = 0.6;
            child.material.roughness = 0.9;
            child.material.map = map;
        }
    })

  
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

  export default WindowFrame;