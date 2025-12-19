import PostsHeader from '../components/Headers'
import PostsDisplay from '../components/PostsDisplay'
import { projects } from '../../posts/Projects'
import { ToTheTop } from '../components/Buttons'

export default function Projects() {
  // Projects page content
  // Needs: list of projects with descriptions and links to live demos or repositories
  // will be in a rounded card style layout listed by most recent
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-10 px-4 ">
      <PostsHeader Text="Projects" />
      <PostsDisplay posts={projects} />
      <ToTheTop />
    </div>
  )
}
