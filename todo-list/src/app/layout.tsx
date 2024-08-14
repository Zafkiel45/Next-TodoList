import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { ProviderJotai } from './providerJotai';
import './globals.css'

const inter = JetBrains_Mono({ 
  subsets: ['latin'],
  display: "swap", 
})

export const metadata = {
  title: 'todoList',
  description: 'TodoList simple made in Next.js and Tailwindcss. get organized right now!',
}

export default function RootLayout({ children }:Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br" className='h-fit w-screen flex justify-center items-center '>
      <body className={`${inter.className}   h-fit w-screen flex justify-center items-center `}>
        <ProviderJotai>
          {children}
        </ProviderJotai>
        <Analytics/>
      </body>
    </html>
  )
}
