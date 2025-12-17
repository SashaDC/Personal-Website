import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'

export default createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="/about-me" element={<AboutMe />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/contact" element={<Contact />} />
  </>
)
