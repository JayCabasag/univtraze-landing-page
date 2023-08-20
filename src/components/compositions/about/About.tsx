import { UsersIcon } from "@/components/shared/icons/UsersIcon";
import AboutCard from "./AboutCard";
import { VirusIcon } from "@/components/shared/icons/VirusIcon";
import { EmergencyIcon } from "@/components/shared/icons/EmergencyIcon";
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div id="about" className="z-10 flex py-[45px] md:py-[15px] px-2 flex-col items-center relative md:px-8 overflow-hidden h-auto min-h-screen justify-center w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .75 }}
          className="h-auto md:min-h-[267px] flex md:flex-row flex-col gap-2 py-4 w-full justify-between px-[60px] max-w-[860px] bg-gradient-to-b from-[#6BF27F] to-[#28CD41] rounded-[40px]">
          <AboutCard total={100} label="Total Users" icon={<UsersIcon className="h-[60px] w-[60px] md:h-[80px] md:w-[80px]" />} />
          <AboutCard total={10} label="Total Communicable Disease" icon={<VirusIcon className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] text-[#ffffff]" />} />
          <AboutCard total={2020} label="Total Philippines Active Cases" icon={<EmergencyIcon className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] text-[#ffffff]"/>} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Start from bottom (y: 100)
          animate={{ opacity: 1, y: 0 }}   // Move up to its final position (y: 0) while fading in
          transition={{ duration: .75, delay: 1}}
        className="mt-[80px]">
            <h1 className="w-full uppercase flex items-center text-[32px] font-bold justify-center mb-[40px]">About</h1>
            <p className="w-full max-w-[640px] text-center text-[16px]">
              The UnivTraze is a cloud-based contact tracing system which can run on android and IOS Operating system. This system utilize QR Technology in which students, employees and visitors scans their QR code generated in the App in the Kiosks. This app also allows the users to scan room QR code to record contact. This system was developed for the Dissertation by Prof. Edmar G. Tan together with his development team (Jay Cabasag, Robert Figura, Ebrahim Usman, Gio Gindoy and Rogelio Marfil III).
            </p>
        </motion.div>
    </div>
  )
}
