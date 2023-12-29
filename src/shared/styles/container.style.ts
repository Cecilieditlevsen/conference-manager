import { apply } from 'twind'
import { animation } from 'twind/css'

export const container = apply`w-full px-[15px] mx-auto xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[var(--container-width)]`

export const fadeIn = animation('0.2s ease-in-out', {
  from: {
    opacity: '0',
  },
  to: {
    opacity: '1',
  },
})
