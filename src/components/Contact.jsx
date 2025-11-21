import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

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

export default function Contact() {
  return (
    <section className="mt-6 card" id="contact">
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
          Contact
        </motion.h3>
        <motion.p 
          className="mt-2 text-slate-700"
          variants={fadeInUp}
        >
          For collaborations, projects, or internship/part-time opportunities, feel free to email me at{' '}
          <a href="mailto:ishaansingh2219@gmail.com" className="text-blue-600 hover:text-blue-800">
            ishaansingh2219@gmail.com
          </a>{' '}
          or connect with me on{' '}
          <a href="https://www.linkedin.com/in/ishaansingh2219/" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
            LinkedIn
          </a>. I’m always open to meaningful conversations.
        </motion.p>
        <motion.div 
          className="mt-3 flex gap-4 items-center"
          variants={staggerContainer}
        >
          <motion.a 
            href="mailto:ishaansingh2219@gmail.com" 
            className="inline-flex items-center gap-2 px-3 py-2 bg-slate-100 rounded hover:bg-slate-200 transition-colors"
            variants={scaleIn}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={16} /> <span>Email</span>
          </motion.a>
          <motion.a 
            href="tel:9142409505" 
            className="inline-flex items-center gap-2 px-3 py-2 bg-slate-100 rounded hover:bg-slate-200 transition-colors"
            variants={scaleIn}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={16} /> <span>Call</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}