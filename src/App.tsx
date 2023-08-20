import './App.css'
import Navbar from '@/components/compositions/navbar/Navbar'
import { BackgroundOneImage, BackgroundTwoImage } from './components/shared/Images/BackgroundImages'
import Home from './components/compositions/home/Home'
import Footer from './components/compositions/footer/Footer'
import About from './components/compositions/about/About'
import Features from './components/compositions/features/Features'
import Download from './components/compositions/download/Download'
import BackToTop from './components/compositions/navbar/BackToTop'

function App() {

  return (
    <main className='flex items-center justify-center flex-col bg-[#E1F5E4]'>
      <BackgroundTwoImage className='w-full max-w-[1250px] absolute top-0 right-0'/>
      <BackgroundOneImage className='w-full max-w-[1000px] absolute top-0 right-0'/>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Download />
      <BackToTop />
      <Footer />
    </main>
  )
}

export default App
