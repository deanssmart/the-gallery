import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useBox } from "use-cannon";
import { draco } from 'drei';

const Bench = (props) => {
    const [ref] = useBox(() => ({
        type: "static",
        args: [7, 5, 0.5],
        position: [0, 0, 22],
     }))

    const { nodes } = useLoader(GLTFLoader, "/assets/3D/SmallBench/scene.gltf", draco());
   
    return (  
            <>
              <mesh ref={ref}/>
              <group
                scale={[0.09, 0.09, 0.09]} 
                rotation={[-Math.PI /2 , 0, 0]}
                position={[-5, 0, 22]}
              >
                <mesh castShadow receiveShadow geometry={nodes.Mesh_0.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>
                <mesh castShadow receiveShadow geometry={nodes.Mesh_1.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_2.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_3.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_4.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>                 
              </group>
            </>
    );
}

export default Bench;