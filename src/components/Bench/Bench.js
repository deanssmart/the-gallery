import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useBox } from "use-cannon";
import { draco } from 'drei';

const Bench = (props) => {
    const [ref] = useBox(() => ({
        type: "static",
        args: [10, 5, 0.01],
        position: [0, 0, 0],
     }))

    const { nodes } = useLoader(GLTFLoader, "/assets/3D/SpecialBench/scene.gltf", draco());
   
    return (  

            <group ref={ref}>
              <group
                scale={[0.11, 0.11, 0.11]} 
                rotation={[-Math.PI /2 , 0, -Math.PI /7]}
                position={[-9, 0, 2]}
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
                <mesh castShadow receiveShadow geometry={nodes.Mesh_5.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_6.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_7.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_8.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_9.geometry}>
                  <meshPhysicalMaterial 
                    attach="material" 
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    roughness={1}
                    metalness={0.1}
                  >
                  </meshPhysicalMaterial>
                </mesh>  
                <mesh castShadow receiveShadow geometry={nodes.Mesh_10.geometry}>
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
            </group>  
    );
}

export default Bench;