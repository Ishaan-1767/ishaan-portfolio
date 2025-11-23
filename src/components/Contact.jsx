import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, MessageCircle } from 'lucide-react'

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
          Let's Connect
        </motion.h3>

        <motion.p 
          className="mt-2 text-slate-700"
          variants={fadeInUp}
        >
          I'm actively seeking <strong>internship and part-time opportunities</strong> in frontend development and content writing. Whether you need a developer to build clean interfaces, a writer to craft compelling blog posts, or someone to collaborate on meaningful projects—I'd love to connect.
        </motion.p>

        <motion.div
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3"
          variants={fadeInUp}
        >
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-medium text-slate-900 mb-2">💻 Development</h4>
            <p className="text-sm text-slate-600">Frontend internships with React, Tailwind CSS, and modern web technologies</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            <h4 className="font-medium text-slate-900 mb-2">✍️ Writing</h4>
            <p className="text-sm text-slate-600">Blog writing, technical content, and thought pieces on tech, society, and ideas</p>
          </div>
        </motion.div>

        <motion.p 
          className="mt-4 text-slate-700"
          variants={fadeInUp}
        >
          I'm also open to part-time remote roles that align with my academic schedule and collaborative projects where I can learn and contribute. Feel free to reach out via email or connect on LinkedIn—I typically respond within 24 hours.
        </motion.p>

        <motion.div 
          className="mt-4 flex flex-wrap gap-3"
          variants={staggerContainer}
        >
          <motion.a 
            href="mailto:ishaansingh2219@gmail.com" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            variants={scaleIn}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={16} /> <span>Email Me</span>
          </motion.a>
          
          <motion.a 
            href="https://www.linkedin.com/in/ishaansingh2219/" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            variants={scaleIn}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={16} /> <span>LinkedIn</span>
          </motion.a>

          <motion.a 
            href="tel:9142409505" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
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