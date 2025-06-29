import { motion } from 'framer-motion'
import { Home, User, FolderOpen, Briefcase, GraduationCap, Mail, Coffee } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const navigate = useNavigate()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeItemRect, setActiveItemRect] = useState({ x: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 400 // Much larger threshold for ultra-smooth transition
      const progress = Math.min(scrollPosition / maxScroll, 1)
      // Use smooth easing function for more natural feel
      const smoothProgress = 1 - Math.pow(1 - progress, 3)
      setScrollProgress(smoothProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate ultra-smooth values based on scroll progress
  const paddingY = 0.6 - (scrollProgress * 0.15) // 0.6rem to 0.45rem (reduced from 1rem to 0.75rem)
  const paddingX = 2 - (scrollProgress * 0.5) // 2rem to 1.5rem
  const borderRadius = 2 - (scrollProgress * 0.5) // 2rem to 1.5rem
  const titleOpacity = Math.max(0, 1 - (scrollProgress * 1.2)) // Start fading earlier
  const titleWidth = scrollProgress > 0.8 ? 0 : "auto"
  const titleMargin = scrollProgress > 0.8 ? 0 : "0.5rem"
  const separatorOpacity = Math.max(0.1, 0.5 - (scrollProgress * 0.4)) // More gradual fade
  const separatorHeight = 1.5 - (scrollProgress * 0.25) // 1.5rem to 1.25rem (reduced from 2rem to 1.5rem)

  // Mobile detection
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const updatePosition = () => {
      const activeItem = itemRefs.current[currentPage]
      if (activeItem && navRef.current) {
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
        const leftPaddingPx = paddingX * rootFontSize
        let x = activeItem.offsetLeft - leftPaddingPx
        let width = activeItem.offsetWidth
        // On mobile, no left padding, use flex layout
        if (isMobile) {
          x = activeItem.offsetLeft - navRef.current.offsetLeft
          width = activeItem.offsetWidth
        }
        setActiveItemRect({ x, width })
      }
    }
    updatePosition()
    const timer = setTimeout(updatePosition, 50)

    // Listen for scroll on nav container (horizontal scroll)
    const nav = navRef.current
    if (nav) {
      nav.addEventListener('scroll', updatePosition)
      nav.addEventListener('transitionend', updatePosition)
    }

    return () => {
      clearTimeout(timer)
      if (nav) {
        nav.removeEventListener('scroll', updatePosition)
        nav.removeEventListener('transitionend', updatePosition)
      }
    }
  }, [currentPage, scrollProgress, paddingX, isMobile])

  useEffect(() => {
    const handleResize = () => {
      const activeItem = itemRefs.current[currentPage]
      if (activeItem && navRef.current) {
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
        const leftPaddingPx = paddingX * rootFontSize
        const x = activeItem.offsetLeft - leftPaddingPx
        const width = activeItem.offsetWidth
        setActiveItemRect({ x, width })
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentPage, paddingX])

  useEffect(() => {
    const timer = setTimeout(() => {
      const activeItem = itemRefs.current[currentPage]
      if (activeItem && navRef.current) {
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
        const leftPaddingPx = paddingX * rootFontSize
        const x = activeItem.offsetLeft - leftPaddingPx
        const width = activeItem.offsetWidth
        setActiveItemRect({ x, width })
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [currentPage, paddingX])

  const navItems = [
    { 
      id: 'home', 
      icon: Home, 
      title: 'Home',
      path: '/',
      gradient: 'from-blue-500 to-purple-600',
      glow: 'hover:shadow-blue-500/50'
    },
    { 
      id: 'about', 
      icon: User, 
      title: 'About',
      path: '/about',
      gradient: 'from-[#14b8a6] to-[#06b6d4]',
      glow: 'hover:shadow-[#14b8a6]/50'
    },
    { 
      id: 'projects', 
      icon: FolderOpen, 
      title: 'Projects',
      path: '/projects',
      gradient: 'from-[#085162] to-[#c6e7f9]',
      glow: 'hover:shadow-[#085162]/50'
    },
    { 
      id: 'experience', 
      icon: Briefcase, 
      title: 'Experience',
      path: '/experience',
      gradient: 'from-teal-500 to-cyan-600',
      glow: 'hover:shadow-teal-500/50'
    },
    { 
      id: 'education', 
      icon: GraduationCap, 
      title: 'Education',
      path: '/education',
      gradient: 'from-rose-500 to-pink-600',
      glow: 'hover:shadow-rose-500/50'
    },
    { 
      id: 'contact', 
      icon: Mail, 
      title: 'Contact',
      path: '/contact',
      gradient: 'from-sky-500 to-blue-600',
      glow: 'hover:shadow-sky-500/50'
    },
    { 
      id: 'buy-me-coffee', 
      icon: Coffee, 
      title: 'Buy Me a Coffee',
      path: '/buy-me-coffee',
      gradient: 'from-amber-500 to-orange-600',
      glow: 'hover:shadow-amber-500/50'
    },
  ]

  const handleNavClick = (item: typeof navItems[0]) => {
    setCurrentPage(item.id)
    navigate(item.path)
  }

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      className="floating-nav"
    >
      <motion.div 
        ref={navRef}
        className="glass-card flex items-center space-x-1 sm:space-x-2 max-w-full overflow-x-hidden hide-scrollbar relative"
        style={{
          padding: `${paddingY}rem ${paddingX}rem`,
          borderRadius: `${borderRadius}rem`
        }}
        transition={{ duration: 0.05, ease: "easeOut" }}
      >
        {/* Sliding Glass Bar */}
        <motion.div
          className={`absolute rounded-full ${
            currentPage === 'buy-me-coffee' 
              ? 'glass-slider-coffee bg-white/60' 
              : 'glass-slider bg-white/8'
          }`}
          style={{
            x: activeItemRect.x,
            width: activeItemRect.width,
            height: `calc(100% - ${paddingY * 2}rem)`,
            top: `${paddingY}rem`,
          }}
          animate={{
            x: activeItemRect.x,
            width: activeItemRect.width,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 35,
            mass: 0.6
          }}
          onUpdate={(latest) => {
            console.log('Glass Slider Position:', {
              x: latest.x,
              width: latest.width,
              activeItemRect
            })
          }}
        >
          {/* Primary Glass Reflection */}
          <div className={`absolute inset-0 rounded-full ${
            currentPage === 'buy-me-coffee'
              ? 'glass-reflection-coffee'
              : 'glass-reflection'
          }`} />
          
          {/* Secondary Glass Reflection */}
          <div className={`absolute inset-0 rounded-full ${
            currentPage === 'buy-me-coffee'
              ? 'bg-gradient-to-tl from-white/60 via-transparent to-transparent'
              : 'bg-gradient-to-tl from-white/30 via-transparent to-transparent'
          }`} />
          
          {/* Inner Glass Depth */}
          <div className={`absolute inset-1 rounded-full ${
            currentPage === 'buy-me-coffee'
              ? 'bg-gradient-to-r from-white/30 to-transparent'
              : 'bg-gradient-to-r from-white/10 to-transparent'
          }`} />
          
          {/* Glass Edge Highlight */}
          <div className={`absolute inset-0 rounded-full ${
            currentPage === 'buy-me-coffee'
              ? 'glass-edge-coffee'
              : 'glass-edge'
          }`} />
          
          {/* Subtle Glass Border */}
          <div className={`absolute inset-0 border rounded-full ${
            currentPage === 'buy-me-coffee'
              ? 'border-white/50'
              : 'border-white/30'
          }`} />
          
          {/* Glass Surface Texture */}
          <div className={`absolute inset-0 rounded-full ${
            currentPage === 'buy-me-coffee'
              ? 'glass-surface-coffee'
              : 'glass-surface'
          }`} />
        </motion.div>

        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          const isLastItem = index === navItems.length - 1
          
          return (
            <div key={item.id} className="flex items-center">
              <motion.button
                ref={(el) => itemRefs.current[item.id] = el}
                onClick={() => handleNavClick(item)}
                className={`nav-item ${isActive ? 'active' : ''} ${item.glow} flex-shrink-0 flex items-center space-x-1 sm:space-x-2 relative z-10`}
                whileHover={{ 
                  scale: 1.03
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
              >
                <div className={`relative group ${isActive ? 'active-glow' : ''}`}>
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                    isActive 
                      ? currentPage === 'buy-me-coffee' ? 'text-gray-900' : 'text-white'
                      : currentPage === 'buy-me-coffee' ? 'text-gray-400' : 'text-white/95 group-hover:text-white'
                  }`} />
                  
                  {/* Glowing background effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-all duration-300 blur-sm`} />
                  
                  {/* Active state glow */}
                  {isActive && (
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient} opacity-30 blur-sm animate-pulse`} />
                  )}
                </div>
                
                {/* Page Title */}
                <motion.span
                  className={`font-light text-sm sm:text-base transition-all duration-300 hidden sm:inline ${
                    isActive 
                      ? currentPage === 'buy-me-coffee' ? 'text-gray-900' : 'text-white'
                      : currentPage === 'buy-me-coffee' ? 'text-gray-400' : 'text-white/95 group-hover:text-white'
                  }`}
                  style={{
                    opacity: titleOpacity,
                    width: titleWidth,
                    marginLeft: titleMargin,
                    overflow: "hidden",
                    whiteSpace: "nowrap"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17,
                    duration: 0.05, 
                    ease: "easeOut" 
                  }}
                >
                  {item.title}
                </motion.span>
              </motion.button>
              
              {/* Separator line between Contact and Coffee */}
              {item.id === 'contact' && (
                <motion.div
                  className="w-px bg-white/20 ml-1 sm:ml-2 hidden sm:block"
                  style={{
                    opacity: separatorOpacity,
                    height: `${separatorHeight}rem`
                  }}
                  transition={{ duration: 0.05, ease: "easeOut" }}
                />
              )}
            </div>
          )
        })}
      </motion.div>
    </motion.nav>
  )
}

export default Navigation 