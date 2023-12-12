import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex'>
        <motion.div
        animate='visible'
        initial='hidden'
        className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            className=' welcome-box py-[15px] px[4px] border border-[#7042f88b] opacity-[0.9] px-10 rounded-full w-[30%]'
            animate={{translateY:[-500,0]}}
            >
                <Button
                className='className="text-[#b49bff] mr-[10px] h-5 w-full'>
                <h1
                className='welcome-text text-[13px] text-white'>
                 Full stack Developer
                </h1>
                </Button>
            </motion.div>
            <motion.div
            animate={{translateX:[-500,0]}}
            initial='hidden'
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
            >
                <span>
                Providing
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold'> the best </span>
                Project Experience
                </span>
            </motion.div>
            <motion.p
            animate={{translateX:[-500,0]}}
            className='text-lg text-gray-400 my-5 max-w-[600px]'>
                Proficient Gradute of computer science and eager software developer with advanced expertise 
                in Typescript and programming educational experience in app development as well as web design.
                Experience working to developed over 20 projects. Looking for a role which allows for growth and continuous learning
                 All projects displayed on Github
            </motion.p>
            <Button
            className='text-white h-[40px] bg-[#7042f88b] w-[30%] rounded-lg'>
                <Link href='/About'>
                    Learn More
                </Link>
            </Button>
        </div>
        </motion.div>
        <motion.div
        animate={{translateX:[100,0]}}>
            <Image
            src='/mainIconsdark.svg'
            className='mt-[40%]'
            alt='work icons'
            height={650}
            width={650}
            />
        </motion.div>
    </div>
  )
}

export default Hero
