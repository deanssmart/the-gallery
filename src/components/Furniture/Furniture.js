import React from 'react';
import Bench from '../Bench/Bench';

const Furniture = () => {
  
    return (
        <>
            <Bench 
              url={"/assets/3D/Bench/scene.gltf"}
              scale={[0.12, 0.12, 0.12]}
              position={[0, 0, 3]}
              rotation={[0, 0, 0]}
              physicsSize={[10, 3, 1]}
              physicsPosition={[0, 0, 3]}
            />
            <Bench
              url={"/assets/3D/smallBench/scene.gltf"}
              scale={[0.1, 0.1, 0.1]}
              position={[0, 2, 21.5]}
              rotation={[0, 0, 0]}
              physicsSize={[9, 3, 1]}
              physicsPosition={[0, 0, 21.5]}             
            />
        </>
    );
}

export default Furniture;