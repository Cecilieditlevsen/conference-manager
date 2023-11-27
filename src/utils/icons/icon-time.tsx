import type { ComponentPropsWithoutRef } from 'react'

export const IconTime = (props: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        cx="11"
        cy="11.9998"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path stroke="currentColor" strokeWidth="2" d="M10.5 6.4998v6.5l3 3" />
    </svg>
  )
}
