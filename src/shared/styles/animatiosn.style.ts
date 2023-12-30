import { animation } from 'twind/css'

export const fadeIn = animation('0.2s ease-in-out', {
  from: {
    opacity: '0',
  },
  to: {
    opacity: '1',
  },
})

