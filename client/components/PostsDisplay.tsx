import { JSX, useState } from 'react'

interface Post {
  id: number
  title: string
  description: string
  link?: string | null
  blog?: JSX.Element | null
}

export default function PostListings({ posts }: { posts: Post[] }) {
  const [activePost, setActivePost] = useState<number | null>(null)

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
            <h2 className="text-3xl font-semibold mb-2">{post.title}</h2>
            <p className="text-md mb-4">{post.description}</p>
            {post.link && (
              <a
                href={post.link}
                className="bg-purple-600 rounded px-2.5 py-2 hover:bg-purple-700 hover:text-black transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="public/github-mark-white.svg"
                  alt="github logo"
                  className="max-h-6 object-contain inline-block mr-2"
                />
                View Repo{/*Add github logo*/}
              </a>
            )}
            {/*Pop up blog using useState*/}
            {post.blog && (
              <button
                onClick={() =>
                  setActivePost(activePost === post.id ? null : post.id)
                }
                className="ml-4 px-3 py-1 bg-purple-600 rounded hover:bg-purple-700 hover:text-black transition"
              >
                {'Read Blog'}
              </button>
            )}

            {activePost === post.id && post.blog && (
              <div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                onClick={() => setActivePost(null)}
              >
                <div
                  className="bg-[#242424] text-[#ffffffde] p-8 rounded-xl max-w-3xl max-h-[80vh] overflow-y-auto border border-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setActivePost(null)}
                    className="float-right text-2xl font-bold text-[#ffffffde] hover:text-red-500 transition"
                  >
                    ×
                  </button>
                  <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                  <div className="prose prose-invert max-w-none">
                    {post.blog}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
    </main>
  )
}
