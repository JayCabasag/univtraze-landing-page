import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
    if (window.scrollY <= 100) {
        setShowBackToTopButton(false)
    } else {
        setShowBackToTopButton(true)
    }
    });
    return () => {
    window.removeEventListener('scroll', () => {});
    };
  }, []);

  if (!showBackToTopButton) return <></>

  const handleScrollToTop = () => {
    const navbar = document.getElementById('navbar')
    navbar?.scrollIntoView()
  }

  return (
    <div role='button' onClick={handleScrollToTop} className="cursor-pointer animate-bounce fixed z-20 bottom-4 right-4 rounded-full flex items-center justify-center text-[#ffffff] h-[45px] w-[45px] bg-[#28CD41]">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        className="h-5 w-5"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path
        fill="currentColor"
        d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
      </svg>
    </div>
  )
}
