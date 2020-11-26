import React, { useState, useEffect, useMemo } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useBox } from "use-cannon";

const Wall = ({ 
    scale,
    position,
    rotation,
    modelUrl,
    mapUrl,
    normalMapUrl 
}) => {
    let texture, normal;
    const size = 20;

    const [model, setModel] = useState();
    const [ref] = useBox(() => ({ 
        type: "static", 
        args: [70, 30, 1],
        position: [0, 0, -17],
    }))

    const newMaterial = new THREE.MeshPhysicalMaterial({
    });

    texture = useMemo(() => new THREE.TextureLoader().load(mapUrl), [mapUrl]);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(size, size);

    normal = useMemo(() => new THREE.TextureLoader().load(normalMapUrl), [normalMapUrl]);
    normal.wrapS = THREE.RepeatWrapping;
    normal.wrapT = THREE.RepeatWrapping;
    normal.repeat.set(size, size);
  
    useEffect(() => {
      new GLTFLoader().load(modelUrl, setModel)
    }, [modelUrl]);
  
    return (
        
        model ? <primitive 
                    ref={ref}
                    position={position}
                    object={model.scene}
                    mesh={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {
                            child.material = newMaterial;
                            child.castShadow = true;
                            child.receiveShadow = true;
                            child.material.side = THREE.DoubleSide;
                            child.material.normalMap = normal;
                            child.material.map = texture;
                            child.material.metalness = 0;
                            child.material.roughness = 1;
                            console.log(child)
                        }
                    })} 
                /> : null
    )
  }

  export default Wall;