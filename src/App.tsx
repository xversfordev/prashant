import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Contact from './pages/Contact'
import BuyMeCoffee from './pages/BuyMeCoffee'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <Router>
      <div className="App text-white min-h-screen">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route path="/" element={<Home setCurrentPage={setCurrentPage} />} />
          <Route path="/about" element={<About setCurrentPage={setCurrentPage} />} />
          <Route path="/projects" element={<Projects setCurrentPage={setCurrentPage} />} />
          <Route path="/experience" element={<Experience setCurrentPage={setCurrentPage} />} />
          <Route path="/education" element={<Education setCurrentPage={setCurrentPage} />} />
          <Route path="/contact" element={<Contact setCurrentPage={setCurrentPage} />} />
          <Route path="/buy-me-coffee" element={<BuyMeCoffee setCurrentPage={setCurrentPage} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 