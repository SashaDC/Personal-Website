import { JSX, useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
  description: string
  content: JSX.Element | null
  link?: string | null
  liveLink?: string | null
}

export default function PostListings({ posts }: { posts: Post[] }) {
  const [activePost, setActivePost] = useState<number | null>(null)

  useEffect(() => {
    // Prevent background scrolling when modal is open
    if (activePost !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [activePost])

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActivePost(null)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <main>
      {posts
        .slice()
        .reverse()
        .map((post) => (
          <div
            key={post.id}
            className="mb-6 max-w-2xl p-4 rounded-xl border border-gray-300"
          >
            <h2 className="text-3xl font-semibold mb-2 text-purple-400">
              {post.title}
            </h2>
            <p className="text-md mb-4">{post.description}</p>

            <div className="flex gap-4 flex-wrap items-start">
              <div className="flex gap-4 flex-wrap">
                {post.link && (
                  <a
                    href={post.link}
                    className="bg-purple-600 rounded px-2.5 py-2 hover:bg-purple-700 hover:text-black transition inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/github-mark-white.svg"
                      alt="github logo"
                      className="max-h-6 object-contain mr-2"
                    />
                    View Repo
                  </a>
                )}

                {post.liveLink && (
                  <a
                    href={post.liveLink}
                    className="bg-purple-600 rounded px-2.5 py-2 hover:bg-purple-700 hover:text-black transition inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>

              {post.content && (
                <button
                  onClick={() =>
                    setActivePost(activePost === post.id ? null : post.id)
                  }
                  className="bg-purple-600 rounded px-2.5 py-2 hover:bg-purple-700 hover:text-black transition hover:cursor-pointer"
                >
                  Read More...
                </button>
              )}
            </div>

            {activePost === post.id && post.content && (
              <div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                onClick={() => setActivePost(null)}
              >
                <div
                  className="bg-[#242424] text-[#ffffffde] p-8 rounded-xl max-w-3xl max-h-[80vh] overflow-y-auto border border-gray-700 modal-scroll"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setActivePost(null)}
                    className="float-right text-2xl font-bold text-[#ffffffde] hover:text-red-500 transition cursor-pointer"
                  >
                    ×
                  </button>
                  <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                  <div className="prose prose-invert max-w-none">
                    {post.content}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
    </main>
  )
}
