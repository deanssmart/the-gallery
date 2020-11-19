import React, { useMemo } from 'react';
import { useBox } from "use-cannon";
import * as THREE from 'three';

const Room = ({ position, size }) => {
    let alphaMap, diffuseMap, normalMap;

    const [ref] = useBox(() => ({ 
        type: "static",         
        args: size,
        position  
    }));

    alphaMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BiancoMarble/BIANCO-ao.jpg"), []);

    diffuseMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BiancoMarble/BIANCO-diffuse.jpg"), []);

    // dispMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BiancoMarble/BIANCO-displacement.jpg"), []);

    normalMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BiancoMarble/BIANCO-normal.jpg"), []);

    // specMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BiancoMarble/BIANCO-specular.jpg"), []);

 
    return (
        <>
        <mesh
            ref={ref}
            receiveShadow
            castShadow
        >
            <boxBufferGeometry attach="geometry" args={size} />
            <meshPhysicalMaterial 
                attach="material" 
                clearcoat={1}
            >
                <primitive attach="alphaMap" object={alphaMap} />
                <primitive attach="map" object={diffuseMap} />
                <primitive attach="normalMap" object={normalMap} />
            </meshPhysicalMaterial>
        </mesh>
        </>
    );
}

export default Room;

