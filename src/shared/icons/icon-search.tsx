import type { ComponentPropsWithoutRef } from 'react'

export const IconSearch = (props: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M22.678 24.626 29.913 32 32 29.913l-7.374-7.235c2.087-2.365 3.2-5.426 3.2-8.765C27.826 6.261 21.565 0 13.913 0S0 6.261 0 13.913s6.261 13.913 13.913 13.913c3.339 0 6.4-1.252 8.765-3.2Zm2.365-10.713c0 6.122-5.009 11.13-11.13 11.13s-11.13-5.009-11.13-11.13c0-6.122 5.009-11.13 11.13-11.13s11.13 5.009 11.13 11.13Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
