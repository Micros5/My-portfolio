import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import StarsCanvas from '@/Components/main/StarBackground';
import NavBar from '@/Components/main/Navbar';
import Footer from '@/Components/main/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My-Portfolio',
  description: 'This is my portfolio ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden'}>
        <StarsCanvas/>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
