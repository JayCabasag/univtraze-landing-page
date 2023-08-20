import * as React from 'react'
import { SVGAttributes } from "./types"
import { cn } from '@/lib/cn'

const UsersIcon = React.forwardRef<SVGSVGElement, SVGAttributes>(
    ({ className, ...props }, ref) => {
      return (
        <svg 
          stroke="currentColor" 
          className={cn('h-[80px] w-[80px] text-[#ffffff]',className)} 
          {...props} 
          ref={ref}
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    }
  )

UsersIcon.displayName = 'UsersIcon'

export { UsersIcon }
