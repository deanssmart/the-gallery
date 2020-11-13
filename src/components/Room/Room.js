import React from 'react';
import { useBox } from "use-cannon"

const Room = (props) => {
    const [ref] = useBox(() => ({ type: "static", position: [20, 5, 0], args:[1, 10, 40] }))
    return (
        <mesh ref={ref} receiveShadow castShadow>
            <boxBufferGeometry attach="geometry" args={[1, 10, 40]} />
            <meshPhysicalMaterial attach="material" color="gray" />
        </mesh>
    );
}

export default Room;

// import React from 'react';
// import { usePlane } from "use-cannon"

// const Room = (props) => {
//     const [ref] = usePlane(() => ({ rotation: [0, -Math.PI / 2, 0], ...props }))
//     return (
//         <mesh ref={ref} receiveShadow>
//             <planeBufferGeometry attach="geometry" args={[10, 10, 10]} />
//             <meshPhysicalMaterial attach="material" color="white" />
//         </mesh>
//     );
// }

// export default Room;