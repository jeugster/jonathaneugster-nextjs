import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParseFrontmatter from 'remark-parse-frontmatter'

export async function mdxCompiler(mdx) {
 const mdxcompiled = await unified()
  .use(remarkParse) // Convert into markdown AST
  .use(remarkFrontmatter)
  .use(remarkParseFrontmatter)
  .use(remarkRehype) // Transform to HTML AST
  .use(rehypeSanitize) // Sanitize HTML input
  .use(rehypeStringify) // Convert AST into serialized HTML

  .process(mdx)
 //console.log(mdx)
 //console.log(mdxcompiled)
 return mdxcompiled
}
