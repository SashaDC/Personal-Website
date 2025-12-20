import { Back } from '../components/Buttons'

export default function Contact() {
  return (
    <div className="min-h-screen max-h-screen overflow-hidden flex flex-col items-center justify-center px-4">
      <header className="text-center mb-8">
        <h1 className="text-6xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Feel free to reach out through any of the methods below. I'm always
          open to discussing new opportunities, collaborations, or just having a
          chat about tech!
        </p>
        <nav className="mt-4">
          <Back />
        </nav>
      </header>

      <main className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row gap-6 flex-wrap justify-center md:justify-between">
          {/* Email */}
          <a
            href="mailto:contact@sashachambers.dev"
            className="p-6 rounded-xl border border-gray-300 hover:border-purple-600 hover:bg-purple-600/10 transition-all flex-1 md:flex-none md:w-[calc(50%-12px)]"
          >
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-purple-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <div>
                <h2 className="text-2xl font-semibold mb-1">Email</h2>
                <p className="text-gray-400 break-all">
                  contact@sashachambers.dev
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sashachambers"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-gray-300 hover:border-purple-600 hover:bg-purple-600/10 transition-all flex-1 md:flex-none md:w-[calc(50%-12px)]"
          >
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-purple-400"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              <div>
                <h2 className="text-2xl font-semibold mb-1">LinkedIn</h2>
                <p className="text-gray-400 break-all">
                  linkedin.com/in/sashachambers
                </p>
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SashaDC"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-gray-300 hover:border-purple-600 hover:bg-purple-600/10 transition-all flex-1 md:flex-none md:w-[calc(50%-12px)]"
          >
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-purple-400"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div>
                <h2 className="text-2xl font-semibold mb-1">GitHub</h2>
                <p className="text-gray-400 break-all">github.com/SashaDC</p>
              </div>
            </div>
          </a>

          {/* CV Download */}
          <a
            href="/Sasha Chambers CV.pdf"
            download
            className="p-6 rounded-xl border border-gray-300 hover:border-purple-600 hover:bg-purple-600/10 transition-all flex-1 md:flex-none md:w-[calc(50%-12px)]"
          >
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-purple-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              <div>
                <h2 className="text-2xl font-semibold mb-1">Download CV</h2>
                <p className="text-gray-400 break-all">View my full resume</p>
              </div>
            </div>
          </a>
        </div>
      </main>
    </div>
  )
}
