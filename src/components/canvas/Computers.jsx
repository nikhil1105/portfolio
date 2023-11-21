import {Suspense,useEffect,useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {Html,OrbitControls,Preload,useGLTF} from '@react-three/drei'
import  Load  from "./Load";
import Scene from "./Scene";

const Computers = ({ isMobile }) => {
  
  {/*return (
    <mesh>
      
      <hemisphereLight groundColor='#ffffff' intensity={3} />
      <pointLight args={['#ffffff',3]} castShadow position={[0,0.2,0]}/>
      
      <primitive
        object={computer.scene}
        scale={isMobile?0.7:0.75} position={isMobile?[0,-2.4,-2.2]:[0,-2.8,-1.5]} 
        rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )*/}


  return(

    <mesh>
      
      <hemisphereLight groundColor='#ffffff' intensity={3} />
      <pointLight args={['#ffffff',3]} castShadow position={[0,0.2,0]}/>
      
      <Scene
      scale={isMobile?0.7:0.75} position={isMobile?[0,-2.4,-2.2]:[0,-2.8,-1.5]} 
      rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>

  );
};


const ComputerCanvas =()=>{
  const [isMobile,setMobile] = useState(false)

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setMobile(mediaQuery.matches);

    const handleChange = (e)=>{
      setMobile(e.matches);
    }

    mediaQuery.addEventListener('change',handleChange);

    return()=>{
      mediaQuery.removeEventListener('change',handleChange);
    }
  });



  
  return(

    <Canvas frameloop='demand' shadows
    camera={{position:[20,3,5],fov:25}}>
      
      <Suspense  fallback={<Load/>}>
      <OrbitControls enableZoom={false} 
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}
      />
      <Computers isMobile={isMobile} />
      </Suspense>
    <Preload all/>
    
    </Canvas>
    
  );
}

export default ComputerCanvas