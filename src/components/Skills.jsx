import React from 'react'
import { motion } from 'framer-motion'

const skills = ['Research', 'Communication', 'Task Management', 'Front-End Development (React)', 'Web Development','Content Writing', 'UI/UX Design', 'Team Collaboration', 'Problem-Solving', 'Critical Thinking']

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function Skills() {
  return (
    <section className="mt-6 card" id="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h3 
          className="text-xl font-semibold"
          variants={fadeInUp}
        >
          Top Skills
        </motion.h3>
        <motion.ul 
          className="mt-3 flex flex-wrap gap-2"
          variants={staggerContainer}
        >
          {skills.map((skill, index) => (
            <motion.li 
              key={skill}
              className="px-3 py-1 bg-slate-100 rounded-full text-sm cursor-default"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: '#e0e7ff',
                transition: { duration: 0.2 }
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  )
}