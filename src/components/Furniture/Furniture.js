import React from 'react';
import Bench from '../Bench/Bench';

const Furniture = () => {
  
    return (
        <>
            <Bench 
              url={"assets/3D/Bench/scene.gltf"}
              scale={[0.11, 0.11, 0.11]}
              position={[0, 0, 3]}
              rotation={[0, 0, 0]}
              physicsSize={[10, 3, 1]}
              physicsPosition={[0, 0, 3]}
            />
            <Bench
              url={"assets/3D/SmallBench/scene.gltf"}
              scale={[0.09, 0.09, 0.09]}
              position={[0, 1.5, 21.5]}
              rotation={[0, 0, 0]}
              physicsSize={[8, 3, 1]}
              physicsPosition={[0, 0, 21.5]}             
            />
        </>
    );
}

export default Furniture;