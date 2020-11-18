import React, { useMemo } from 'react';
import { usePlane } from "use-cannon";
import * as THREE from 'three';

const Ground = (props) => {
    let groundTexture, groundNormalMap, groundDispMap, groundSpecMap;

    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))

    groundTexture = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/WoodFloor/hardwood.jpg"), []);
    groundTexture.wrapS = THREE.RepeatWrapping;
    groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(40, 40)

    groundNormalMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/WoodFloor/hardwood_normal.jpg"), []);
    groundNormalMap.wrapS = THREE.RepeatWrapping;
    groundNormalMap.wrapT = THREE.RepeatWrapping;
    groundNormalMap.repeat.set(40, 40)

    // groundNormalMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/WhiteMarble/WhiteMarble_NRM.jpg"), []);

    // groundDispMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/WhiteMarble/WhiteMarble_DISP.jpg"), []);


    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshPhongMaterial 
                attach="material" 
                // clearcoat={1}
                color="black"
            >
                {/* <primitive attach="map" object={groundTexture} />
                <primitive attach="normalMap" object={groundNormalMap} /> */}
            </meshPhongMaterial>
        </mesh>
    );
}

export default Ground;