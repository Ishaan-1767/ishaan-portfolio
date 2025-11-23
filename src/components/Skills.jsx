import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, MessageSquare, Users, Zap, BookOpen } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
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

const technicalSkills = [
  { name: 'React.js', icon: Code2, color: 'bg-blue-100 text-blue-600 border-blue-200' },
  { name: 'JavaScript', icon: Zap, color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
  { name: 'Tailwind CSS', icon: Palette, color: 'bg-cyan-100 text-cyan-600 border-cyan-200' },
  { name: 'HTML & CSS', icon: Code2, color: 'bg-orange-100 text-orange-600 border-orange-200' },
  { name: 'Git & GitHub', icon: Code2, color: 'bg-gray-100 text-gray-600 border-gray-200' },
  { name: 'Framer Motion', icon: Zap, color: 'bg-purple-100 text-purple-600 border-purple-200' }
]

const softSkills = [
  { name: 'Problem Solving', icon: Zap },
  { name: 'Communication', icon: MessageSquare },
  { name: 'Team Collaboration', icon: Users },
  { name: 'Content Writing', icon: BookOpen },
  { name: 'Quick Learner', icon: Zap },
  { name: 'Time Management', icon: Users }
]

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
          Skills & Technologies
        </motion.h3>

        {/* Technical Skills */}
        <motion.div className="mt-4" variants={fadeInUp}>
          <h4 className="text-sm font-medium text-slate-600 mb-3">Technical</h4>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            variants={staggerContainer}
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${skill.color} cursor-default`}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                custom={index}
              >
                <skill.icon size={18} />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div className="mt-6" variants={fadeInUp}>
          <h4 className="text-sm font-medium text-slate-600 mb-3">Professional</h4>
          <motion.div 
            className="flex flex-wrap gap-2"
            variants={staggerContainer}
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 text-slate-700 rounded-full text-sm border border-slate-200 cursor-default"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.08,
                  backgroundColor: '#e0e7ff',
                  borderColor: '#c7d2fe',
                  transition: { duration: 0.2 }
                }}
                custom={index}
              >
                <skill.icon size={14} />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}