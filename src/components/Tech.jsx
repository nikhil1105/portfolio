import React,{useState,useEffect} from 'react'
import {BallCanvas} from './canvas'
import {SecWrap} from '../hoc'
import { technologies } from '../constants'


const Tech = () => {

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
  

  return (
    <div 
    className={`${isMobile?'hidden':'flex flex-row flex-wrap justify-center'} gap-10`}
    >
      {technologies.map((technology)=>(
        <div className=' sm:w-28 sm:h-28 w-14 h-14 ' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          </div>
      ))}
    </div>
  )
}

export default SecWrap(Tech)