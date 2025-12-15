import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-900 text-white">
      <Link to="/" className="hover:text-emerald-400">
        Home
      </Link>
      <Link to="/projects" className="hover:text-emerald-400">
        Projects
      </Link>
      <Link to="/blogs" className="hover:text-emerald-400">
        Blogs
      </Link>
      <Link to="/contact" className="hover:text-emerald-400">
        Contact
      </Link>
    </nav>
  )
}
