'use client'
import Hero from "./Components/Hero"
import NavBar from "./Components/NavBar"

export default function Home() {
  return (
    <div className='h-full w-full'>
       <NavBar />
       <Hero />
    </div>
  )
}
