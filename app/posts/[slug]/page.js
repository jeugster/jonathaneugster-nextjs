import { getPostsData, getPostsSlugs, getSlugIndex } from '../lib/postsdata.js'
import { mdxCompiler } from '@/components/MDXDecoder.js'

//import { postsdata } from "../lib/postsdata"

export function generateStaticParams() {
 const params = getPostsSlugs()
 //console.log(params)
 return params
}

//pseudo: Metadata api and?

export async function generateMetadata({ params }) {
 const data = getPostsData()
 const slugindex = getSlugIndex(params.slug)
 const mdxcompiled = await mdxCompiler(data[0].content)

 return {
  title: mdxcompiled.data.frontmatter.title,
 }
}

export default async function Page({ params }) {
 //const {slug} = params
 //Sconsole.log(params.slug)
 const data = getPostsData()
 const slugindex = getSlugIndex(params.slug)
 //console.log(params.slug)
 //console.log(slugindex)
 //console.log(data)
 //console.log(data[0].content)
 //console.log(data[slugindex].content)
 const mdxcompiled = await mdxCompiler(data[0].content)
 //const htmlcompiled = stringToHtml(mdxcompiled.value)
 //console.log(mdxcompiled)

 return (
  <article
   className="prose p-8"
   id="post"
   dangerouslySetInnerHTML={{ __html: mdxcompiled.value }}
  ></article>
 )
}
