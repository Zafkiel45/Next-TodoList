import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { ProviderJotai } from './providerJotai';
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: "swap", 
})

export const metadata = {
  title: 'todoList',
  description: 'TodoList simple made in Next.js and Tailwindcss. get organized right now!',
}

export default function RootLayout({ children }:Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br" className='h-fit w-screen'>
      <body className={`${montserrat.className} h-fit w-screen flex flex-col gap-5 px-2 py-4`}>
        <ProviderJotai>
          {children}
        </ProviderJotai>
        <Analytics/>
      </body>
    </html>
  )
}
