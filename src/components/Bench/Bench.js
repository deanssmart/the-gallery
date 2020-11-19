import React, { useMemo } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useBox } from "use-cannon";
import { draco } from 'drei';

const Portrait = (props) => {
    let bench, texture;
    const position = [0, 0, 0]

    const [ref] = useBox(() => ({
        type: "static",
        args: [4, 1, 2],
        position: [0, 0, 0],
        rotation: [-Math.PI /2 , 0, 0]
     }))

    const { nodes } = useLoader(GLTFLoader, "/assets/3D/Bench/scene.gltf", draco())
    bench = nodes.Mesh_0

    texture = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Bench2/textures/Scene_-_Root_baseColor2.jpg"), []);
    texture.flipY=false;
    
    return (  
   
            <mesh 
                ref={ref}
                scale={[0.03, 0.03, 0.03]} 
                geometry={bench.geometry}
                position={position}
                rotation={[-Math.PI /2 , 0, 0]}
                castShadow
                receiveShadow
            >
                <meshPhysicalMaterial 
                    attach="material"
                    clearcoat={0.5}
                    clearcoatRoughness={0.15}
                >
                    <primitive attach="map" object={texture} />
                </meshPhysicalMaterial>
            </mesh>             

    );
}

export default Portrait;