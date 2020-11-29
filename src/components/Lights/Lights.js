import React from 'react';
import SpotLight from '../SpotLight/Spotlight';
import PointLight from '../PointLight/PointLight';
import DirectionalLight from '../DirectionalLight/DirectionalLight';

const Lights = ({ night }) => {

    return (
        <>
            <ambientLight intensity={night ? 0.07 : 0.2}/>
            <DirectionalLight
                position={[29, 50, -60]}
                target={[-5, -3, 50]}
                intensity={night ? 0.2 : 0.3}
                color={night ? "skyblue" : "lightgoldenrodyellow"}
                shadowCamBot={-30}
                shadowCamTop={30}
                shadowCamL={53}
                shadowCamR={-53}                
            />            
            <PointLight 
                intensity={0.25} 
                position={[0, 19, 13]}
            /> 
            
            {/* liam portrait light */}
            <SpotLight 
                position={[12, 19.5, 0]}
                target={[21, 4, 0]}
                intensity={1.5} 
                penumbra={0.5}                
                sNormalBias={0.05}
                sBias={0}
                angle={Math.PI/10}
                decay={2}
            />

            {/* wedding light */}
            <SpotLight 
                position={[12, 19.5, 25]}
                target={[21, 4, 25]}
                intensity={1.5} 
                penumbra={0.5}                
                sNormalBias={0.05}
                sBias={0}
                angle={Math.PI/10}
                decay={2}
            />

            {/* wilson light */}
            <SpotLight 
                position={[-12, 19.5, 0]}
                target={[-21, 4, 0]}
                intensity={1.5} 
                penumbra={0.5}                
                sNormalBias={0.05}
                sBias={0}
                angle={Math.PI/10}
                decay={2}
            />

            {/* old man light */}
            <SpotLight 
                position={[-12, 19.5, 25]}
                target={[-21, 4, 25]}
                intensity={1.5} 
                penumbra={0.5}                
                sNormalBias={0.05}
                sBias={0}
                angle={Math.PI/10}
                decay={2}
            />

            {/* creation of adam light */}
            <SpotLight 
                position={[28, 18, 12]}
                target={[34.5, 13, 12]}
                intensity={1} 
                penumbra={0.5}                
                sNormalBias={0}
                sBias={-0.001}
                angle={Math.PI/4}
                decay={2}
            />

            {/* girl portrait light */}
            <SpotLight 
                position={[-28, 18, 12]}
                target={[-34.5, 13, 12]}
                intensity={1} 
                penumbra={0.5}                
                sNormalBias={0}
                sBias={-0.001}
                angle={Math.PI/4}
                decay={2}
            />

        </>
    )

}

export default Lights;