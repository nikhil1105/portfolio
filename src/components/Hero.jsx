import { React, useState } from 'react'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import Motionspan from './Motionspan'


const Hero = (prop) => {
  const { mob } = prop;
  
  return (
    <section className={`${mob?' h-[40vh]':'h-screen'} relative w-full mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-2">
          <div className="w-5 h-5 rounded-full bg-[#b6aad0]" />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]' >Nikhil</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}>I am a fullstack Developer<br />I develop 3D web applications.</p>
        </div>
      </div>
    
        <ComputersCanvas />
      
  
        <span className={`${mob?'hidden':'flex'}`} >
          <Motionspan/>
        </span>
      

    </section>

  )
}

export default Hero