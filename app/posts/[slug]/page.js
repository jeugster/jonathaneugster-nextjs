import { getPostsData, getPostsSlugs, getSlugIndex } from '../lib/postsdata.js'
import { mdxCompiler } from '@/components/MDXDecoder.js'
//import { postsdata } from "../lib/postsdata"

const postsdatastructure = [
 {
  id: '',
  slug: '',
  filename: '',
  addr: '',
  title: '',
  description: '',
  content: '',
 },
]

export function generateStaticParams() {
 const params = getPostsSlugs()
 //console.log(params)
 return params
}

//pseudo: Metadata api and?

export default async function Page({ params }) {
 //const {slug} = params
 //Sconsole.log(params.slug)
 const data = getPostsData()
 const slugindex = getSlugIndex(params.slug)
 //console.log(slugindex)
 //console.log(data[0].content)
 //console.log(data[slugindex].content)
 const mdxcompiled = await mdxCompiler(data[slugindex].content)
 //const htmlcompiled = stringToHtml(mdxcompiled.value)
 //console.log(htmlcompiled)

 return (
  <article
   className="prose"
   id="post"
   dangerouslySetInnerHTML={{ __html: mdxcompiled.value }}
  ></article>
 )
}
