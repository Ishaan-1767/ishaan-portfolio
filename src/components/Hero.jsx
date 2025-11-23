import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="h-screen flex items-center justify-center relative">
      <motion.div
        className="text-center px-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-5xl md:text-7xl font-bold"
          variants={fadeInUp}
        >
          I'm{' '}
          <motion.span
            className="inline-block"
            animate={{ 
              color: ['#2563eb', '#000000', '#2563eb']
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Ishaan
          </motion.span>
        </motion.h2>

        <motion.p 
          className="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          A Computer Science student who builds clean frontends and writes about ideas, society, and mindset. I use coding and AI-assisted workflows to move fast, stay curious, and turn thoughts into things people can actually use.
        </motion.p>

        <motion.p 
          className="mt-8"
          variants={fadeInUp}
        >
          <motion.a 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium shadow-lg"
            href={`${import.meta.env.BASE_URL}resume.pdf`} 
            target="_blank"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#1d4ed8',
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Download Resume
          </motion.a>
        </motion.p>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-slate-400 hover:text-blue-600 transition-colors"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}