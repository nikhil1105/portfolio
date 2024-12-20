import React from 'react'
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SecWrap } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, project_link }) => {

  return (

    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          className='relative w-full h-[200px]'
        >
          <img
            src={image}
            alt={name}
            className='w-full h-full object-contain rounded-2xl'
          />
          <div
            className=' absolute inset-0 flex justify-end m-3 '
          >
            <div
              onClick={() => (window.open(source_code_link, '_blank'))}
              className=' black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div
          className='mt-2'
        >
          <h3
            className='text-white font-bold text-[24px]'
          >{name}</h3>
          <p
            className=' text-secondary text-[14px]'
          >{description}</p>
        </div>
        <div
          className='mt-4 flex flex-wrap gap-2'
        >
          {
            tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))
          }
          <button
            style={{

              WebkitTapHighlightColor: 'transparent',
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              KhtmlUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              userSelect: 'none',
              outline: 'none !important'

            }}
            className={` text-black bg-[#915eff] p-1 rounded-full cursor-pointer border-white font-bold hover:text-white
           hover:border-[3px]  `}
            onClick={() => (window.open(project_link, '_blank'))}
          >Live Demo</button>
        </div>
      </Tilt>
    </motion.div>

  )
}


const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I leveraged cutting-edge technologies, including React, React Three Fiber, Tailwind CSS, and Framer Motion, to design and implement my portfolio site. This showcase demonstrates my creative approach coupled with technical prowess, delivering a visually striking and interactive user experience.
      </motion.p>
      <div
        className='mt-20 flex flex-wrap gap-10 '
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SecWrap(Works)