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

export default function Writing() {
  return (
    <section className="mt-6 card" id="writing">
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
          Writing
        </motion.h3>
        <motion.p 
          className="mt-2 text-slate-700"
          variants={fadeInUp}
        >
          I write blogs on Medium about society, mindset, and personal reflections. My work often explores how people think, why we behave the way we do, and the hidden patterns in everyday life. Some of my pieces are also published under the ‘Student x Student’ publication, where I contribute thought-driven stories and observations.
        </motion.p>
        <motion.p 
          className="mt-3"
          variants={fadeInUp}
        >
          <motion.a 
            className="text-blue-600 hover:text-blue-800"
            href="https://medium.com/@ishaansingh2219" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Read my Medium profile →
          </motion.a>
        </motion.p>
      </motion.div>
    </section>
  )
}