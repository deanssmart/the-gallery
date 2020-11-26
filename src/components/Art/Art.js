import React from 'react';
import Picture from '../Picture/Picture';
import Display from '../Display/Display';

const Art = () => {
  
    return (
        <>
        {/* liam portrait */}
        <Picture 
            url={"/assets/3D/Portrait/scene.gltf"}
            scale={[4, 4, 4]}
            position={[19.3, 6.5, 0]}            
            rotation={[0, -Math.PI / 1, 0]}
            metalness={0.9}
            roughness={0.8}
        />
        <Display position={[20, 5, 0]} size={[1, 18, 11]} />
           
        {/* creation of adam */}
        <Picture 
            url={"/assets/3D/Hands/scene.gltf"}
            scale={[0.1, 0.1, 0.1]}
            position={[34.7, 12, 12]}            
            rotation={[0, -Math.PI / 2, Math.PI]}
            metalness={0}
            roughness={0.9}
        />
         <Display position={[-20, 5, 0]} size={[1, 18, 11]} />
    </>

    )
  }

  export default Art;