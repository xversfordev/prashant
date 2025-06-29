import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Users, Target, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'

interface ExperienceProps {
  setCurrentPage: (page: string) => void
}

const Experience = ({ setCurrentPage }: ExperienceProps) => {
  const navigate = useNavigate()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const highlights = [
    {
      icon: Target,
      title: "5+ ML Models Delivered",
      description: "Successfully delivered production-ready machine learning models with 60% latency reduction",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "10+GB Daily Data Processing",
      description: "Built scalable data pipelines handling massive datasets for real-time analytics",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Trophy,
      title: "Full CI/CD Automation",
      description: "Automated end-to-end workflows for seamless model deployment and monitoring",
      color: "from-teal-500 to-cyan-500"
    }
  ]

  const leadership = {
    title: "Vice President, PIXELS Photo-Graphics Club",
    organization: "NIT Agartala",
    period: "Jun 2023 – Aug 2024",
    achievements: [
      "Led workshops and strategic initiatives, increasing member engagement by 40%",
      "Organized exhibitions and contests with 100+ participants",
      "Coordinated cross-disciplinary teams for visual storytelling projects"
    ]
  }

  const handleLetsConnect = () => {
    setCurrentPage('contact')
    navigate('/contact')
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <AnimatedBackground type="experience" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span 
              className="experience-gradient"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Experience
            </motion.span> & Leadership
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Professional achievements and leadership roles that demonstrate my impact
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mt-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          />
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 experience-gradient">Key Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="experience-card group"
                >
                  <div className={`p-4 rounded-full bg-gradient-to-r ${highlight.color} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{highlight.title}</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-8 mb-16"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 mr-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold experience-gradient">Leadership Experience</h2>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{leadership.title}</h3>
            <p className="text-slate-400 mb-1">{leadership.organization}</p>
            <p className="text-sm text-slate-500">{leadership.period}</p>
          </div>

          <ul className="space-y-3">
            {leadership.achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="flex items-start text-slate-300"
              >
                <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 mr-3 flex-shrink-0"></div>
                {achievement}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="glass-card p-6 text-center"
          >
            <div className="text-3xl font-bold experience-gradient mb-2">40%</div>
            <div className="text-slate-300">Member Engagement Increase</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glass-card p-6 text-center"
          >
            <div className="text-3xl font-bold experience-gradient mb-2">100+</div>
            <div className="text-slate-300">Event Participants</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="glass-card p-6 text-center"
          >
            <div className="text-3xl font-bold experience-gradient mb-2">5+</div>
            <div className="text-slate-300">ML Models Delivered</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="glass-card p-6 text-center"
          >
            <div className="text-3xl font-bold experience-gradient mb-2">60%</div>
            <div className="text-slate-300">Latency Reduction</div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 experience-gradient">Ready to Make an Impact</h3>
            <p className="text-slate-300 mb-6">
              I'm passionate about leveraging technology to solve complex problems and drive innovation. Let's discuss how we can work together!
            </p>
            <motion.button
              onClick={handleLetsConnect}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-white font-medium hover:bg-gradient-to-r hover:from-teal-400 hover:to-pink-400 hover:shadow-lg hover:shadow-teal-400/25 transition-all duration-500 ease-out"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience 