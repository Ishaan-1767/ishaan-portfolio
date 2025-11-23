import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, Clock, TrendingUp } from 'lucide-react'

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
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ishaansingh2219'
        )
        const data = await response.json()
        
        if (data.status === 'ok') {
          const latestArticles = data.items.slice(0, 5).map(item => ({
            title: item.title,
            link: item.link,
            pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            }),
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
          }))
          setArticles(latestArticles)
        }
      } catch (error) {
        console.error('Error fetching Medium articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMediumPosts()
  }, [])

  return (
    <section className="mt-6 card" id="writing">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-3"
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
              <BookOpen size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold">Writing</h3>
          </div>
          <motion.a 
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium"
            href="https://medium.com/@ishaansingh2219" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            View all <ExternalLink size={14} />
          </motion.a>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-slate-700 leading-relaxed"
          variants={fadeInUp}
        >
          I write blogs on Medium about society, mindset, and personal reflections. My work explores how people think, why we behave the way we do, and the hidden patterns in everyday life. Some pieces are published under the <span className="font-medium text-slate-900">'Student x Student'</span> publication.
        </motion.p>

        {/* Stats */}
        {!loading && articles.length > 0 && (
          <motion.div 
            className="mt-4 flex gap-4"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <TrendingUp size={16} className="text-green-600" />
              <span>{articles.length} recent articles</span>
            </div>
          </motion.div>
        )}

        {/* Articles Container */}
        <motion.div 
          className="mt-5 relative"
          variants={fadeInUp}
        >
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <motion.div
                className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          ) : articles.length > 0 ? (
            <>
              <motion.div 
                className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-2 px-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {articles.map((article, index) => (
                  <motion.a
                    key={index}
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0 w-72 sm:w-80 p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all snap-start group"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Date Badge */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-3">
                      <Clock size={12} />
                      <span>{article.pubDate}</span>
                    </div>

                    {/* Title */}
                    <h4 className="font-semibold text-slate-900 line-clamp-2 mb-3 group-hover:text-green-700 transition-colors">
                      {article.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {article.description}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700">
                      Read article 
                      <motion.span
                        className="ml-1"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Scroll hint */}
              {articles.length > 1 && (
                <motion.p 
                  className="text-xs text-slate-400 text-center mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  ← Scroll horizontally to explore more →
                </motion.p>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <BookOpen size={48} className="mx-auto text-slate-300 mb-3" />
              <p className="text-slate-500">No articles found. Check back soon!</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}