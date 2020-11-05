import React from 'react';

const Plane = () => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshPhysicalMaterial 
            attach="material" 
            color="White" />
        </mesh>
    );
}

export default Plane;