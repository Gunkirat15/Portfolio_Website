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
      className="w-full modern-card-gradient p-[1px] rounded-[24px] shadow-card glow-effect card-hover-effect"
    >
      <div options={{
        max: 45,
        scale: 1,
        speed:450
      }}
      className='bg-gray-800 rounded-[20px] py-6 px-12 min-h-[280px] flex justify-evenly items-center flex-col border border-accent/20'>
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[18px] font-semibold text-center tracking-wide">{title}</h3>
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
      What drives me? The intersection of creativity and logic. As a third-year <strong className="font-semibold text-white">Computer Science</strong> student at the <strong className="font-semibold text-white">University of Alberta</strong>, I'm pursuing dual specializations in <strong className="font-semibold text-white">Software Practice</strong> and <strong className="font-semibold text-white">Artificial Intelligence</strong> because I believe the future belongs to those who can bridge human needs with intelligent systems.

      Currently interning at <strong className="font-semibold text-white">Zurich Canada</strong>, I work with enterprise-scale monitoring systems and contribute to their Guidewire-based Claims platform. But my passion extends beyond corporate code—I build platforms that matter, like PulseChain, connecting blood donors with recipients, or Whimsy, where emotions become shareable digital experiences.

      When I'm not debugging backend services or crafting React interfaces, you'll find me mentoring students as a <strong className="font-semibold text-white">Teaching Assistant</strong> for <strong className="font-semibold text-white">Computer Organization and Architecture</strong>. There's something deeply rewarding about watching someone grasp a complex concept for the first time—it reminds me why I fell in love with programming in the first place.
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