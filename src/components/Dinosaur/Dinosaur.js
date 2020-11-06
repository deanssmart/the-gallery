import React, { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useBox } from "use-cannon";
import * as THREE from 'three';


const Dinosaur = (props) => {
    const [ref] = useBox(() => ({ mass: 1, type: "Dynamic", position: [0, 0, 0], ...props }))
    // console.log(useBox())
    const [model, setModel] = useState()
    const texture =  new THREE.TextureLoader().load('/assets/3D/textures/trex_regular_baseColor.jpeg')
    texture.flipY=false;
    texture.wrapS = THREE.RepeatWrapping;

    useEffect(() => {
        new GLTFLoader().load('/assets/3D/scene.gltf', setModel)

    }, [])    


    return (

     model ? <primitive 
                ref={ref}
                object={model.scene} 
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.1, 0.1, 0.1]}
                castShadow={model.scene.traverse( function ( child ) {
                    if ( child.isMesh ) { 
                        child.material = new THREE.MeshLambertMaterial({
                            map: texture,
                        });           
                        child.castShadow = true;
                        child.receiveShadow = true;            
                    }
                })}
            /> : null
    );
}

export default Dinosaur;

