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
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {renderBackground()}
    </div>
  )
}

// Home Background - Sophisticated developer environment with subtle code patterns
const HomeBackground = () => (
  <div className="relative w-full h-full overflow-hidden">
    {/* Debug: Test element to ensure background is working */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30" />
    
    {/* Subtle Code Grid Pattern */}
    <div className="absolute inset-0 opacity-20">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`grid-${i}`}
          className="absolute border border-white/40"
          style={{
            left: `${(i % 4) * 25}%`,
            top: `${Math.floor(i / 4) * 25}%`,
            width: '25%',
            height: '25%',
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>

    {/* Floating Syntax Elements */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`syntax-${i}`}
        className="absolute font-mono text-xs text-blue-400/60"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -8, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 15 + Math.random() * 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 6,
        }}
      >
        {i % 4 === 0 && "{}"}
        {i % 4 === 1 && "()"}
        {i % 4 === 2 && "[]"}
        {i % 4 === 3 && "=>"}
      </motion.div>
    ))}

    {/* Subtle Data Flow Lines */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`flow-${i}`}
        className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${120 + Math.random() * 180}px`,
          transform: `rotate(${Math.random() * 360}deg)`,
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scaleX: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 18 + Math.random() * 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 7,
        }}
      />
    ))}

    {/* Minimal Binary Dots */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`binary-${i}`}
        className="absolute w-1 h-1 bg-white/50 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10 + Math.random() * 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 5,
        }}
      />
    ))}

    {/* Professional Gradient Overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-blue-900/25"
      animate={{
        background: [
          "linear-gradient(45deg, rgba(0,0,0,0.3) 0%, transparent 65%, rgba(30,58,138,0.25) 100%)",
          "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 65%, rgba(30,58,138,0.25) 100%)",
          "linear-gradient(45deg, rgba(0,0,0,0.3) 0%, transparent 65%, rgba(30,58,138,0.25) 100%)",
        ],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Subtle Noise Texture */}
    <div className="absolute inset-0 opacity-20">
      <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
    </div>
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
      className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/20 via-[#06b6d4]/20 to-[#14b8a6]/20"
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
      className="absolute inset-0 bg-gradient-to-br from-[#085162]/20 to-[#c6e7f9]/20"
      animate={{
        background: [
          "linear-gradient(90.1deg, rgba(8,81,98,0.2) 14.5%, rgba(198,231,249,0.2) 135.4%)"
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
        className="absolute w-4 h-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-50"
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
      className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-cyan-900/20"
      animate={{
        background: [
          "linear-gradient(45deg, rgba(20,184,166,0.1) 0%, rgba(6,182,212,0.1) 100%)",
          "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(20,184,166,0.1) 100%)",
        ],
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
      className="absolute inset-0 bg-gradient-to-br from-rose-900/10 to-pink-900/10"
      animate={{
        background: [
          "linear-gradient(45deg, rgba(244,63,94,0.05) 0%, rgba(236,72,153,0.05) 100%)",
          "linear-gradient(135deg, rgba(236,72,153,0.05) 0%, rgba(244,63,94,0.05) 100%)",
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
)

// Coffee Background - Sophisticated support and appreciation theme
const CoffeeBackground = () => (
  <div className="relative w-full h-full">
    {/* Elegant geometric patterns representing support networks */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute border border-white/10"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${40 + Math.random() * 60}px`,
          height: `${40 + Math.random() * 60}px`,
          transform: `rotate(${Math.random() * 45}deg)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 12 + Math.random() * 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 4,
        }}
      />
    ))}
    
    {/* Subtle connecting lines representing community support */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`line-${i}`}
        className="absolute h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${50 + Math.random() * 100}px`,
          transform: `rotate(${Math.random() * 90 - 45}deg)`,
        }}
        animate={{
          opacity: [0, 0.3, 0],
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 3,
        }}
      />
    ))}
    
    {/* Floating particles representing appreciation */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute w-1 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 6 + Math.random() * 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 4,
        }}
      />
    ))}
    
    {/* Sophisticated gradient overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-orange-900/8 to-red-900/5"
      animate={{
        background: [
          "linear-gradient(45deg, rgba(245,158,11,0.03) 0%, rgba(234,88,12,0.05) 50%, rgba(239,68,68,0.03) 100%)",
          "linear-gradient(135deg, rgba(239,68,68,0.03) 0%, rgba(234,88,12,0.05) 50%, rgba(245,158,11,0.03) 100%)",
        ],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
      className="absolute inset-0 bg-gradient-to-br from-sky-900/10 to-blue-900/10"
      animate={{
        background: [
          "linear-gradient(45deg, rgba(14,165,233,0.05) 0%, rgba(59,130,246,0.05) 100%)",
          "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(14,165,233,0.05) 100%)",
        ],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
)

export default AnimatedBackground 