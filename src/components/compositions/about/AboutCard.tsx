import { ReactNode } from 'react'

interface ComponentProps {
    label: string;
    icon: ReactNode;
    total: number
}

export default function AboutCard({ label, icon, total} : ComponentProps ) {
  return (
    <div className='flex flex-col items-center justify-center'>
        {icon}
        <p className='text-[#ffffff] mt-[12px] font-normal max-w-[150px] text-center'>{label}</p>
        <p className='text-[16px] md:text-[24px] font-bold text-[#ffffff]'>{total}</p>
    </div>
  )
}
