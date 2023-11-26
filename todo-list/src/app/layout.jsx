import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'todoList',
  description: 'TodoList simple made in Next.js and Tailwindcss. get organized right now!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className='h-screen w-screen flex justify-center items-center '>
      <body className={`${inter.className} h-screen w-screen flex justify-center items-center `}>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
