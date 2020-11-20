import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
// import { draco } from 'drei';
import * as THREE from 'three';
import { MeshPhongMaterial } from 'three';

const Portrait = () => {
    const [model, setModel] = useState();

    useEffect(() => {
      new GLTFLoader().load("/assets/3D/Portrait/scene.gltf", setModel)
    }, []);
  
    return (
        
        model ? <primitive 
                    scale={[3, 3, 3]} 
                    position={[19.3, 5.5, 0]}
                    rotation={[0, -Math.PI / 1, 0]}
                    object={model.scene}
                    shadows={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {                                     
                            child.castShadow = true;
                            child.receiveShadow = true;
                            child.material.metalness = 0.4;
                            child.material.toneMapped = false;
                        }
                    })} 
                /> : null
    )
  }

  export default Portrait;

// import React, { useMemo } from 'react';
// import { useLoader } from 'react-three-fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import * as THREE from 'three';


// const Portrait = (props) => {
//     let portrait, portraitTexture, portraitNormalMap, portraitSpecularMap

//     const { nodes } = useLoader(GLTFLoader, "/assets/3D/Portrait/scene.gltf")
//     portrait = nodes.defaultMaterial

//     portraitTexture = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Portrait/textures/initialShadingGroup_baseColor.jpeg"), []);
//     portraitTexture.flipY=false;

//     portraitNormalMap = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Portrait/textures/initialShadingGroup_normal.png"), []);
//     portraitNormalMap.flipY=false;

//     portraitSpecularMap = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Portrait/textures/initialShadingGroup_metallicRoughness.png"), []);
//     portraitSpecularMap.flipY=false;

    
//     return (  
   
//             <mesh 
//                 scale={[3, 3, 3]} 
//                 geometry={portrait.geometry}
//                 position={[19.4, 5.5, 0]}
//                 rotation={[0, -Math.PI / 1, 0]}
//                 castShadow
//                 receiveShadow
//             >
//                 <meshPhongMaterial attach="material" shininess={200}>
//                     <primitive attach="map" object={portraitTexture} />
//                     <primitive attach="normalMap" object={portraitNormalMap} />
//                     <primitive attach="specularMap" object={portraitSpecularMap} />
//                 </meshPhongMaterial>
//             </mesh>             

//     );
// }

// export default Portrait;