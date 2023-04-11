import { Manrope } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import './globals.css'

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['400', '600'], 
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#FFF8EE] ${manrope.className}  px-40 pt-12`}>
        <Navbar />
        {children}
        <p className='absolute bottom-2 left-0 right-0  text-center  text-gray-400'>a demo project made to learn nextjs :P</p>
      </body>
    </html>
  )
}
