import React, { useEffect, useState } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useBox } from "use-cannon";
import * as THREE from 'three';


const Dinosaur = (props) => {
    const [ref] = useBox(() => ({ mass: 10, type: "Dynamic", position: [0, 0, 0], ...props }))
    // console.log(useBox())
    // const group = useRef()
    const { nodes, materials } = useLoader(GLTFLoader, "/assets/3D/scene.gltf")
    const model = nodes.trex_trex_regular_0
    const texture = useLoader(THREE.TextureLoader, '/assets/3D/textures/trex_regular_baseColor.jpeg')
    texture.flipY=false;
    texture.wrapS = THREE.RepeatWrapping;
   
    const newMaterial = new THREE.MeshLambertMaterial({ map: texture });

    return (     
            <mesh 
                ref={ref}
                scale={[0.1, 0.1, 0.1]} 
                geometry={model.geometry} 
                material={newMaterial}
                castShadow 
                receiveShadow
            />
    );
}

export default Dinosaur;

