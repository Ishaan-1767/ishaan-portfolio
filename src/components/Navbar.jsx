import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.header 
      className="bg-white shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container flex items-center justify-between py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-2xl font-semibold">Ishaan Singh</h1>
          <p className="text-sm text-slate-600">CSE'27 • Frontend Developer • Writer</p>
        </motion.div>
        <motion.nav 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.a 
            href="https://www.linkedin.com/in/ishaansingh2219/" 
            target="_blank" 
            rel="noopener" 
            className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={18}/> LinkedIn
          </motion.a>
          <motion.a 
            href="https://github.com/Ishaan-1767" 
            target="_blank" 
            rel="noopener" 
            className="flex items-center gap-1 text-slate-700 hover:text-slate-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18}/> GitHub
          </motion.a>
        </motion.nav>
      </div>
    </motion.header>
  )
}