import { useState } from 'react'
import { UnivtrazeLogo } from "@/components/shared/icons/UnivtrazeLogo";
import { cn } from '@/lib/cn';

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false)

  return (
  <nav id='navbar' className="bg-[#E1F5E4] md:bg-transparent flex md:px-4 z-10 w-full max-w-7xl items-center justify-between flex-wrap py-[12px] md:py-[24px]">
    <div className="ml-4 flex items-center gap-2 flex-shrink-0 text-white mr-6">
      <UnivtrazeLogo className="h-[45px] w-[45px]" />
      <h1 className="text-[22px] font-bold">
        UnivTraze
      </h1>
    </div>
    <div className="block mr-4 md:hidden">
      <button onClick={() => setShowMenu(!showMenu)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className={cn(" ml-4 w-full md:max-w-max block flex-grow md:flex lg:items-center lg:w-auto", showMenu ? 'block' : 'hidden')}>
      <div className="text-[16px] md:flex md:gap-[54px] font-normal md:flex-grow">
        <a href="#about" className="block p-2 py-3 md:p-0 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About
        </a>
        <a href="#features" className="block p-2 py-3 md:p-0 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Features
        </a>
        <a href="#support" className="block p-2 py-3 md:p-0 lg:inline-block lg:mt-0 text-teal-200 text-white hover:text-white">
          Support
        </a>
      </div>
    </div>
  </nav>
  )
}
