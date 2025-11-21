import React from 'react'
import { motion } from 'framer-motion'

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

export default function Hero() {
  return (
    <section className="mt-8 card">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl font-bold"
          variants={fadeInUp}
        >
          Hi, I'm <motion.span
            className="inline-block"
            animate={{ 
              color: ['#000', '#2563eb', '#000'],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
          >
            Ishaan
          </motion.span>.
        </motion.h2>
        <motion.p 
          className="mt-2 text-slate-700"
          variants={fadeInUp}
        >
         I’m a third-year Computer Science student who enjoys building clean, functional frontends and writing blogs about ideas, society, and personal perspectives. I work with a mix of coding and AI-assisted workflows, which helps me build projects faster and explore new concepts without getting stuck. I learn quickly, stay organized, and like turning small thoughts into things people can actually use or read.
        </motion.p>
        <motion.p 
          className="mt-4"
          variants={fadeInUp}
        >
          <motion.a 
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded"
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            whileHover={{ scale: 1.05, backgroundColor: '#1d4ed8' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Download Resume
          </motion.a>
        </motion.p>
      </motion.div>
    </section>
  )
}