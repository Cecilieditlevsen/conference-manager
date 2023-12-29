import type { ComponentPropsWithoutRef } from 'react'

export const IconPin = (props: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2c-4.4 0-8 3.6-8 8 0 1.7333.5333 3.4 1.6 4.8L12 23l6.4-8.2c1.0667-1.4 1.6-3.0667 1.6-4.8 0-4.4-3.6-8-8-8Zm0 10.8667c-1.7333 0-3.2-1.4-3.2-3.2C8.8 8 10.2667 6.5333 12 6.5333c1.7333 0 3.2 1.4 3.2 3.2 0 1.7334-1.4667 3.1334-3.2 3.1334Z"
      />
    </svg>
  )
}
