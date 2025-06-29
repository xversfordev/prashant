import { motion } from 'framer-motion'
import { Brain, Code, Database, Zap } from 'lucide-react'

const LoadingScreen = () => {
  const icons = [Brain, Code, Database, Zap]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl font-bold gradient-text mb-4">
            Prashant Ambati
          </h1>
          <p className="text-xl text-slate-300">
            Data & AI/ML Engineer
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center space-x-4 mb-8"
        >
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="p-3 glass-card rounded-full"
            >
              <Icon className="w-6 h-6 text-primary-400" />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center justify-center space-x-2"
        >
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingScreen 