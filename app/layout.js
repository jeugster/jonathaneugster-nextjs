import Nav from '@components/Nav'
import Footer from '@components/Footer'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'
// dynamic pattern https://nextjs.org/docs/app/api-reference/functions/generate-metadata
//import { Metadata } from 'next'

export const metadata = {
 title: 'Portfolio Site for Jonathan Eugster',
}

// dynamic pattern https://nextjs.org/docs/app/api-reference/functions/generate-metadata
//export async function generateMetadata({ params }) {
//  return {
//   title: '...',
// }
//}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <GoogleTagManager gtmId="GTM-PX5R9R4" />
   <body className={inter.className}>
    <main className="flex-auto w-full h-full">
     <div className="overlay backdrop-blur"></div>
     <Nav />
     <div className={'flex items-center justify-center'}>{children}</div>
     <Footer />
    </main>
   </body>
  </html>
 )
}
