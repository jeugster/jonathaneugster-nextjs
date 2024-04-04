import { readFileSync } from 'node:fs'
import { readdirSync } from 'node:fs'
import slugify from 'slugify'
//import slugify

//readFile('/etc/passwd', (err, data) => {
//  if (err) throw err;
//  console.log(data);
//});

export function getPostsData() {
 var postsdata = []

 // Post File Names
 const postfilenames = readdirSync('./jonathaneugster-logseq/pages/')
 postsdata = postfilenames.map((filename) => ({ id: filename }))

 // Post File Addresses
 const postroot = './jonathaneugster-logseq/pages/'
 const postfileaddresses = postfilenames.map((filename) => postroot + filename)
 postsdata = postsdata.map((post) => ({
  ...post,
  addr: postfileaddresses[postsdata.indexOf(post)],
 }))

 // Post Contents
 const posts = postfileaddresses.map((fileaddr) =>
  readFileSync(fileaddr, 'utf8'),
 )
 postsdata = postsdata.map((post) => ({
  ...post,
  content: posts[postsdata.indexOf(post)],
 }))

 // Post Slugs
 const slugs = getPostsSlugs()

 //console.log(postsdata)
 return postsdata
}

export function getPostsSlugs() {
 const postfilenames = readdirSync('./jonathaneugster-logseq/pages/')
 const regex = /\.mdx|\.md/
 // sanitize these slugs of unicode?
 const params = postfilenames.map((filename) => ({
  slug: slugify(filename.replace(regex, '').toLowerCase()),
 }))
 return params
}

export function getSlugIndex(postslug) {
 const postfilenames = readdirSync('./jonathaneugster-logseq/pages/')
 const regex = /\.mdx|\.md/
 const slugs = postfilenames.map((filename) =>
  slugify(filename.replace(regex, '').toLowerCase()),
 )

 //console.log(slugs)
 const slugindex = slugs.indexOf(postslug)
 //console.log(slugindex)
 return slugindex
}
