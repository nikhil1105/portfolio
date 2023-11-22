import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SecWrap } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sprx = useSpring(x);
  const spry = useSpring(y);

  const rotateX = useTransform(spry, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(sprx, [-0.5, 0.5], ['-17.5deg', '17.5deg']);



  const handlemove = (e) => {
    const rect = e?.target?.getBoundingClientRect?.();

    const width = rect?.width;
    const height = rect?.height;

    const mouseX = e.clientX - rect?.left;
    const mouseY = e.clientY - rect?.top;

    const xptn = mouseX / width - 0.5;
    const yptn = mouseY / height - 0.5;

    x.set(xptn);
    y.set(yptn);

  }

  const handleleave = () => {
    x.set(0);
    y.set(0);
  }

  return (
    <Tilt className='xs:w-[250px] w-full pb-5 touch-none mb-10 mr-7 sm:mb-0 sm:mr-0 select-none' >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        onPointerDown={handleleave}
        onPointerMove={handlemove}
        onPointerLeave={handleleave}
        onPointerUp={handleleave}
        onPointerDownCapture={(e) => handlemove(e.pointerId)}
        className='rounded-xl inset-4 relative xs:w-[250px] min-h-[200px]  w-full bg-[#915eff]'
        style={{
          rotateY,
          rotateX,
          transformStyle: 'preserve-3d',

        }}>
        <div

          style={{
            transform: 'translateZ(80px)',
            transformStyle: 'preserve-3d'
          }}
          className='absolute inset-4 fl rounded-xl bg-tertiary shadow-lg flex justify-evenly items-center flex-col'
        >
          <img
            style={{
              transform: "translateZ(80px)",
            }}
            src={icon}
            alt='web-development'
            className='w-20 h-20 object-contain'
          />

          <h3 style={{
            transform: "translateZ(70px)",
          }}
            className='text-white text-[28px] font-bold text-center '>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        variants={fadeIn('', '', 0.1, 1)}
      >
        Enthusiastic and detail-oriented Full-stack Developer with a strong foundation in React.js and React Three Fiber. Proficient in frontend technologies, showcasing skills in React for creating dynamic and responsive user interfaces. Eager to apply theoretical knowledge and learnings from academic projects to contribute effectively to real-world development challenges. Committed to collaborative teamwork and passionate about enhancing user experiences in the digital space.
      </motion.p>
      <div
        className='mt-20 flex flex-wrap gap-10 '
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SecWrap(About, 'about')


