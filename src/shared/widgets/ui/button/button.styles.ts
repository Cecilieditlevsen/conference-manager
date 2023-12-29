import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'


export const buttonVariantsStyles = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'text-white bg-primary-600 hover:bg-primary-700 focus-visible:ring-primary-500',
        secondary:
          'text-white bg-secondary-600 hover:bg-secondary-700 focus-visible:ring-secondary-500',
      },
      size: {
        default: 'h-10 px-4 py-2',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export type ButtonProps = VariantProps<typeof buttonVariantsStyles>



