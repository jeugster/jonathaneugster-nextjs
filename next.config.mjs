/** @type {import('next').NextConfig} */

import createMDX from '@next/mdx'

const withMDX = createMDX({
 extension: /\.mdx?$/,
 options: {
  // If you use remark-gfm, you'll need to use next.config.mjs
  // as the package is ESM only
  // https://github.com/remarkjs/remark-gfm#install
  remarkPlugins: [],
  //rehypePlugins: [],
  // If you use `MDXProvider`, uncomment the following line.
  // providerImportSource: "@mdx-js/react",
 },
})

const nextConfig = {
 // Configure `pageExtensions` to include MDX files
 pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
 // Optionally, add any other Next.js config below
 experimental: {
  mdxRs: true,
 },
 // output: 'export',
}

export default withMDX(nextConfig)
