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

export default function Projects() {
  return (
    <section className="mt-6 card" id="projects">
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
          Projects
        </motion.h3>
        <motion.div 
          className="mt-4 space-y-4"
          variants={fadeInUp}
        >
          <article>
            <h4 className="font-medium">OtakuOrbit — Full-Stack Anime Community Platform</h4>
            <p className="text-sm text-slate-600"><strong>Tech:</strong> MERN (MongoDB, Express, React, Node.js)</p>
            <p className="mt-1 text-slate-700">Developed a full-stack community platform where users can explore trending anime, create posts, interact in discussions, and engage with other fans. I handled the frontend, basic backend logic, and overall user experience, focusing on a clean interface, smooth navigation, secure authentication, and fully responsive design across devices.</p>
            <motion.p className="mt-2">
              <motion.a 
                className="text-blue-600 hover:text-blue-800"
                href="https://otaku-orbit-frontend.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                View project →
              </motion.a>
            </motion.p>
          </article>
        </motion.div>
      </motion.div>
    </section>
  )
}