import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, Github, Linkedin, Coffee } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'

interface HomeProps {
  setCurrentPage: (page: string) => void
}

const Home = ({ setCurrentPage }: HomeProps) => {
  const navigate = useNavigate()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleBuyMeCoffee = () => {
    setCurrentPage('buy-me-coffee')
    navigate('/buy-me-coffee')
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <AnimatedBackground type="home" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="home-gradient">Prashant</span>
            <br />
            <span className="text-white">Ambati</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            From Code to Cloud: Scalable, Intelligent, Interactive & Production-Ready
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="https://drive.google.com/file/d/1zpndB1s7RB9mfZ0AgyxbWetk5ZZcAxJW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-8 py-4 flex items-center space-x-2 transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Download className="w-5 h-5" />
            <span>Resume</span>
          </motion.a>
          
          <motion.a
            href="https://github.com/Prashant-ambati"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-8 py-4 flex items-center space-x-2 transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/prashant-ambati-a9b030229"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-8 py-4 flex items-center space-x-2 transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </motion.a>
          
          <motion.button
            onClick={handleBuyMeCoffee}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-8 py-4 flex items-center space-x-2 transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-white hover:shadow-lg hover:shadow-amber-400/25"
          >
            <Coffee className="w-5 h-5" />
            <span>Buy Me Coffee</span>
          </motion.button>
        </motion.div>

        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "6rem", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
      </div>

      {/* Floating Stats */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-20 right-10 hidden lg:block"
      >
        <div className="glass-card p-6 text-center">
          <div className="text-3xl font-bold home-gradient">5+</div>
          <div className="text-sm text-gray-300">ML Models</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-40 left-10 hidden lg:block"
      >
        <div className="glass-card p-6 text-center">
          <div className="text-3xl font-bold home-gradient">10+GB</div>
          <div className="text-sm text-gray-300">Daily Data</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-40 right-20 hidden lg:block"
      >
        <div className="glass-card p-6 text-center">
          <div className="text-3xl font-bold home-gradient">60%</div>
          <div className="text-sm text-gray-300">Latency Reduction</div>
        </div>
      </motion.div>
    </div>
  )
}

export default Home 