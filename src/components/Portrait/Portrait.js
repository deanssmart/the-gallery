import React, { useEffect, useState } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useBox } from "use-cannon";
import * as THREE from 'three';


const Portrait = (props) => {
    // const [ref] = useSphere(() => ({ mass: 10, type: "Dynamic", position: [0, 20, 0], args: 1 }))
    // console.log(useBox())
    // const group = useRef()
    const { nodes } = useLoader(GLTFLoader, "/assets/3D/Portrait/scene.gltf")
    const model = nodes.defaultMaterial
    const texture = useLoader(THREE.TextureLoader, '/assets/3D/Portrait/textures/initialShadingGroup_baseColor2.jpeg')
    texture.flipY=false;
    texture.wrapS = THREE.RepeatWrapping;
    const shine = useLoader(THREE.TextureLoader, '/assets/3D/Portrait/textures/initialShadingGroup_metallicRoughness.png')
    shine.flipY=false;
    shine.wrapS = THREE.RepeatWrapping;
    const norm = useLoader(THREE.TextureLoader, '/assets/3D/Portrait/textures/initialShadingGroup_normal.png')
    norm.flipY=false;
    norm.wrapS = THREE.RepeatWrapping;
   
    const newMaterial = new THREE.MeshPhongMaterial({ 
        map: texture,
        specularMap: shine,
        normalMap: norm,
        shininess: 700
     });

    return (     
            <mesh 
                // ref={ref}
                scale={[2, 2, 2]} 
                geometry={model.geometry}
                position={[19.4, 5, 0]}
                rotation={[0, -Math.PI / 1, 0]}
                material={newMaterial}
                castShadow
                receiveShadow
                
            />
    );
}

export default Portrait;


// const { nodes } = useLoader(GLTFLoader, "/assets/3D/Portrait/scene.gltf")
// const model = nodes.defaultMaterial
// const texture = useLoader(THREE.TextureLoader, '/assets/3D/Portrait/textures/initialShadingGroup_baseColor.jpeg')
// texture.flipY=false;
// texture.wrapS = THREE.RepeatWrapping;
// const shine = useLoader(THREE.TextureLoader, '/assets/3D/Portrait/textures/initialShadingGroup_metallicRoughness.png')
// shine.flipY=false;
// shine.wrapS = THREE.RepeatWrapping;
// const norm = useLoader(THREE.TextureLoader, '/assets/3D/Portrait/textures/initialShadingGroup_normal.png')
// norm.flipY=false;
// norm.wrapS = THREE.RepeatWrapping;

// const newMaterial = new THREE.MeshPhongMaterial({ 
//     map: texture,
//     specularMap: shine,
//     normalMap: norm,
//  });