import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, Github, Linkedin, Coffee } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import AnimatedBackground from '../components/AnimatedBackground'

interface HomeProps {
  setCurrentPage: (page: string) => void
}

// Interactive Button Component with Circular Gradient
const InteractiveButton = ({ 
  children, 
  onClick, 
  gradientColors, 
  className = "" 
}: {
  children: React.ReactNode
  onClick: () => void
  gradientColors: string
  className?: string
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
    }
  }

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={`bg-black/20 backdrop-blur-sm border border-white/10 px-8 py-4 flex items-center space-x-2 relative overflow-hidden rounded-lg ${className}`}
    >
      {/* Interactive Circular Gradient Background */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColors}, transparent 90%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center space-x-2">
        {children}
      </div>
    </motion.button>
  )
}

const Home = ({ setCurrentPage }: HomeProps) => {
  const navigate = useNavigate()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [displayedText, setDisplayedText] = useState('')
  const [isCoding, setIsCoding] = useState(true)
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [showTagline, setShowTagline] = useState(false)
  const [animationCompleted, setAnimationCompleted] = useState(false)
  const fullText = 'Prashant Ambati'

  // Simulate coding with different speeds and pauses - only once
  useEffect(() => {
    if (isCoding && !animationCompleted) {
      let currentIndex = 0
      
      const codeInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex))
          currentIndex++
          
          // Simulate "thinking" pauses during coding
          if (currentIndex === 4 || currentIndex === 9) {
            clearInterval(codeInterval)
            setTimeout(() => {
              const resumeInterval = setInterval(() => {
                if (currentIndex <= fullText.length) {
                  setDisplayedText(fullText.slice(0, currentIndex))
                  currentIndex++
                } else {
                  // Show tagline after name is complete
                  setTimeout(() => {
                    setShowTagline(true)
                    setIsCoding(false)
                    setAnimationCompleted(true)
                  }, 500)
                  clearInterval(resumeInterval)
                }
              }, 120)
            }, 400)
          }
        } else {
          // Show tagline after name is complete
          setTimeout(() => {
            setShowTagline(true)
            setIsCoding(false)
            setAnimationCompleted(true)
          }, 500)
          clearInterval(codeInterval)
        }
      }, 120)

      return () => clearInterval(codeInterval)
    }
  }, [isCoding, animationCompleted])

  // Cursor blink effect - only when coding is active
  useEffect(() => {
    if (isCoding && !animationCompleted) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 600)
      return () => clearInterval(cursorInterval)
    }
  }, [isCoding, animationCompleted])

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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            {/* Enhanced Code Editor Style Container */}
            <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 inline-block shadow-2xl">
              {/* Tab Bar */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                </div>
                <div className="flex-1 bg-gray-800/50 rounded-lg px-3 py-1 ml-3">
                  <span className="text-xs text-gray-300 font-mono">developer.tsx</span>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="font-mono text-left">
                {/* Line 1 */}
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-gray-500 text-sm w-8 text-right">1</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400 text-sm">const</span>
                    <span className="text-blue-400 text-sm">developer</span>
                    <span className="text-gray-300">=</span>
                    <span className="text-yellow-400 text-sm">"</span>
                    <span className="home-gradient text-3xl md:text-5xl font-bold tracking-wide">
                      {displayedText}
                      {isCoding && showCursor && (
                        <motion.span
                          className="inline-block w-0.5 h-8 bg-green-400 ml-1"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                    </span>
                    <span className="text-yellow-400 text-sm">"</span>
                    <span className="text-gray-300">;</span>
                  </div>
                </div>
                
                {/* Line 2 */}
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-gray-500 text-sm w-8 text-right">2</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400 text-sm">const</span>
                    <span className="text-blue-400 text-sm">tagline</span>
                    <span className="text-gray-300">=</span>
                    <span className="text-yellow-400 text-sm">"</span>
                    <motion.span
                      className="text-gray-300 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: showTagline ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      From Code to Cloud: Scalable, Intelligent, Interactive & Production-Ready
                    </motion.span>
                    <span className="text-yellow-400 text-sm">"</span>
                    <span className="text-gray-300">;</span>
                  </div>
                </div>
                
                {/* Line 3 */}
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-gray-500 text-sm w-8 text-right">3</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400 text-sm">export</span>
                    <span className="text-purple-400 text-sm">default</span>
                    <span className="text-blue-400 text-sm">developer</span>
                    <span className="text-gray-300">;</span>
                  </div>
                </div>
                
                {/* Line 4 - Comment */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500 text-sm w-8 text-right">4</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600 text-sm">//</span>
                    <span className="text-gray-400 text-sm">Software Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <InteractiveButton
              onClick={() => window.open('https://drive.google.com/file/d/1zpndB1s7RB9mfZ0AgyxbWetk5ZZcAxJW/view?usp=sharing', '_blank')}
              gradientColors="rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6)"
            >
              <Download className="w-5 h-5" />
              <span>Resume</span>
            </InteractiveButton>
            
            <InteractiveButton
              onClick={() => window.open('https://github.com/Prashant-ambati', '_blank')}
              gradientColors="rgba(147, 51, 234, 0.6), rgba(236, 72, 153, 0.6)"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </InteractiveButton>
            
            <InteractiveButton
              onClick={() => window.open('https://linkedin.com/in/prashant-ambati-a9b030229', '_blank')}
              gradientColors="rgba(59, 130, 246, 0.6), rgba(34, 211, 238, 0.6)"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </InteractiveButton>
          </motion.div>
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