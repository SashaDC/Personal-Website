import PostsHeader from '../components/Headers'
import PostsDisplay from '../components/PostsDisplay'
import { blogs } from '../../posts/Blogs'
import { ToTheTop } from '../components/Buttons'

export default function Blogs() {
  // Blogs page content
  // Needs: list of blog posts, which will mainly be the coverage of my journey at dev academy
  // and display the reflections from my previous site
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-10 px-4">
      <PostsHeader Text="Blogs" />
      <PostsDisplay posts={blogs} />
      <ToTheTop />
    </div>
  )
}
