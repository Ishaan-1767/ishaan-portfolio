import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles, Users } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const projects = [
  {
    title: "Flux Particles",
    subtitle: "Interactive Particle System Playground",
    description: "Built an interactive particle system with real-time physics simulations and customizable parameters. Features 6 preset modes, mouse interaction with attraction/repulsion forces, and smooth 60 FPS performance handling thousands of animated particles.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Canvas API"],
    link: "https://flux-particles.vercel.app/",
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    highlights: [
      "6 preset modes (Starfield, Fireworks, Aurora, Black Hole, Snow, Galaxy)",
      "Real-time physics simulations",
      "60 FPS with thousands of particles"
    ]
  },
  {
    title: "OtakuOrbit",
    subtitle: "Full-Stack Anime Community Platform",
    description: "Developed a full-stack community platform where users can explore trending anime, create posts, and engage in discussions. Handled frontend, backend logic, and user experience with focus on clean UI and secure authentication.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://otaku-orbit-frontend.vercel.app/",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    highlights: [
      "User authentication & authorization",
      "Real-time discussions",
      "Responsive across all devices"
    ]
  }
]

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
          Featured Projects
        </motion.h3>

        <motion.div 
          className="mt-4 space-y-6"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`p-6 rounded-xl border-2 border-slate-200 bg-gradient-to-br ${project.bgGradient} hover:shadow-lg transition-all duration-300`}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              {/* Header with Icon */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${project.gradient}`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{project.title}</h4>
                    <p className="text-sm text-slate-600">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-4">
                <p className="text-xs font-medium text-slate-600 mb-2">Key Features:</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-white text-slate-700 rounded-full border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <motion.a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Live <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Projects Link */}
        <motion.div 
          className="mt-6 text-center"
          variants={fadeInUp}
        >
          <p className="text-sm text-slate-600">
            Want to see more?{' '}
            <motion.a 
              href="https://github.com/Ishaan-1767"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
              whileHover={{ x: 3 }}
            >
              Check out my GitHub <ExternalLink size={14} />
            </motion.a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}