import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 text-#ffffffde">
      <Link to="/about-me" className="hover:text-purple-400">
        About Me
      </Link>
      <Link to="/projects" className="hover:text-purple-400">
        Projects
      </Link>
      <Link to="/blogs" className="hover:text-purple-400">
        Blogs
      </Link>
      <Link to="/contact" className="hover:text-purple-400">
        Contact
      </Link>
    </nav>
  )
}
