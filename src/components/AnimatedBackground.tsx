import { motion } from 'framer-motion'

interface AnimatedBackgroundProps {
  type?: 'home' | 'about' | 'projects' | 'experience' | 'education' | 'contact' | 'coffee'
}

const AnimatedBackground = ({ type = 'home' }: AnimatedBackgroundProps) => {
  const renderBackground = () => {
    switch (type) {
      case 'home':
        return <HomeBackground />
      case 'about':
        return <AboutBackground />
      case 'projects':
        return <ProjectsBackground />
      case 'experience':
        return <ExperienceBackground />
      case 'education':
        return <EducationBackground />
      case 'contact':
        return <ContactBackground />
      case 'coffee':
        return <CoffeeBackground />
      default:
        return <HomeBackground />
    }
  }

  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
      {renderBackground()}
    </div>
  )
}

// Home Background - Swirling particles representing creativity and innovation
const HomeBackground = () => (
  <div className="relative w-full h-full">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-4 h-4 bg-white/40 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 2,
        }}
      />
    ))}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"
      animate={{
        background: [
          "linear-gradient(45deg, rgba(0,0,0,0.4) 0%, transparent 100%)",
          "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 100%)",
          "linear-gradient(45deg, rgba(0,0,0,0.4) 0%, transparent 100%)",
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
)

// About Background - Flowing lines representing personal journey and growth
const AboutBackground = () => (
  <div className="relative w-full h-full">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${100 + Math.random() * 200}px`,
        }}
        animate={{
          x: [-200, window.innerWidth + 200],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 6 + Math.random() * 4,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 3,
        }}
      />
    ))}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"
      animate={{
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
)

// Projects Background - Grid pattern representing code structure and organization
const ProjectsBackground = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 opacity-30">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border-2 border-white/20"
          style={{
            left: `${(i % 5) * 20}%`,
            top: `${Math.floor(i / 5) * 20}%`,
            width: '20%',
            height: '20%',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"
      animate={{
        background: [
          "linear-gradient(45deg, rgba(0,255,0,0.1) 0%, rgba(0,0,255,0.1) 100%)",
          "linear-gradient(135deg, rgba(0,0,255,0.1) 0%, rgba(0,255,0,0.1) 100%)",
        ],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
)

// Experience Background - Ascending dots representing career progression
const ExperienceBackground = () => (
  <div className="relative w-full h-full">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-50"
        style={{
          left: `${20 + (i % 4) * 20}%`,
          top: `${100 - (i % 3) * 30}%`,
        }}
        animate={{
          y: [0, -50, -100, -150],
          opacity: [0.5, 0.8, 0.5, 0],
          scale: [1, 1.3, 1, 0.8],
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 4,
        }}
      />
    ))}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-red-900/20"
      animate={{
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
)

// Education Background - Abstract geometric shapes representing knowledge and learning
const EducationBackground = () => (
  <div className="relative w-full h-full">
    {/* Abstract geometric shapes representing knowledge structures */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute border border-white/20"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${20 + Math.random() * 40}px`,
          height: `${20 + Math.random() * 40}px`,
          transform: `rotate(${Math.random() * 45}deg)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 3,
        }}
      />
    ))}
    
    {/* Connecting lines representing learning paths */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`line-${i}`}
        className="absolute h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${60 + Math.random() * 120}px`,
          transform: `rotate(${Math.random() * 90 - 45}deg)`,
        }}
        animate={{
          opacity: [0, 0.3, 0],
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6 + Math.random() * 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      />
    ))}
    
    {/* Floating dots representing knowledge points */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={`dot-${i}`}
        className="absolute w-1 h-1 bg-white/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      />
    ))}
    
    {/* Subtle gradient overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-blue-900/10"
      animate={{
        background: [
          "linear-gradient(45deg, rgba(99,102,241,0.05) 0%, rgba(59,130,246,0.05) 100%)",
          "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(99,102,241,0.05) 100%)",
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
)

// Coffee Background - Floating coffee cups and hearts
const CoffeeBackground = () => (
  <div className="relative w-full h-full">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-4xl"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5 + Math.random() * 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 3,
        }}
      >
        {i % 2 === 0 ? '☕' : '❤️'}
      </motion.div>
    ))}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/20"
      animate={{
        background: [
          "linear-gradient(45deg, rgba(245,158,11,0.1) 0%, rgba(251,146,60,0.1) 100%)",
          "linear-gradient(135deg, rgba(251,146,60,0.1) 0%, rgba(245,158,11,0.1) 100%)",
        ],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
)

// Contact Background - Connecting dots representing networking
const ContactBackground = () => (
  <div className="relative w-full h-full">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 3,
        }}
      />
    ))}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`line-${i}`}
        className="absolute h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${40 + Math.random() * 80}px`,
        }}
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 3,
        }}
      />
    ))}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-teal-900/10 to-cyan-900/10"
      animate={{
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
)

export default AnimatedBackground 