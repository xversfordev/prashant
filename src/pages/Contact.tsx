import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import AnimatedBackground from '../components/AnimatedBackground'

interface ContactProps {
  setCurrentPage: (page: string) => void
}

const Contact = ({ setCurrentPage }: ContactProps) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactInfo = [
    {
      label: 'Email',
      value: 'prashantambati12@gmail.com',
      link: 'mailto:prashantambati12@gmail.com',
      icon: Mail,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      label: 'Phone',
      value: '+91 7869487655',
      link: 'tel:+917869487655',
      icon: Phone,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      label: 'Location',
      value: 'Raipur, Chhattisgarh, India',
      icon: MapPin,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      label: 'GitHub',
      value: 'github.com/Prashant-ambati',
      link: 'https://github.com/Prashant-ambati',
      icon: Github,
      color: 'from-purple-500 to-pink-500'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/prashant-ambati-a9b030229',
      link: 'https://linkedin.com/in/prashant-ambati-a9b030229',
      icon: Linkedin,
      color: 'from-pink-500 to-rose-500'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const handleViewProjects = () => {
    setCurrentPage('projects')
    navigate('/projects')
  }

  const handleAboutMe = () => {
    setCurrentPage('about')
    navigate('/about')
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <AnimatedBackground type="contact" />
      
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
              className="contact-gradient"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Get In
            </motion.span> Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Let's connect and discuss exciting opportunities
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto rounded-full mt-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8 contact-gradient">Contact Information</h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="flex items-center"
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} mr-4`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-400 mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-primary-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-300">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="glass-card p-6 mt-8"
            >
              <h3 className="text-lg font-semibold mb-4 contact-gradient">Let's Connect</h3>
              <p className="text-slate-300 leading-relaxed">
                I'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology and innovation. Feel free to reach out!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-bold mb-8 contact-gradient">Send a Message</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="p-4 rounded-full bg-green-500/20 w-fit mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-400">Message Sent!</h3>
                <p className="text-slate-300">Thank you for reaching out. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-500 ease-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 contact-gradient">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={handleViewProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-slate-800/50 rounded-full text-slate-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 hover:text-white hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-500 ease-out"
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={handleAboutMe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-slate-800/50 rounded-full text-slate-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-500 ease-out"
              >
                About Me
              </motion.button>
              <motion.a
                href="https://drive.google.com/file/d/1zpndB1s7RB9mfZ0AgyxbWetk5ZZcAxJW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-slate-800/50 rounded-full text-slate-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-500 ease-out"
              >
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 