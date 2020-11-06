import React, { useState, useRef } from 'react';
import { useSpring, a } from 'react-spring/three';

const Box = () => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)
    const props = useSpring({
        scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
        color: hovered ? "blue" : "gray",
        position: active ? [0, 0.2, 0] : [0, 0, 0]
     })

    return (
        
        <a.mesh 
            ref={meshRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setActive(!active)}
            scale={props.scale}
            position={props.position}
            castShadow
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <a.meshPhysicalMaterial 
                attach="material" 
                color={props.color} />
        </a.mesh>
    );
}
export default Box;