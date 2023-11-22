import React, { useState, useRef,useEffect } from 'react'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SecWrap } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formref = useRef();
  const [form, setform] = useState({

    name: '',
    email: '',
    message: '',
  })
  const [loading, setloading] = useState(false)
  const [pop , setpop ] = useState(false)
  const[err,seterr] = useState(false)

  const [mob , setmob ] = useState(false)

  useEffect(()=>{
    const meadiaquery = window.matchMedia('(max-width:500px)');
    setmob(meadiaquery.matches);

    const handle = (e) => (setmob(e.matches));

    meadiaquery.addEventListener('change',handle)

    return()=>{
      meadiaquery.removeEventListener('change',handle)
    }

  },[]);


  const handleChange = (e) => {
    const {name,value} = e.target;
    setform({...form,[name]:value})

   }
  const handleSubmit = (e) => {
    
    e.preventDefault();
    setloading(true);
    emailjs.send('service_vzeve3i','template_ur4kqfo',
    {
      from_name:form.name,
      to_name:'nikhil',
      from_email:form.email,
      t0_email:'nikhilgupta@gmail.com',
      message:form.message,
    },
    'SmNlCMQ0qdnWVrNc3'
    ).then(
      ()=>{
        setpop(true)
        setloading(false);
        setform({
          name:'',
          email:'',
          message:'',
        }) 
      },(error)=>{
        seterr(true)
        setloading(false)
        console.log(error);
      }
    )

  }
  return (
    <div
      className=' xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden '
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className=' flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
        <form
          ref={formref}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>
            <input
              type='text'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>
            <textarea
              rows={7}
              name='message'
              onChange={handleChange}
              value={form.message}
              placeholder=" What do you want to say ?"
              className=' bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button type='submit'
          onClick={(e)=>{handleSubmit(e);seterr(false);setpop(false)}}
          className=' bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-primary rounded-xl'
          >
            {loading?'sending...':'send'}
          </button>
          <div>

          <p className={`${pop?'block':'hidden'} sm:text-[18px] text-[14px] text-green-500 tracking-wider`}>
          <span className='text-[30px]'>Thank you.</span><br/>I will contact you as soon as possible.
          </p>  
          <p className={`${err?'block':'hidden'} sm:text-[18px] text-[14px] text-red-500 tracking-wider`}>
          <span className='text-[30px]'>Something went wrong.</span>
          </p>          

          </div>
        </form>

      </motion.div>

    <motion.div
    variants={slideIn('right','tween',0.2,1)}
    className= {`${mob?'hidden':'flex'} xl:flex-1 xl:h-auto md:h-[550px] h-[350px]`}
    >
      <EarthCanvas/>
    </motion.div>
    
    </div>
  )
}

export default SecWrap(Contact, 'contact')