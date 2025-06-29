import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'

interface EducationProps {
  setCurrentPage: (page: string) => void
}

const Education = ({ setCurrentPage }: EducationProps) => {
  const navigate = useNavigate()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const education = [
    {
      institution: "Indian Institute of Information Technology, Agartala",
      degree: "B.Tech, Computer Science and Engineering",
      period: "Dec 2021 – Jun 2025",
      grade: "CGPA: 7.69",
      icon: GraduationCap,
      color: "from-pink-500 to-rose-500",
      website: "https://iiitagartala.ac.in/"
    },
    {
      institution: "Ambuja Vidya Peeth, Higher Secondary",
      degree: "Class 12, CBSE Board",
      period: "Mar 2019 – May 2021",
      grade: "77.2%",
      icon: BookOpen,
      color: "from-rose-500 to-orange-500"
    }
  ]

  const achievements = [
    "Specialized in Data Science and Machine Learning",
    "Active participation in technical clubs and hackathons",
    "Strong foundation in computer science fundamentals",
    "Continuous learning through online courses and projects"
  ]

  const handleStartConversation = () => {
    setCurrentPage('contact')
    navigate('/contact')
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <AnimatedBackground type="education" />
      
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
              className="education-gradient"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Education
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Academic journey and continuous learning in technology
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full mt-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="space-y-8">
            {education.map((edu, index) => {
              const Icon = edu.icon
              return (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="glass-card p-8 relative"
                >
                  <div className="flex items-start">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${edu.color} mr-6 flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">
                        {edu.website ? (
                          <a
                            href={edu.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary-400 transition-colors duration-300"
                          >
                            {edu.institution}
                          </a>
                        ) : (
                          edu.institution
                        )}
                      </h3>
                      <p className="text-lg text-slate-300 mb-2">{edu.degree}</p>
                      
                      <div className="flex items-center space-x-6 text-slate-400 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          {edu.grade}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-8 mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 education-gradient">Key Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="flex items-start"
              >
                <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="glass-card p-6 text-center"
          >
            <div className="text-3xl font-bold education-gradient mb-2">Data Science</div>
            <div className="text-slate-300">Machine Learning & Analytics</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="glass-card p-6 text-center"
          >
            <div className="text-3xl font-bold education-gradient mb-2">Computer Science</div>
            <div className="text-slate-300">Fundamentals & Algorithms</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="glass-card p-6 text-center"
          >
            <div className="text-3xl font-bold education-gradient mb-2">Engineering</div>
            <div className="text-slate-300">Problem Solving & Innovation</div>
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
            <h3 className="text-2xl font-bold mb-4 education-gradient">Always Learning</h3>
            <p className="text-slate-300 mb-6">
              I believe in continuous learning and staying updated with the latest technologies. Let's discuss how my academic background and skills can contribute to your projects!
            </p>
            <motion.button
              onClick={handleStartConversation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-white font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-500 ease-out"
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education 