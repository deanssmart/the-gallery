// import React, { useMemo } from 'react';
// import { useLoader } from 'react-three-fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import * as THREE from 'three';
// import { useBox } from "use-cannon";
// import { draco } from 'drei';

// const Roof = (props) => {
//     let roof, steelTexture, windowTexture;
    
//     // const [ref] = useBox(() => ({
//     //     type: "static",
//     //     args: [5.5, 2.5, 0.01],
//     //     position: [0, 0, 0],
//     //  }))

//     const { nodes } = useLoader(GLTFLoader, "/assets/3D/Roof/scene.gltf", draco())

//     steelTexture = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Roof/textures/ind_steel_window_01_mt_baseColor.png"), []);
//     steelTexture.flipY=false;

//     windowTexture = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Roof/textures/ind_glass_01_mt_baseColor.png"), []);
//     windowTexture.flipY=false;
    
//     return (  

//             <group>
//               <group
//                 scale={[0.05, 0.05, 0.05]} 
//                 rotation={[0, 0, 0]}
//                 position={[-6, 0, 2]}
//               >
//                 <mesh castShadow receiveShadow geometry={nodes.ind_window_roof_01_inst_001_ind_steel_beam_01_mt_0.geometry}>
//                 <meshPhongMaterial attach="material" shininess={200}>
//                     <primitive attach="map" object={windowTexture} />
//                     {/* <primitive attach="normalMap" object={portraitNormalMap} />
//                     <primitive attach="specularMap" object={portraitSpecularMap} /> */}
//                 </meshPhongMaterial>
//                 </mesh>
//                 <mesh castShadow receiveShadow geometry={nodes.ind_window_roof_01_inst_001_ind_steel_window_01_mt_0.geometry}>
//                 <meshPhongMaterial attach="material" shininess={200}>
//                     <primitive attach="map" object={steelTexture} />
//                     {/* <primitive attach="normalMap" object={portraitNormalMap} />
//                     <primitive attach="specularMap" object={portraitSpecularMap} /> */}
//                 </meshPhongMaterial>

//                 </mesh>  
                
//               </group>  
//             </group>  
//     );
// }

// export default Roof;

import React, { useState, useEffect, useMemo } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
// import { draco } from 'drei';
import * as THREE from 'three';


const Roof = ({ position, rotation }) => {
    let newMaterial, map;
    const [model, setModel] = useState();

    newMaterial = new THREE.MeshPhysicalMaterial({
        // color: "black",
      });

    map = useMemo(() => new THREE.TextureLoader().load("assets/3D/WindowNoGlass/Textures/Material_49_baseColor.png"), []);
    map.flipY=false;

    useEffect(() => {
      new GLTFLoader().load("/assets/3D/RoofNoGlass/scene.gltf", setModel)
    }, []);
  
    return (
        
        model ? <primitive 
                    scale={[2.7, 2.7, 2.7]}
                    position={position}
                    rotation={rotation}
                    object={model.scene}
                    shadows={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {   
                            child.material = newMaterial;
                            child.castShadow = true;
                            child.receiveShadow = true;
                            
                            console.log(child);
                            child.material.metalness = 1;
                            child.material.clearcoat = 1;
                            child.material.clearcoatRoughness = 0.6;
                            child.material.roughness = 1;
                            child.material.map = map;
                        }
                    })} 
                >                   
                </primitive>  : null
    )
  }

  export default Roof;