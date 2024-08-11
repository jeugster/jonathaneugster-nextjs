import { getPostsSlugs } from '@components/postsdata.js'
import Link from 'next/link'
// Returns posts

export default function PostList() {
 const postlist = getPostsSlugs()

 return (
  <div>
   <h2>post list</h2>
   <ul>
    {postlist.map((post) => (
     <li key={post.slug}>
      <Link href={`/posts/${post.slug}`}>{post.slug}</Link>
     </li>
    ))}
   </ul>
  </div>
 )
}
