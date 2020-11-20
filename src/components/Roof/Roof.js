// import React, { useMemo } from 'react';
// import { useLoader } from 'react-three-fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import * as THREE from 'three';
// import { useBox } from "use-cannon";
// import { draco } from 'drei';

// const Roof = (props) => {
//     let roof, steelTexture, windowTexture;
    
//     // const [ref] = useBox(() => ({
//     //     type: "static",
//     //     args: [5.5, 2.5, 0.01],
//     //     position: [0, 0, 0],
//     //  }))

//     const { nodes } = useLoader(GLTFLoader, "/assets/3D/Roof/scene.gltf", draco())

//     steelTexture = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Roof/textures/ind_steel_window_01_mt_baseColor.png"), []);
//     steelTexture.flipY=false;

//     windowTexture = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Roof/textures/ind_glass_01_mt_baseColor.png"), []);
//     windowTexture.flipY=false;
    
//     return (  

//             <group>
//               <group
//                 scale={[0.05, 0.05, 0.05]} 
//                 rotation={[0, 0, 0]}
//                 position={[-6, 0, 2]}
//               >
//                 <mesh castShadow receiveShadow geometry={nodes.ind_window_roof_01_inst_001_ind_steel_beam_01_mt_0.geometry}>
//                 <meshPhongMaterial attach="material" shininess={200}>
//                     <primitive attach="map" object={windowTexture} />
//                     {/* <primitive attach="normalMap" object={portraitNormalMap} />
//                     <primitive attach="specularMap" object={portraitSpecularMap} /> */}
//                 </meshPhongMaterial>
//                 </mesh>
//                 <mesh castShadow receiveShadow geometry={nodes.ind_window_roof_01_inst_001_ind_steel_window_01_mt_0.geometry}>
//                 <meshPhongMaterial attach="material" shininess={200}>
//                     <primitive attach="map" object={steelTexture} />
//                     {/* <primitive attach="normalMap" object={portraitNormalMap} />
//                     <primitive attach="specularMap" object={portraitSpecularMap} /> */}
//                 </meshPhongMaterial>

//                 </mesh>  
                
//               </group>  
//             </group>  
//     );
// }

// export default Roof;

import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { draco } from 'drei';

const Roof = () => {
    const [model, setModel] = useState()
  
    useEffect(() => {
      new GLTFLoader().load("/assets/3D/Roof/scene.gltf", setModel)
    }, []);
  
    return (
        model ? <mesh castShadow receiveShadow geometry={model}>
                 {/* <meshPhongMaterial attach="material" shininess={200}>
                     <primitive attach="map" object={windowTexture} />
                     <primitive attach="normalMap" object={portraitNormalMap} />
                     <primitive attach="specularMap" object={portraitSpecularMap} /> 
                 </meshPhongMaterial> */}
                 </mesh> : null

        // model ? <primitive object={model.scene} /> : null
    )
  }

  export default Roof;