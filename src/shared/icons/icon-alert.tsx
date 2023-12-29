import type { ComponentPropsWithoutRef } from 'react'

export const IconAlert = (props: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.1071 2.9208c-4.5211 0-8.1863 3.6652-8.1863 8.1863 0 4.5212 3.6652 8.1864 8.1863 8.1864 4.5212 0 8.1864-3.6652 8.1864-8.1864 0-4.5211-3.6652-8.1863-8.1864-8.1863ZM1 11.1071C1 5.5251 5.5251 1 11.1071 1c5.5821 0 10.1072 4.5251 10.1072 10.1071 0 5.5821-4.5251 10.1072-10.1072 10.1072C5.5251 21.2143 1 16.6892 1 11.1071Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.101 10.1467c.5305 0 .9604.43.9604.9604v3.6587a.9604.9604 0 0 1-.9604.9604.9604.9604 0 0 1-.9604-.9604v-3.6587c0-.5304.43-.9604.9604-.9604Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.0247 7.4484a.9147.9147 0 1 1-1.8295 0 .9147.9147 0 0 1 1.8295 0Z"
      />
    </svg>
  )
}
