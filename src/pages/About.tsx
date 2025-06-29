import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Database, Brain, Cloud, Code, Palette, BarChart3, Zap, Users, Target, ChevronRight, Star, Award, TrendingUp, Clock, MapPin } from 'lucide-react'
import AnimatedBackground from '../components/AnimatedBackground'

interface AboutProps {
  setCurrentPage: (page: string) => void
}

const About = ({ setCurrentPage }: AboutProps) => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [hoveredTimeline, setHoveredTimeline] = useState<number | null>(null)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    {
      category: "Data Engineering",
      icon: Database,
      skills: ["ETL Pipelines", "Data Warehousing", "Big Data (Spark, Hadoop)"],
      color: "from-blue-500 to-cyan-500",
      proficiency: 95,
      description: "Building scalable data infrastructure and pipelines"
    },
    {
      category: "Machine Learning",
      icon: Brain,
      skills: ["Deep Learning", "Computer Vision", "NLP", "Model Deployment"],
      color: "from-purple-500 to-pink-500",
      proficiency: 90,
      description: "Developing and deploying intelligent AI solutions"
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (S3, SageMaker)", "Docker", "CI/CD", "Infrastructure as Code"],
      color: "from-green-500 to-emerald-500",
      proficiency: 88,
      description: "Cloud-native development and infrastructure automation"
    },
    {
      category: "Languages",
      icon: Code,
      skills: ["Python", "SQL", "Bash", "JavaScript", "Go", "Ruby"],
      color: "from-orange-500 to-red-500",
      proficiency: 92,
      description: "Multi-language programming expertise"
    },
    {
      category: "Tools & Frameworks",
      icon: BarChart3,
      skills: ["Apache Airflow", "FastAPI", "Flask", "TensorFlow", "PyTorch"],
      color: "from-indigo-500 to-purple-500",
      proficiency: 87,
      description: "Modern frameworks and development tools"
    },
    {
      category: "Data Visualization",
      icon: Palette,
      skills: ["Power BI", "Tableau", "Looker Studio"],
      color: "from-teal-500 to-blue-500",
      proficiency: 85,
      description: "Creating compelling data stories and insights"
    }
  ]

  const achievements = [
    { icon: Award, value: "5+", label: "ML Models Delivered", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, value: "10+GB", label: "Daily Data Processed", color: "from-blue-500 to-cyan-500" },
    { icon: Zap, value: "60%", label: "Latency Reduction", color: "from-green-500 to-emerald-500" }
  ]

  const dynamicTitles = [
    "Superpowers",
    "Weapons",
    "Arsenal", 
    "Tools",
    "Skills",
    "Expertise",
    "Capabilities",
    "Technologies"
  ]

  // Cycle through titles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % dynamicTitles.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen py-20 px-6 overflow-hidden">
      <AnimatedBackground type="about" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Floating Header Elements */}
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 hidden lg:block"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-2 border-purple-500/20 rounded-full"
          />
        </motion.div>
        
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
          className="absolute top-40 right-20 hidden lg:block"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] rounded-full opacity-60"
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20 px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span 
              className="about-gradient"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              About
            </motion.span> Me
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            A passionate <span className="about-gradient font-semibold">Data & AI/ML Engineer</span> with expertise in building scalable systems, 
            deploying intelligent solutions, and transforming data into actionable insights. 
            I bridge the gap between complex algorithms and real-world applications.
          </motion.p>
          
          <motion.div 
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] mx-auto rounded-full mt-6 sm:mt-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          />
        </motion.div>

        {/* Interactive Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-10 mb-20 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#14b8a6]/10 via-[#06b6d4]/10 to-[#14b8a6]/10 rounded-full -translate-y-16 translate-x-16"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl font-bold mb-8 about-gradient flex items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Star className="w-8 h-8 mr-3" />
              My Story
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  I'm a <span className="about-gradient font-semibold">Software Engineer</span> with a deep passion for AI/ML and data systems. 
                  My journey began with curiosity about how machines can learn and has evolved into 
                  building production-grade solutions that impact millions of users.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I specialize in designing scalable backend systems, deploying machine learning models, 
                  and creating intelligent automation solutions. My expertise spans from data engineering 
                  to full-stack development, always with a focus on performance and reliability.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-4"
              >
                <div className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <Target className="w-6 h-6 text-[#14b8a6] mr-3" />
                  <div>
                    <div className="font-semibold text-white">Problem Solver</div>
                    <div className="text-sm text-slate-400">Complex challenges, elegant solutions</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <Zap className="w-6 h-6 text-[#06b6d4] mr-3" />
                  <div>
                    <div className="font-semibold text-white">Performance Focused</div>
                    <div className="text-sm text-slate-400">Optimized for scale and speed</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <Users className="w-6 h-6 text-[#14b8a6] mr-3" />
                  <div>
                    <div className="font-semibold text-white">Team Player</div>
                    <div className="text-sm text-slate-400">Collaborative leadership approach</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Skills Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20 px-4"
        >
          <motion.div className="text-center mb-12 sm:mb-16">
            <motion.span
              key={currentTitleIndex}
              className="text-2xl sm:text-4xl font-bold inline-block"
              style={{
                background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {dynamicTitles[currentTitleIndex]}
            </motion.span>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              const isActive = activeSkill === skill.category
              
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onHoverStart={() => setActiveSkill(skill.category)}
                  onHoverEnd={() => setActiveSkill(null)}
                  className="skill-card group cursor-pointer relative overflow-hidden"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <motion.div 
                        className={`p-3 sm:p-4 rounded-full bg-gradient-to-r ${skill.color} mr-3 sm:mr-4`}
                        animate={isActive ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                      </motion.div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{skill.category}</h3>
                    </div>
                    
                    <motion.p 
                      className="text-slate-400 mb-4 sm:mb-6 text-xs sm:text-sm"
                      initial={{ opacity: 0, height: 0 }}
                      animate={isActive ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.description}
                    </motion.p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs sm:text-sm text-slate-400">Proficiency</span>
                        <span className="text-xs sm:text-sm font-semibold about-gradient">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        />
                      </div>
                    </div>
                    
                    <ul className="space-y-1 sm:space-y-2">
                      {skill.skills.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + idx * 0.05 + 0.3 }}
                          className="flex items-center text-slate-300 text-xs sm:text-sm"
                        >
                          <ChevronRight className={`w-3 h-3 mr-2 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`} />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Animated Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card p-10"
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 about-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Key Achievements
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: index * 2 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  >
                    {achievement.value}
                  </motion.div>
                  
                  <div className="text-slate-300 text-sm">{achievement.label}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About 