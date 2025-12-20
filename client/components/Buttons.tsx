import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Back() {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(-1)}
      className=" bg-purple-600 rounded px-2.5 py-2 hover:bg-purple-700 hover:text-black transition mt-2 mb-4"
    >
      Back
    </button>
  )
}

export function ToTheTop() {
  const [visible, setVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 200) {
      // show after scrolling 200px
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null // hide button if not visible

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-purple-600 rounded px-2.5 py-2 hover:bg-purple-700 hover:text-black transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
        style={{ width: '24px', height: '24px' }}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
    </button>
  )
}
