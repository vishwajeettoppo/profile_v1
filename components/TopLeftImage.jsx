import Image from 'next/image'
import React from 'react'

export default function TopLeftImage() {
  return (
    <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 opacity-50'>
      <Image src={'/top-left-img.png'} alt='' width={400} height={400}/>
    </div>
  )
}
