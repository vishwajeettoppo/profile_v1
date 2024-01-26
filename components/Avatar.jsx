import Image from 'next/image'
import React from 'react'

export default function Avatar() {
  return (
    <div className='relative h-full w-full'>
      <Image src={'/avatar.png'} alt='' layout='fill' objectFit='contain' className=' rounded-full'/>
    </div>
  )
}
