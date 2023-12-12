import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='mt-[100px] w-full h-full flex text-white px-20 justify-between'>
      <div className='py-[20%] flex flex-col w-[50%]'>
        <h1 className='text-6xl mb-10 font-serif font-normal'> So, Who am I?</h1>
        <p className='w-[80%]'>
        Self-motivated software developer with a passion for creating and learning. 
        Experience in application development. Mastered frameworks such as Next.js while leveraging tools and libraries such as Firebase and Shadcn. 
        Looking for a position that allows for continuous growth and learning.
        </p>
        <Button className='justify-start mt-10 bg-[#7042f88b] h-16 w-40 items-center text-center px-8 border border-[#7042f88b] rounded-lg z-30 hover:bg-transparent ease-in transition-[2]'>
            <Link href='/Contact'>
                Contact me
            </Link>
        </Button>
        <div className="w-full h-full absolute mt-28 ml-[-380px]">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </div>
      <div>
        <Image 
        src='/gphoto.jpg'
        alt='graduation picture'
        className='h-[680px] mt-5'
        width={600}
        height={700}/>
      </div>
    </div>
  )
}

export default page
