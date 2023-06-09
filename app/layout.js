'use client'
import './globals.css'
import { Inter, Ubuntu } from 'next/font/google'
import Navbar from '../components/navbar'
import Search from '../components/search'
import { BrowserRouter } from 'react-router-dom'

const inter = Ubuntu(
  {
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
  }

)


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='{ inter.className } bg-gradient-to-b from-slate-100 to-teal-700 bg-no-repeat min-h-screen' >
        <BrowserRouter>
          <Navbar />
          <Search />



          { children }


        </BrowserRouter>
      </body>
    </html>
  )
}
