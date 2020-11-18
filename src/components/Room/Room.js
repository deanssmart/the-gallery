import React, { useMemo } from 'react';
import { useBox } from "use-cannon";
import * as THREE from 'three';

const Room = (props) => {
    let wallTexture, wallNormalMap, wallDispMap, wallSpecMap;
    const [ref] = useBox(() => ({ 
        type: "static", 
        position: [20, 5, 0], 
        args:[1, 12, 12] 
    }));

    wallTexture = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/AlaskaMarble/MARBLE.jpg"), []);

    // wallNormalMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/WhiteMarble/WhiteMarble_NRM.jpg"), []);

    // wallDispMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/WhiteMarble/WhiteMarble_DISP.jpg"), []);

 
    return (
        <mesh
            ref={ref}
            receiveShadow
            castShadow
        >
            <boxBufferGeometry attach="geometry" args={[1, 12, 12]} />
            <meshPhysicalMaterial 
                attach="material" 
                clearcoat={1}
                transparent
            >
                <primitive attach="map" object={wallTexture} />
                {/* <primitive attach="normalMap" object={wallNormalMap} /> */}
                {/* <primitive attach="displacementMap" object={wallDispMap} /> */}

            </meshPhysicalMaterial>
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