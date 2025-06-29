import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Coffee, Heart, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'

interface BuyMeCoffeeProps {
  setCurrentPage: (page: string) => void
}

const BuyMeCoffee = ({ setCurrentPage }: BuyMeCoffeeProps) => {
  const navigate = useNavigate()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [copied, setCopied] = useState(false)

  const upiId = 'prashantambati12-1@oksbi'

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText(upiId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy UPI ID:', err)
    }
  }

  const handleGetInTouch = () => {
    setCurrentPage('contact')
    navigate('/contact')
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <AnimatedBackground type="coffee" />
      
      <div className="max-w-4xl mx-auto relative z-10">
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
              className="coffee-gradient"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Buy Me
            </motion.span> Coffee
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            If you found my work helpful or inspiring, consider supporting me with a coffee! ☕
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* QR Code Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass-card p-8">
              <div className="mb-6">
                <Coffee className="w-12 h-12 mx-auto mb-4 text-amber-500" />
                <h2 className="text-2xl font-bold mb-2 coffee-gradient">Scan QR Code</h2>
                <p className="text-slate-300">Use any UPI app to scan and pay</p>
              </div>
              
              <div className="relative inline-block">
                <motion.img
                  src="/qr-code.jpg"
                  alt="UPI QR Code"
                  className="w-64 h-64 mx-auto rounded-lg shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 border-2 border-amber-500 rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* UPI Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* UPI ID Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-4 coffee-gradient">UPI ID</h3>
              <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-lg font-mono text-slate-300">{upiId}</span>
                <motion.button
                  onClick={handleCopyUPI}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-amber-500/20 hover:bg-amber-500/30 transition-colors duration-300"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm mt-2"
                >
                  UPI ID copied to clipboard!
                </motion.p>
              )}
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-4 coffee-gradient">How to Pay</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-white text-sm flex items-center justify-center mr-3 mt-0.5">1</div>
                  <p className="text-slate-300">Open any UPI app (Google Pay, PhonePe, Paytm, etc.)</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-white text-sm flex items-center justify-center mr-3 mt-0.5">2</div>
                  <p className="text-slate-300">Scan the QR code or enter the UPI ID manually</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-white text-sm flex items-center justify-center mr-3 mt-0.5">3</div>
                  <p className="text-slate-300">Enter the amount and complete the payment</p>
                </div>
              </div>
            </motion.div>

            {/* Thank You Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass-card p-8 text-center"
            >
              <Heart className="w-8 h-8 mx-auto mb-4 text-red-500" />
              <h3 className="text-lg font-semibold mb-2 coffee-gradient">Thank You!</h3>
              <p className="text-slate-300">
                Your support means the world to me and helps me continue creating amazing projects and content.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 coffee-gradient">Want to Connect?</h3>
            <p className="text-slate-300 mb-6">
              Let's discuss projects, collaborate, or just have a chat about technology!
            </p>
            <motion.button
              onClick={handleGetInTouch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-white font-medium hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 hover:shadow-lg hover:shadow-pink-400/25 transition-all duration-500 ease-out"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BuyMeCoffee 