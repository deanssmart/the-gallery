import React, { useState } from 'react';
import { useSpring, a } from 'react-spring/three';
import { useBox } from "use-cannon";

const Box = (props) => {
    const [ref] = useBox(() => ({ mass: 10, position: [0, 20, -10], ...props }))
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)
    const springProps = useSpring({
        scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
        color: hovered ? "red" : "blue",
        position: active ? [0, 100, 0] : [0, 0.5, 0]
     })

    return (
        
        <a.mesh 
            ref={ref}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setActive(!active)}
            scale={springProps.scale}
            position={springProps.position}
            castShadow
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <a.meshPhysicalMaterial 
                attach="material" 
                color={springProps.color} />
        </a.mesh>
    );
}
export default Box;