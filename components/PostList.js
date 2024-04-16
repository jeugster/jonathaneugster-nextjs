import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
//import { readFileSync } from 'node:fs'
import { readdirSync } from 'node:fs'
import { postroot } from '@/app/posts/lib/postsdata' 

// Returns posts
export default function PostList(props) {

  const postlist = function getPostsList() {
   const postfilenames = readdirSync(postroot)
   const regex = /\.mdx|\.md/
   // sanitize these slugs of unicode? : Nope, just edit them out of the titles.
   const posts = postfilenames.map((filename) => ({
    post: filename.replace(regex, ''),
   }))
  }
  console.log(postlist)

 return (
  <>
   {props.posts &&
    props.posts.map((post) => (
     <div key={post.id} className="card p-3">
      <article className="max-w-prose" key={post.id}>
       <h2 className="text-2xl font-medium">{post.Title}</h2>
       <p className="p-2">
        <ReactMarkdown className="">{post.Content}</ReactMarkdown>
       </p>
      </article>
      {/* <div className="p-2">
              <Link href={`/posts/${post.Slug}`}>
                <a>Read More</a>
              </Link>
            </div> */}
     </div>
    ))}
  </>
 )
}
