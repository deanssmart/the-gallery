import React, { useMemo } from 'react';
import { usePlane } from "use-cannon";
import * as THREE from 'three';
import { Reflector } from '@react-three/drei';

const Ground = (props) => {
    let alphaMap, diffuseMap, dispMap, normalMap, specMap;

    const size = 4;

    const [groundRef] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    const [mirrorRef] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0,-0.2,0], ...props }))

    alphaMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BazaltMarble/BAZALT-ao.jpg"), []);
    alphaMap.wrapS = THREE.MirroredRepeatWrapping;
    alphaMap.wrapT = THREE.MirroredRepeatWrapping;
    alphaMap.repeat.set(size, size);

    diffuseMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BazaltMarble/BAZALT-diffuse3.jpg"), []);
    diffuseMap.wrapS = THREE.MirroredRepeatWrapping;
    diffuseMap.wrapT = THREE.MirroredRepeatWrapping;
    diffuseMap.repeat.set(size, size);

    dispMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BazaltMarble/BAZALT-displacement.jpg"), []);
    dispMap.wrapS = THREE.MirroredRepeatWrapping;
    dispMap.wrapT = THREE.MirroredRepeatWrapping;
    dispMap.repeat.set(size, size);

    normalMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BazaltMarble/BAZALT-normal.jpg"), []);
    normalMap.wrapS = THREE.MirroredRepeatWrapping;
    normalMap.wrapT = THREE.MirroredRepeatWrapping;
    normalMap.repeat.set(size, size);

    specMap = useMemo(() => new THREE.TextureLoader().load("/assets/Textures/BazaltMarble/BAZALT-specular.jpg"), []);
    specMap.wrapS = THREE.MirroredRepeatWrapping;
    specMap.wrapT = THREE.MirroredRepeatWrapping;
    specMap.repeat.set(size, size);

    // groundGeometry = useMemo(() => new THREE.PlaneBufferGeometry( 100, 100 ));
    // groundMirror = useMemo(() => new Reflector( groundGeometry, {
    //     clipBias: 0.003,
    //     textureWidth: window.innerWidth * window.devicePixelRatio,
    //     textureHeight: window.innerHeight * window.devicePixelRatio,
    //     color: 0x889999
    // }))




    return (
        <>
        <mesh ref={mirrorRef} position={[0, 1, 0]}>
        <Reflector>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        </Reflector>
        </mesh>

        <mesh ref={groundRef} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />

            <meshPhysicalMaterial 
                attach="material"
                reflectivity={0}
                clearcoat={1}
                transparent
                flatShading
            >
                <primitive attach="alphaMap" object={alphaMap} />
                <primitive attach="map" object={diffuseMap} />
                {/* <primitive attach="displacementMap" object={dispMap} /> */}
                <primitive attach="normalMap" object={normalMap} />
                {/* <primitive attach="specularMap" object={specMap} /> */}
            </meshPhysicalMaterial>
        </mesh>
        </>
    );
}

export default Ground;