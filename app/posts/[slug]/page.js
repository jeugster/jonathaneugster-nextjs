import { getPostsData, getPostsSlugs, getSlugIndex } from "../lib/postsdata.js";
//import { postsdata } from "../lib/postsdata"

const postsdatastructure = [{
    id:'',
    slug:'',
    filename:'',
    addr:'',
    title:'',
    description:'',
    content:''
  }]

export function generateStaticParams() {
  const params = getPostsSlugs()
  //console.log(params)
  return params
  }

//pseudo: Metadata api and?

export default function Page({params}) {
  //const {slug} = params
  console.log(params.slug)
  const data = getPostsData()
  const slugindex = getSlugIndex(params.slug)
  //const slugindex = data.findIndex('{slug:params.slug}')
  //console.log(data[0].content)

  return (
      <article className="prose">{data[slugindex].content}</article>
  )
} 