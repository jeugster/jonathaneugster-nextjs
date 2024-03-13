import Link from 'next/link'

// Main navigation component, top bar
export default function Nav() {
 return (
  <div className="header m-4 mb-6">
   <Link href="/" passHref legacyBehavior>
    <h1 className="text-3xl font-bold">Jonathan Eugster</h1>
   </Link>
   <ul className="text-underline ">
    <li>
     <Link href="/posts" passHref>
      posts
     </Link>
    </li>
    <li>
     <Link href="/contact" passHref>
      contact
     </Link>
    </li>
    <li>
     <Link href="https://github.com/jeugster/" passHref>
      github
     </Link>
    </li>
    <li>
     <Link rel="me" href="https://indieweb.social/@jonathaneugster">
      social
     </Link>
    </li>
   </ul>
  </div>
 )
}
