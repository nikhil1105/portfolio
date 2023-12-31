import React,{useState,useEffect} from 'react'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants'
import { SecWrap } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard=({experience})=>{return(
  <VerticalTimelineElement

  contentStyle={{background:'#1d1836',color:'#fff'}}
  date={experience.date}
  iconStyle={{background:experience.iconBg}}
  icon={
    <div className=' flex justify-center items-center w-full h-full'>
      <img 
      src={experience.icon}
      alt={experience.company_name}
      className='w-[60%] h-[60%] object-contain'

      />
    </div>
  }
  >
   <div>
    <h3
    className='text-white text-[24px] font-bold '
    >
      {experience.title}
    </h3>
    <p className=' text-secondary text-[16px] font-semibold m-0'>
      {experience.company_name}
    </p>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point,index)=>(
        <li
        key={` experience-point-${index}`}
        className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
   </div>
  </VerticalTimelineElement>

);};

const Experience = () => {
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

  
  return (
    <>
    <div>
      <p className='sm:text-[18px] text-[14px] text-secondary  tracking-wider'>Technologies I'm skilled in</p>
      <h2 className={`${styles.sectionHeadText} `}>My Skills</h2>
    </div>
    <div
    className='mt-15 flex flex-col'>
      <VerticalTimeline
      animate={!mob}
      >
        {
          experiences.map((experience,index)=>(
            <ExperienceCard key={index} experience={experience}/>
          ))
        }
      </VerticalTimeline>

    </div>
    </>
  )
}

export default SecWrap(Experience)