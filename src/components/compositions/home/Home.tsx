import { PhoneFontTwoImage, PhoneFrontOneImage } from "@/components/shared/Images/PhoneImages";
import { motion } from 'framer-motion'

export default function Home() {

  const handleGoToDownload = () => {
    const dowloadSection = document.getElementById('download')
    dowloadSection?.scrollIntoView()
  }

  return (
    <div className="z-10 flex px-2 relative items-center md:px-8 overflow-hidden h-[calc(100vh-186px)] justify-between w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .75 }}
        className="z-10">
            <h1 className="text-[26px] md:text-[44px] font-bold">
              UNIVTRAZE <br /> TRACING APP
            </h1>
            <p className="mt-[13px] w-full max-w-[354px]">
              The UnivTraze is an integrated cross-platform university contact-tracing comprises of mobile applications for users, web platform for administrator and contact-tracing kiosk.
            </p>
            <button onClick={handleGoToDownload} className="mt-[20px] md:mt-[50px] rounded-[10px] font-bold w-[230px] h-[44px] flex items-center justify-center uppercase text-[#FFFFFF] bg-gradient-to-b from-[#6BF27F] to-[#28CD41]">
                Get it now
            </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .75 }}
        className="md:px-0 hidden md:flex absolute -right-10">
            <PhoneFrontOneImage className="-mr-20"/>
            <PhoneFontTwoImage className="-ml-20"/>
        </motion.div>
    </div>
  )
}
