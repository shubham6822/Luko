import React from 'react'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <div className='z-0 min-h-screen bg-blue-500'></div>
    </div>
  )
}
