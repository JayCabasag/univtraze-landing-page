import { FeatureOneImage } from "@/components/shared/Images/FeatureImages";
import { cn } from "@/lib/cn";
import { motion } from 'framer-motion'

interface ComponentProps {
    label: string
    description: string
    reverse?: boolean
}

export default function FeatureCard({ label, description, reverse = false}: ComponentProps ) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }} // Start from bottom (y: 100)
    animate={{ opacity: 1, y: 0 }}   // Move up to its final position (y: 0) while fading in
    transition={{ duration: .75, delay: 1}}
    className={cn('flex items-center flex-col md:flex-row', reverse ? 'md:flex-row-reverse' : 'md:flex-row')}>
        <div className="w-full flex items-center justify-center">
          <FeatureOneImage className="w-[220px] h-[173px] md:w-[320px] md:h-[273px]"/>
        </div>
        <div className="w-full flex flex-col max-w-[500px]">
            <h1 className="text-[18px] md:text-[22px] font-bold">{label}</h1>
            <p className="mt-[20px] md:mt-[40px] leading-[30px] text-[16px] font-normal">{description}</p>
        </div>
    </motion.div>
  )
}
