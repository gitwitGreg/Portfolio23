import React from 'react'
import { Projects } from '../Constatnts'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@nextui-org/react'

const page = () => {
  return (
    <div className='mt-[200px] text-white items-center flex justify-center flex-col w-full h-full gap-20'>
      <h1 className='text-6xl font-serif'>Projects</h1>
      <div className='flex w-full h-full px-14 gap-16 items-center justify-center'>
        {Projects.map((project, index) => (
         <div key={index} className='flex flex-col bg-red-500 text-white gap-10 w-full px-15 bg-transparent rounded-lg py-10'>
            {project.picture && (
            <Image
                src={project.picture}
                alt={project.name}
                width={300}
                height={200}
            />
            )}
            <h1 className='ml-[30%]'>{project.name}</h1>
            <p className='w-[260px] h-[300px]'>{project.description}</p>
            <a href={project.link}>
                <Button
                className='text-white border border-purple-500 py-2 rounded-lg hover:scale-50 transition-[2] ease-in z-30 w-[100%]'>
                    View on Github
                </Button>
            </a>
        </div>
        ))}
      </div>
    </div>
  )
}

export default page
