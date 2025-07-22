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

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      I'm a third-year <strong className="font-semibold text-white">Computer Science</strong> student at the <strong className="font-semibold text-white">University of Alberta</strong>, specializing in <strong className="font-semibold text-white">Software Practice</strong> and <strong className="font-semibold text-white">Artificial Intelligence</strong>. My academic journey, internship at <strong className="font-semibold text-white">Zurich Canada</strong>, and hands-on projects have strengthened my skills infull-stack development, backend systems, and data-driven problem solving. As a <strong className="font-semibold text-white">Teaching Assistant</strong> for <strong className="font-semibold text-white">Computer Organization and Architecture</strong>, I’ve developed a knack for breaking down complex topics and supporting students through labs and assignments. From building interactive web apps to monitoring real-time systems with Datadog, I thrive in dynamic environments that challenge me to learn and innovate. I’m excited to bring my technical skills, creativity, and collaborative mindset to impactful software development teams.
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