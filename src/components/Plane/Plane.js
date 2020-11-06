import React from 'react';
import { usePlane } from "use-cannon"

const Plane = (props) => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
            <meshPhysicalMaterial attach="material" color="White" />
        </mesh>
    );
}

export default Plane;