import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Brain, Eye, BarChart3, Mic, Droplets, Smartphone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'

interface ProjectsProps {
  setCurrentPage: (page: string) => void
}

const Projects = ({ setCurrentPage }: ProjectsProps) => {
  const navigate = useNavigate()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "AlexNet-CNN",
      subtitle: "CNN Image Classification",
      description: "Implemented AlexNet (2012), achieved 95% accuracy on CIFAR-10 and MNIST. Optimized inference with TensorRT.",
      icon: Brain,
      github: "https://github.com/Prashant-ambati/alexnet-CNN.git",
      color: "from-purple-500 to-pink-500",
      tags: ["Deep Learning", "Computer Vision", "TensorRT", "PyTorch"]
    },
    {
      title: "LLaVA Implementation",
      subtitle: "Multimodal AI",
      description: "Fine-tuned LLaVA for visual QA with 85% accuracy. Optimized serving on AWS SageMaker using model quantization.",
      icon: Eye,
      github: "https://github.com/Prashant-ambati/llava-implementation.git",
      color: "from-blue-500 to-indigo-500",
      tags: ["Multimodal AI", "LLaVA", "AWS SageMaker", "Model Quantization"]
    },
    {
      title: "COVID Economic Dashboard",
      subtitle: "Data Analysis & Visualization",
      description: "Processed 10+GB economic data and built interactive dashboards with automated daily updates to support pandemic response.",
      icon: BarChart3,
      github: "https://github.com/Prashant-ambati/covid-economic-analysis.git",
      color: "from-cyan-500 to-blue-500",
      tags: ["Data Analysis", "Dashboard", "Big Data", "Automation"]
    },
    {
      title: "Transcriptocast",
      subtitle: "Multilingual AI Transcription",
      description: "Built multilingual microservices-based transcription (95% accuracy, 70% latency reduction through caching).",
      icon: Mic,
      github: "https://github.com/Prashant-ambati/transcriptocast.git",
      color: "from-indigo-500 to-purple-500",
      tags: ["NLP", "Microservices", "Multilingual", "Caching"]
    },
    {
      title: "CropX",
      subtitle: "Deep Learning Crop Recommendation System",
      description: "Sophisticated deep learning system with custom neural network architecture for personalized crop recommendations based on soil conditions and environmental factors. Features Streamlit interface, RESTful API, and weather data integration.",
      icon: Droplets,
      github: "https://github.com/Prashant-ambati/CropX",
      color: "from-blue-500 to-cyan-500",
      tags: ["Deep Learning", "Neural Networks", "Streamlit", "RESTful API", "Agriculture"]
    },
    {
      title: "NeuroPulse",
      subtitle: "AI-Powered Focus & Energy Tracker",
      description: "Fully on-device iOS app using AppIntents, Widgets, Live Activities, and CoreML for privacy-first focus tracking with HealthKit integration.",
      icon: Smartphone,
      github: "https://github.com/Prashant-ambati/Neuropulse",
      color: "from-purple-500 to-pink-500",
      tags: ["iOS", "SwiftUI", "CoreML", "HealthKit", "Privacy-First"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const handleGetInTouch = () => {
    setCurrentPage('contact')
    navigate('/contact')
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <AnimatedBackground type="projects" />
      
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
              className="projects-gradient"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Projects
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Showcasing my work in AI/ML, data engineering, and full-stack development
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-[#085162] to-[#c6e7f9] mx-auto rounded-full mt-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="project-card group"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-full bg-gradient-to-r from-[#085162] to-[#c6e7f9] mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-slate-400">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#085162] hover:to-[#c6e7f9] hover:text-white transition-all duration-500 ease-out"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 + idx * 0.05 }}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold projects-gradient">
                        {project.title === "AlexNet-CNN" ? "95%" :
                         project.title === "LLaVA Implementation" ? "85%" :
                         project.title === "COVID Economic Dashboard" ? "10+GB" :
                         "95%"}
                      </div>
                      <div className="text-xs text-gray-400">
                        {project.title === "AlexNet-CNN" ? "Accuracy" :
                         project.title === "LLaVA Implementation" ? "Accuracy" :
                         project.title === "COVID Economic Dashboard" ? "Data Processed" :
                         "Accuracy"}
                      </div>
                    </div>
                    
                    {project.title === "Transcriptocast" && (
                      <div className="text-center">
                        <div className="text-lg font-bold projects-gradient">70%</div>
                        <div className="text-xs text-gray-400">Latency Reduction</div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 projects-gradient">Interested in Collaborating?</h3>
            <p className="text-slate-300 mb-6">
              I'm always open to discussing new opportunities and exciting projects. Let's build something amazing together!
            </p>
            <motion.button
              onClick={handleGetInTouch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#085162] to-[#c6e7f9] rounded-full text-white font-medium hover:bg-gradient-to-r hover:from-[#085162] hover:to-[#c6e7f9] hover:shadow-lg hover:shadow-[#085162]/25 transition-all duration-500 ease-out"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects 