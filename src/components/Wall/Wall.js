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
import { useBox } from "use-cannon";

const Wall = ({ position }) => {
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

    texture = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/Wall/White_Wall.jpg"), []);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(size, size);

    normal = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/Wall/White_Wall_NORMAL.jpg"), []);
    normal.wrapS = THREE.RepeatWrapping;
    normal.wrapT = THREE.RepeatWrapping;
    normal.repeat.set(size, size);
  
    useEffect(() => {
      new GLTFLoader().load("/assets/3D/Wall/scene.gltf", setModel)
    }, []);
  
    return (
        
        model ? <primitive 
                    ref={ref}
                    scale={[1, 1, 1]}
                    position={position}
                    rotation={[0, 0 ,0]}
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