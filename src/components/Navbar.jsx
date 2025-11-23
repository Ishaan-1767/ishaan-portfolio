import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Code2 } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.header 
      className="bg-white border-b border-slate-200 fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo and Name */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Animated Logo Icon - Clean version */}
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 sm:p-2.5 rounded-lg shadow-md"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                rotate: [0, 3, -3, 0]
              }}
              transition={{
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <Code2 size={20} className="text-white sm:w-6 sm:h-6" />
            </motion.div>

            {/* Name and Title */}
            <div>
              <h1 className="text-base sm:text-xl font-bold text-slate-900">
                Ishaan Singh
              </h1>
              <p className="text-[10px] sm:text-sm text-slate-600">
                CSE'27 • Frontend Developer • Writer
              </p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav 
            className="flex items-center gap-2 sm:gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* LinkedIn */}
            <motion.a 
              href="https://www.linkedin.com/in/ishaansingh2219/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5"/>
              <span className="hidden xs:inline">LinkedIn</span>
            </motion.a>
            
            {/* GitHub */}
            <motion.a 
              href="https://github.com/Ishaan-1767" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} className="sm:w-5 sm:h-5"/>
              <span className="hidden xs:inline">GitHub</span>
            </motion.a>
          </motion.nav>
        </div>
      </div>
    </motion.header>
  )
}