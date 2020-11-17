import React, { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



const CeilingLight = () => {
    const [model, setModel] = useState()

    useEffect(() => {
      new GLTFLoader().load("/assets/3D/Ceiling-Light/scene.gltf", setModel)
    })
  
    return model ? <primitive 
                        object={model.scene}
                        position={[18, 8, 0]}
                    /> : null
  }

export default CeilingLight;
