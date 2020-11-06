import React, { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Dinosaur = () => {
    const [model, setModel] = useState()

    useEffect(() => {
        new GLTFLoader().load('/assets/3D/scene.gltf', setModel)
    }, [])

    return (
     model ? <primitive 
                object={model.scene} 
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.025, 0.025, 0.025]}
                castShadow
            /> : null
    );
}

export default Dinosaur;

