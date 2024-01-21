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
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImage/>
      <Nav/>
      <Header/>
      {children}
    </div>
  )
}