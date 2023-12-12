'use client'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Hero from "./Components/Hero"
import NavBar from "./Components/NavBar"
import { About } from "./Pages"

export default function Home() {
  return (
    <div className='h-full w-full'>
       <NavBar />
       <Hero />
    </div>
  )
}
