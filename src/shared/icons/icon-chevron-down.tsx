import type { ComponentPropsWithoutRef } from 'react'

export const IconChevronDown = (props: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g clipPath="url(#a)">
        <path stroke="currentColor" strokeWidth="1.5" d="m15 5-6.5 6.5L2 5" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M16 0v16H0V0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
