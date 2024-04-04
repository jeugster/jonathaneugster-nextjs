import Link from 'next/link'

// Main footer component
export default function Footer() {
 return (
  <div className="footer">
   <ul className="flex flex-row">
    <li className="pr-1">
     <Link href="https://github.com/jeugster/next-portfolio">Repo</Link>
    </li>
   </ul>
  </div>
 )
}
