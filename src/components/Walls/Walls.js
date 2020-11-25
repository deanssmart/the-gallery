import React, { useState, useEffect, useMemo } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
// import { draco } from 'drei';
import * as THREE from 'three';
import { useBox } from "use-cannon";

const Walls = ({ position }) => {
    let bumpMap, diffuseMap, normalMap;
    const size = 4;

    const [model, setModel] = useState();
    // const [ref] = useBox(() => ({ 
    //     type: "static", 
    //     args: [70, 30, 1],
    //     position: [0, 0, -17],
    // }))

    const newMaterial = new THREE.MeshPhysicalMaterial({
    });
    

    // console.log(newMaterial)

    bumpMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/Wall/15_bump.jpg"), []);
    bumpMap.wrapS = THREE.RepeatWrapping;
    bumpMap.wrapT = THREE.RepeatWrapping;
    bumpMap.repeat.set(size, size);

    diffuseMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/Wall/15.jpg"), []);
    diffuseMap.wrapS = THREE.RepeatWrapping;
    diffuseMap.wrapT = THREE.RepeatWrapping;
    diffuseMap.repeat.set(size, size);


    normalMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BiancoMarble/BIANCO-normal.jpg"), []);


    useEffect(() => {
      new GLTFLoader().load("/assets/3D/Walls/scene.gltf", setModel)
    }, []);
  
    return (
        
        model ? <primitive 
                    // ref={ref}
                    scale={[4, 4, 4]}
                    position={[0, 0, 0]}
                    rotation={[0, -Math.PI /2, 0]}
                    object={model.scene}
                    // material={newMaterial}
                    mesh={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {
                            child.material = newMaterial;                       
                            child.castShadow = true;
                            child.receiveShadow = true;
                            child.material.side = THREE.DoubleSide;
                            // child.material.alphaMap = alphaMap;
                            child.material.alphaMap = bumpMap;
                            // child.material.bumpScale = 0.1;
                            child.material.map = bumpMap;
                            child.material.metalness = 0;
                            child.material.roughness = 0.8;
                            // child.material.clearcoat = 1;
                            child.material.flatShading = true;
                            console.log(child.material)

                        }
                    })} 
                /> : null
    )
  }

  export default Walls;