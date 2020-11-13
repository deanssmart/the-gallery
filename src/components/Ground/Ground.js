import React from 'react';
import { usePlane } from "use-cannon"

const Ground = (props) => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
            <meshPhysicalMaterial attach="material" color="white" />
        </mesh>
    );
}

export default Ground;