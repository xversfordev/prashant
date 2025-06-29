import { motion } from 'framer-motion'
import { Home, User, FolderOpen, Briefcase, GraduationCap, Mail, Coffee } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const navigate = useNavigate()

  const navItems = [
    { id: 'home', icon: Home, path: '/' },
    { id: 'about', icon: User, path: '/about' },
    { id: 'projects', icon: FolderOpen, path: '/projects' },
    { id: 'experience', icon: Briefcase, path: '/experience' },
    { id: 'education', icon: GraduationCap, path: '/education' },
    { id: 'contact', icon: Mail, path: '/contact' },
    { id: 'buy-me-coffee', icon: Coffee, path: '/buy-me-coffee' },
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
      <div className="glass-card px-6 py-3 flex items-center space-x-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          
          return (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`nav-item ${isActive ? 'active' : 'hover:bg-white/10'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-300'}`} />
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}

export default Navigation 