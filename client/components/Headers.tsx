import { Back } from './Buttons'

export default function PostsHeader({ Text }: { Text: string }) {
  return (
    <header className="text-center mb-8 mt-10">
      <h1 className="text-6xl font-bold mb-4">{Text}</h1>
      <p className="text-lg text-gray-300">
        Check out my {Text.toLowerCase()} below. I don't have a lot of content
        yet, but I'll be updating this page as I continue my journey as a
        developer. (Oldest at the bottom)
      </p>
      <nav className="mt-4">
        <Back />
      </nav>
    </header>
  )
}
