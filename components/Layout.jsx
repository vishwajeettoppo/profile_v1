import React from 'react'
import Header from './Header'
import {Sora} from 'next/font/google'
import Nav from './Nav'
import TopLeftImage from './TopLeftImage'

const sora=Sora({
  subsets:['latin'],
  variable:'--font-sora',
  weight:['100', '200', '300', '400', '500', '600', '700', '800']
})

export default function Layout({children}) {
  return (
    <div className={` w-full h-full bg-first text-fourth ${sora.variable} font-sora relative`}>
      <Nav/>
      <Header/>
      {children}
    </div>
  )
}