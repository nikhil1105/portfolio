import { motion } from 'framer-motion';


export default function Motionspan() {
    return(
        <div id='aboutbtn' className=' absolute bottom-0 w-full flex justify-center items-center '>


        <div className='mb-3 w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer'
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: "smooth" })}
        >

          <motion.div className='w-3 h-3 bg-secondary mb-1 rounded-full'
            animate={{
              y: [0, 30, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
          />
        </div>

      </div>
    );
}