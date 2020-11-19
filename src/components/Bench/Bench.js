import React, { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Bench = () => {
    const [model, setModel] = useState()
    // const newMaterial = new THREE.MeshLambertMaterial();

    useEffect(() => {
      new GLTFLoader().load("/assets/3D/Bench/scene.gltf", setModel)      
    }, [])
  
    return model ? <primitive 
                        object={model.scene}
                        // material={newMaterial}
                        position={[0, 0, 0]}
                        scale={[0.03, 0.03, 0.03]}
                        castShadow
                        receiveShadow
                    /> : null
  }

export default Bench;