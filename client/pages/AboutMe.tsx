import { Back } from '../components/Buttons'
import { ToTheTop } from '../components/Buttons'

export default function AboutMe() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 mt-10">
      <div className="max-w-4xl w-full">
        <header className="text-center mb-8 mt-10">
          <h1 className="text-6xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-300">
            A bit about who I am and what I do
          </p>
          <nav className="mt-4">
            <Back />
          </nav>
        </header>
        <main className="space-y-6">
          {/* Who I Am */}
          <section className="p-6 rounded-xl border border-gray-300">
            <h2 className="text-3xl font-semibold mb-3 text-purple-400">
              Who I Am
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Hi! I'm Sasha, a junior full-stack developer from Whangārei, New
              Zealand. I recently completed my Level 6 Applied Software
              Development qualification at Dev Academy Aotearoa, where I
              practised using human skills and problem-solving in full-stack
              applications.
            </p>
          </section>

          {/* My Journey */}
          <section className="p-6 rounded-xl border border-gray-300">
            <h2 className="text-3xl font-semibold mb-3 text-purple-400">
              My Journey
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              My tech journey started in high school when I first learned HTML
              and CSS. After spending nearly three years in retail management, I
              decided to pursue my passion for technology and enrolled in a
              full-stack development bootcamp.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Throughout my training, I've built projects ranging from pixel art
              creators to real-time messaging applications with WebSocket
              integration. I love the challenge of learning new technologies and
              the satisfaction of seeing an idea come to life.
            </p>
          </section>

          {/* What I'm Learning */}
          <section className="p-6 rounded-xl border border-gray-300">
            <h2 className="text-3xl font-semibold mb-3 text-purple-400">
              What I'm Learning
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm currently expanding my skillset by learning Python and C# to
              become a more versatile developer. I'm also diving deeper into
              WebSockets and real-time communication technologies after
              implementing them in my recent projects.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal is to join a collaborative team where I can continue
              learning, contribute meaningful work, and grow both as a developer
              and as a person.
            </p>
          </section>

          {/* Outside of Coding */}
          <section className="p-6 rounded-xl border border-gray-300">
            <h2 className="text-3xl font-semibold mb-3 text-purple-400">
              Outside of Coding
            </h2>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding or working, you'll find me gaming, exploring
              new tech, or spending time with friends and family. I believe in
              maintaining a healthy work-life balance and bringing that same
              energy and enthusiasm to everything I do.
            </p>
          </section>

          <section className="p-6 rounded-xl border border-gray-300 mb-6">
            <h2 className="text-3xl font-semibold mb-3 text-purple-400">
              3 Facts to Know About Me
            </h2>
            <ol className="list-decimal pl-6 text-gray-300 leading-relaxed">
              <li className="mb-2">
                I'm a huge fan of the soulsborne series and love challenging
                myself with difficult games.
              </li>
              <li className="mb-2">
                I like building and fixing things, whether it's code or
                something physical like PCs.
              </li>
              <li className="mb-2">
                During highschool I was a member of the Whangarei Gun Club where
                I competed in national air pistol competitions.
              </li>
            </ol>
          </section>
        </main>
        <ToTheTop />
      </div>
    </div>
  )
}
