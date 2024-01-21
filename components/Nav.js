import React from 'react'
import {HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope} from 'react-icons/hi2'

export const navData=[
    {name:'home', path:'/', icon:<HiHome/>},
    {name:'about', path:'/about', icon:<HiUser/>},
    {name:'services', path:'/services', icon:<HiRectangleGroup/>},
    {name:'work', path:'/work', icon:<HiViewColumns/>},
    {name:'testimonials', path:'/testimonials', icon:<HiChatBubbleBottomCenterText/>},
    {name:'contact', path:'/contact', icon:<HiEnvelope/>},
]

export default function Nav() {
  return (
    <div>Nav</div>
  )
}
