import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Coffee, Heart, Copy, Check, Sparkles, Gift } from 'lucide-react'
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
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-8"
          >
            <Gift className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.span 
              className="coffee-gradient"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Support
            </motion.span> My Work
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            If my projects, insights, or contributions have been valuable to you, consider supporting my continued work and innovation in technology.
          </motion.p>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 mx-auto rounded-full mt-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "8rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* QR Code Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass-card p-10">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 coffee-gradient">Quick Payment</h2>
                <p className="text-slate-300 text-lg">Scan with any UPI-enabled app</p>
              </div>
              
              <div className="relative inline-block">
                <motion.img
                  src="/qr-code.jpg"
                  alt="UPI QR Code"
                  className="w-72 h-72 mx-auto rounded-2xl shadow-2xl border-4 border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 border-2 border-amber-400/50 rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Payment Details Section */}
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
              <div className="flex items-center mb-6">
                <Sparkles className="w-6 h-6 text-amber-400 mr-3" />
                <h3 className="text-2xl font-bold coffee-gradient">UPI ID</h3>
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <span className="text-xl font-mono text-slate-200">{upiId}</span>
                <motion.button
                  onClick={handleCopyUPI}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <Copy className="w-5 h-5 text-white" />
                  )}
                </motion.button>
              </div>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm mt-3 flex items-center"
                >
                  <Check className="w-4 h-4 mr-2" />
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
              <h3 className="text-2xl font-bold mb-6 coffee-gradient">Payment Steps</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold flex items-center justify-center mr-4 mt-1">1</div>
                  <div>
                    <p className="text-slate-200 font-medium mb-1">Open Payment App</p>
                    <p className="text-slate-400">Launch Google Pay, PhonePe, Paytm, or any UPI app</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold flex items-center justify-center mr-4 mt-1">2</div>
                  <div>
                    <p className="text-slate-200 font-medium mb-1">Scan or Enter</p>
                    <p className="text-slate-400">Scan the QR code or manually enter the UPI ID</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold flex items-center justify-center mr-4 mt-1">3</div>
                  <div>
                    <p className="text-slate-200 font-medium mb-1">Complete Payment</p>
                    <p className="text-slate-400">Enter amount and confirm the transaction</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Appreciation Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass-card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 coffee-gradient">Thank You</h3>
              <p className="text-slate-300 leading-relaxed">
                Your support enables me to continue creating innovative solutions, sharing knowledge, and contributing to the tech community.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-20"
        >
          <div className="glass-card p-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 coffee-gradient">Let's Collaborate</h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Beyond support, I'm always excited to discuss new projects, share insights, or explore opportunities to work together on innovative solutions.
            </p>
            <motion.button
              onClick={handleGetInTouch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-white font-semibold text-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-500 ease-out"
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BuyMeCoffee 