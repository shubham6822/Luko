import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}
