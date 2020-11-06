import React, { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend, useThree, useFrame } from 'react-three-fiber';


extend({ OrbitControls });

const Controls = () => {
    const orbitRef = useRef();
    const { camera, gl } = useThree();
    
    useFrame(() => {
        orbitRef.current.update()
    })

    return (
        <orbitControls
            args={[camera, gl.domElement]}
            ref={orbitRef}
            // autoRotate
            maxPolarAngle = {Math.PI / 3}
            minPolarAngle = {Math.PI / 3}
        />
    )
}

export default Controls;