// import React, { useState, useEffect } from 'react';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { useLoader } from 'react-three-fiber';
// // import { draco } from 'drei';
// import * as THREE from 'three';
// import { MeshPhongMaterial } from 'three';

// const Glass = ({ position }) => {
//     const [model, setModel] = useState();

//     useEffect(() => {
//       new GLTFLoader().load("/assets/3D/Glass/scene.gltf", setModel)
//     }, []);
  
//     return (
        
//         model ? <primitive 
//                     scale={[0.008, 0.008, 0.01]}
//                     position={position}
//                     rotation={[0 ,Math.PI, 0]}
//                     object={model.scene}
//                     shadows={model.scene.traverse( function ( child ) {
//                         if ( child.isMesh ) {                                     
//                             // child.castShadow = true;
//                             // child.receiveShadow = true;
//                             // child.material.toneMapped = false;
//                             child.material.transparent = false;
//                             child.material.metalness = 0.8;
//                             console.log(child.material)
//                             // child.material.depthWrite = false; 
//                                                 // depthTest={true}
//                                                 // alphaTest={0.2}
//                             child.material.opacity= 1; 
//                                                 // clearcoat={1} 
//                                                 // reflectivity={1}
//                                                 // roughness={0}
//                                                 // color="skyblue"
//                                                 // side={THREE.FrontSide}
//                                                 // metalness={1}
//                         }
//                     })} 
//                 /> : null
//     )
//   }

//   export default Glass;

import React, { useMemo } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { draco } from 'drei';


const Glass = ({ position }) => {
    let glass, specular

    const { nodes } = useLoader(GLTFLoader, "/assets/3D/Glass/scene.gltf", draco())
    glass = nodes.glass.children[0]

    // texture = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Glass/textures/Material_47_baseColor2.png"), []);
    // texture.flipY=false;

    // portraitNormalMap = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Portrait/textures/initialShadingGroup_normal.png"), []);
    // portraitNormalMap.flipY=false;

    // specular = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Glass/textures/Material_47_metallicRoughness.png"), []);
    // portraitSpecularMap.flipY=false;

    
    return (  
   
            <mesh 
                scale={[0.008, 0.008, 0.008]} 
                geometry={glass.geometry}
                position={position}
                rotation={[Math.PI, 0, 0]}
                renderOrder={1}

            >
                <meshPhysicalMaterial 
                    attach="material" 
                    transparent={true}
                    // depthWrite={false} 
                    // depthTest={true}
                    // alphaTest={0.2}
                    opacity={0.15} 
                    clearcoat={1} 
                    reflectivity={0.9}
                    roughness={0}
                    color="skyblue"
                    // side={THREE.FrontSide}
                    metalness={1}
                    refractionRatio={0.98}
                >
                    {/* <primitive attach="bumpMap" object={specular} /> */}
                 </meshPhysicalMaterial>
            </mesh>             

    );
}

export default Glass;