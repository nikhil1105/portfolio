import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SecWrap } from "../hoc";
import { fadeIn,textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard =({index,testimonial,name,designation,company,image})=>(
<motion.div 
className='bg-black-200 p-8 rounded-3xl w-[280px]'
variants={fadeIn('','spring',index*0.5,0.75)} >
<p
className='text-white font-black text-[48px]'
>
"
</p>
<div className="mt-1">
<p className='text-white tracking-wider text-[18px]'
   >
{testimonial}
</p>
<div className="mt-7 flex justify-between item-center gap-1">
  <div className="flex-1 flex flex-col">
    <p
    className='text-white font-medium text-[16px]'
    >
      <span
      className='blue-text-gradiant'
      >
        @
      </span>
      {name}
    </p>
    <p
    className='mt-1 text-secondary text-[12px]'
     >
      {designation} of {company}
    </p>
  </div>
  <img
  src={image}
  alt={`feedback-by-${name}`}
  className='w-10 h-10 rounded-full object-cover'
  />
</div>
</div>
</motion.div>
)



const Feedbacks = () => {
  return (
    <div className="mt-12 bg-balck-100 rounded-[20px]">

    <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[15px]`}>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What other say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>
    </div>
      <div className={`${styles.paddingX}mt-8 pb-6 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial,index)=>(
          <FeedbackCard 
          key={testimonial.name}
          index={index}
          {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SecWrap(Feedbacks)