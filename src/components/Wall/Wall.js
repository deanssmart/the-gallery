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

import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
// import { draco } from 'drei';
import * as THREE from 'three';
import { MeshPhongMaterial } from 'three';

const Wall = ({ position }) => {
    const [model, setModel] = useState();

    const newMaterial = new THREE.MeshPhysicalMaterial({
        castShadow: true,
        clearcoat: 1
    });

    // console.log(newMaterial)

    useEffect(() => {
      new GLTFLoader().load("/assets/3D/Wall/scene.gltf", setModel)
    }, []);
  
    return (
        
        model ? <primitive 
                    scale={[1, 1, 1]}
                    position={position}
                    rotation={[0, Math.PI ,0]}
                    object={model.scene}
                    // material={newMaterial}
                    shadows={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {                                     
                            child.castShadow = true;
                            child.receiveShadow = true;
                            // child.material.toneMapped = false;
                            // child.material.transparent = false;
                            child.material.metalness = 1;
                            child.material.side = THREE.DoubleSide;
                        }
                    })} 
                /> : null
    )
  }

  export default Wall;