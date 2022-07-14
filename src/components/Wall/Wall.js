import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useBox } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';

const Wall = ({ 
    scale,
    position,
    rotation,
    modelUrl,
    mapUrl,
    normalMapUrl 
}) => {
    let texture, normal;
    const size = 20;

    const { scene } = useGLTF(modelUrl)

    const [refFront] = useBox(() => ({ 
        type: "static", 
        args: [70, 50, 1],
        position: [0, 0, -17],
    }));
    const [refBack] = useBox(() => ({ 
        type: "static", 
        args: [70, 50, 1],
        position: [0, 0, 44],
    }));
    const [refL] = useBox(() => ({ 
        type: "static", 
        args: [1, 50, 80],
        position: [-39.5, 0, 0],
    }));
    const [refR] = useBox(() => ({ 
        type: "static", 
        args: [1, 50, 80],
        position: [39.5, 0, 0],
    }));
    const [refTop] = useBox(() => ({ 
        type: "static", 
        args: [150, 1, 150],
        position: [0, 30, 0],
    }));

    texture = useMemo(() => new THREE.TextureLoader().load(mapUrl), [mapUrl]);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(size, size);

    normal = useMemo(() => new THREE.TextureLoader().load(normalMapUrl), [normalMapUrl]);
    normal.wrapS = THREE.RepeatWrapping;
    normal.wrapT = THREE.RepeatWrapping;
    normal.repeat.set(size, size);

    scene.traverse( function ( child ) {
        if ( child.isMesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.side = THREE.DoubleSide;
            child.material.normalMap = normal;
            child.material.map = texture;
            child.material.metalness = 0;
            child.material.roughness = 1;
        }
    })
 
    return (        
            <>
                <mesh ref={refFront}/>
                <mesh ref={refL}/>
                <mesh ref={refR}/>
                <mesh ref={refBack}/>
                <mesh ref={refTop}/>
                <primitive                   
                    position={position}
                    object={scene}
                    dispose={null}
                /> 
            </>
    )
  }

  export default Wall;