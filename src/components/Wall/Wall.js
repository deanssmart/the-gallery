// import React, { useMemo } from 'react';
// import { useLoader } from 'react-three-fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import * as THREE from 'three';


// const Wall = (props) => {
//     let wall, texture

//     const { nodes } = useLoader(GLTFLoader, "/assets/3D/Wall/scene.gltf")
//     wall = nodes.Scene.children[0]


//     // texture = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Window/textures/Material.001_diffuse.png"), []);
//     // texture.flipY=false;

//     // portraitNormalMap = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Portrait/textures/initialShadingGroup_normal.png"), []);
//     // portraitNormalMap.flipY=false;

//     // portraitSpecularMap = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Portrait/textures/initialShadingGroup_metallicRoughness.png"), []);
//     // portraitSpecularMap.flipY=false;

    
//     return (  
   
//             <mesh 
//                 scale={[40, 40, 20]} 
//                 geometry={wall.geometry}
//                 // position={[19.4, 5.5, 0]}
//                 // rotation={[0, -Math.PI / 1, 0]}
//                 castShadow
//                 receiveShadow
//             >
//                 <meshPhongMaterial attach="material" shininess={200}>
//                     {/* <primitive attach="map" object={texture} /> */}
//                     {/* <primitive attach="normalMap" object={portraitNormalMap} />
//                     <primitive attach="specularMap" object={portraitSpecularMap} /> */}
//                 </meshPhongMaterial>
//             </mesh>             

//     );
// }

// export default Wall;

import React, { useState, useEffect, useMemo } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
// import { draco } from 'drei';
import * as THREE from 'three';
import { MeshPhongMaterial } from 'three';

const Wall = ({ position }) => {
    let alphaMap, diffuseMap, normalMap;
    const size = 9.6;

    const [model, setModel] = useState();

    const newMaterial = new THREE.MeshPhysicalMaterial({
        // castShadow: true,
        // receiveShadow: true,
        // side: THREE.DoubleSide,
        // alphaMap: alphaMap,
        // map: diffuseMap,
        // normalMap: normalMap
    });
    

    // console.log(newMaterial)

    alphaMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BiancoMarble/BIANCO-ao.jpg"), []);

    diffuseMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BiancoMarble/BIANCO-diffuse.jpg"), []);
    // diffuseMap.wrapS = THREE.MirroredRepeatWrapping;
    // diffuseMap.wrapT = THREE.MirroredRepeatWrapping;
    diffuseMap.repeat.set(size, size);


    normalMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BiancoMarble/BIANCO-normal.jpg"), []);


    useEffect(() => {
      new GLTFLoader().load("/assets/3D/Wall/scene.gltf", setModel)
    }, []);
  
    return (
        
        model ? <primitive 
                    scale={[1, 1, 1]}
                    position={position}
                    rotation={[0, Math.PI ,0]}
                    object={model.scene}
                    // color="white"
                    // material={newMaterial}
                    mesh={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {
                            child.material = newMaterial;                       
                            child.castShadow = true;
                            child.receiveShadow = true;
                            child.material.side = THREE.DoubleSide;
                            // child.material.alphaMap = alphaMap;
                            // child.material.map = diffuseMap;
                            // child.material.normalMap = normalMap;
                            // child.material.clearcoat = 1;
                            console.log(child.material)
                            // child.material.mesh = newMaterial;
                        }
                    })} 
                /> : null
    )
  }

  export default Wall;