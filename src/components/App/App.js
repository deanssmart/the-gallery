import React from 'react';
import { Canvas } from 'react-three-fiber';
import Box from '../Box/Box';
import Controls from '../Controls/Controls';
import Plane from '../Plane/Plane';



function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <fog attach="fog" args={["white", 5, 15]}/>
      <Controls />
      <ambientLight intensity={0.3}/>
      <spotLight position= {[0, 5, 10]} penumbra={1}/>
      <Box />
      <Plane />
    </Canvas>
  );
}

export default App;
