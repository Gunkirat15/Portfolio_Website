import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import {SectionWrapper} from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div options={{
        max: 45,
        scale: 1,
        speed:450
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
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

      <motion.p variants={fadeIn("","",0.1,1)} 
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I am a third-year Computer Science student at the University of Alberta, specializing in Software Practice and Artificial Intelligence. My academic focus and hands-on experience have equipped me with strong skills in coding, data analysis, and algorithm design, allowing me to tackle complex challenges in technology. As a teaching assistant for Computer Organization and Architecture 1, I honed my ability to explain complex topics clearly, assist students with their understanding of computer architecture, and provide support during labs and assignments. I thrive in fast-paced environments that push me to innovate and grow. I'm excited to apply my technical expertise and collaborative mindset to a software development team, where I can contribute to meaningful projects and continue building my professional skills.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")