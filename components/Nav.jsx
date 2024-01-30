'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope} from 'react-icons/hi2'
import { motion } from 'framer-motion'

export const navData=[
    {name:'Home', path:'/', icon:<HiHome/>},
    {name:'About', path:'/about', icon:<HiUser/>},
    {name:'Services', path:'/services', icon:<HiRectangleGroup/>},
    {name:'Work', path:'/work', icon:<HiViewColumns/>},
    {name:'Testimonials', path:'/testimonials', icon:<HiChatBubbleBottomCenterText/>},
    {name:'Contact', path:'/contact', icon:<HiEnvelope/>},
]

export default function Nav() {

  const pathname=usePathname();

  return (
    <nav className='flex flex-col items-center xl:justify-center  gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] top-0 w-full xl:w-16 xl:max-w-md xl:h-screen z-30'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-2 bg-fourth xl:h-max text-2xl xl:text-xl xl:rounded-full py-6'>
        {navData.map((link, index)=>{
          return <Link href={link.path} key={index} className={`${link.path===pathname ? `text-third`:`text-first`} relative flex items-center group hover:text-first transition-all duration-300`}>
            <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
              <div className='text-sm text-fourth '>{link.name}</div>
            </div>
            <div>
              {link.icon}
            </div>
          </Link>
        })}
      </div>
    </nav>
  )
}