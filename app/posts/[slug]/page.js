import {
 getPostsData,
 getPostsSlugs,
 getSlugIndex,
} from '@/components/postsdata'
import { mdxCompiler } from '@/components/MDXDecoder'
export async function generateStaticParams() {
 const params = getPostsSlugs()
 //console.log(params)
 return params
}

//pseudo: Metadata api and?

// export async function generateMetadata({ params }) {
//  const data = getPostsData()
//  const slugindex = getSlugIndex(params.slug)
//  const mdx = await mdxCompiler(data[slugindex].content)

//  return {
//   title: mdx.data.frontmatter.title,
//  }
// }

export default async function Page({ params }) {
 //const {slug} = params
 //console.log(params.slug)
 const data = getPostsData()
 const slugindex = getSlugIndex(params.slug)
 //console.log(params.slug)
 console.log(slugindex)
 console.log(data)
 //console.log(data[0].content)
 //console.log(data[slugindex].content)
 const mdx = await mdxCompiler(data[slugindex].content)
 //console.log(mdxcompiled)

 return (
  <article
   className="prose p-8"
   id="post"
   dangerouslySetInnerHTML={{ __html: mdx.value }}
  ></article>
 )
}
