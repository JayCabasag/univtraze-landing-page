import { AndroidImage, AppleImage } from "@/components/shared/Images/MobileIcons";
import { PhoneFontFourImage, PhoneFontThreeImage } from "@/components/shared/Images/PhoneImages";
import { cn } from "@/lib/cn";
import { motion } from 'framer-motion'

export default function Download() {
  return (
    <div id="download" className="z-10 flex py-[45px] md:py-[15px] px-2 flex-col items-center relative md:px-8 overflow-hidden h-auto min-h-screen justify-center w-full max-w-7xl">
       <motion.div
          initial={{ opacity: 0, y: 100 }} // Start from bottom (y: 100)
          animate={{ opacity: 1, y: 0 }}   // Move up to its final position (y: 0) while fading in
          transition={{ duration: .75, delay: 1}}
        className={cn('flex gap-[40px] items-center flex-col md:flex-row')}>
            <div className="w-full flex items-center justify-center relative">
            <PhoneFontThreeImage className="h-[380px] -mt-[70px]"/>
            <PhoneFontFourImage  className="h-[380px] -mb-[70px]"/>
            </div>
            <div className="w-full flex flex-col mt-[50px] md:mt-0 max-w-[500px]">
                <h1 className="text-[18px] md:text-[22px] font-bold">DOWNLOAD THE APP BELOW</h1>
                <p className="mt-[20px] md:mt-[40px] leading-[30px] text-[16px] font-normal">Download and install the UnivTraze App now! Be Traced, in UnivTraze!</p>
                <div className="flex flex-col md:flex-row mt-[40px] gap-[20px]">
                    <button className="flex flex-row gap-1 items-center justify-center h-[44px] bg-gradient-to-b from-[#28CD93] to-[#26B582] rounded-[10px] text-[#ffffff] font-semibold px-[15px]">
                        <AndroidImage />
                        Download for Android
                    </button>
                    <button className="flex flex-row gap-1 items-center justify-center h-[44px] bg-gradient-to-b from-[#6BF27F] to-[#28CD41] rounded-[10px] text-[#ffffff] font-semibold px-[15px]">
                        <AppleImage />
                        Download for IOS
                    </button>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
