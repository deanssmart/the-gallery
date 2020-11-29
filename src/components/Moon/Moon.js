import React from 'react';

const Moon = ({ position }) => {
    return (
        
        <mesh position={position} >
            <sphereBufferGeometry attach="geometry" args={[5, 20, 20]} />
            <meshPhysicalMaterial 
                attach="material" 
                color="white"
                metalness={2}
                fog={false}
            />
        </mesh>
    );
}
export default Moon;