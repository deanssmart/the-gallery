import React, { useMemo } from 'react';
import * as THREE from 'three';

const Moon = ({ position }) => {

    const texture = useMemo(() => new THREE.TextureLoader().load("assets/Textures/Moon/Moon.jpg"), []);

    return (
        
        <mesh position={position} >
            <sphereBufferGeometry attach="geometry" args={[7, 20, 20]} />
            <meshPhysicalMaterial 
                attach="material" 
                color="white"
                // metalness={2}
                fog={false}
            >
                <primitive attach="map" object={texture} />
            </meshPhysicalMaterial>
        </mesh>
    );
}
export default Moon;