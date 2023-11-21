import {React} from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { Suspense } from 'react';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-2">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]' >Nikhil</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}>I am a fullstack Developer<br />I develop 3D web applications.</p>
        </div>
      </div>
      
      <ComputersCanvas />
            
      <div className=' absolute bottom-0 w-full flex justify-center items-center '>

        
          <div className='mb-3 w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer'
           onClick={()=>document.getElementById('about').scrollIntoView({ behavior:"smooth"})}
          >
            
              <motion.div className='w-3 h-3 bg-secondary mb-1 rounded-full' 
              animate={{
                y:[0,30,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              />
          </div>
        
      </div>
    </section>

  )
}

export default Hero