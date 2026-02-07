import Navbar from '../components/Navbar'

export default function Home() {
  // Home page content
  // Needs: name, Title, navbar, last updated date
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[url(/test.png)]"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/test.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <header className="text-center space-y-3">
        <h1 className="text-6xl font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
          Sasha Chambers
        </h1>
        <h2 className="text-3xl font-semibold drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
          Software Developer
        </h2>
      </header>
      <Navbar />
      <footer className="w-full text-center fixed bottom-2 text-stone-300 drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
        <p>(Last Updated: 08/12/2026})</p>
      </footer>
    </div>
  )
}
