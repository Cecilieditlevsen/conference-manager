import type { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@shared/lib/cn.tsx'
import type { ButtonProps } from '@shared/ui/button/button.styles.ts'
import { buttonVariantsStyles } from '@shared/ui/button/button.styles.ts'

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonProps & {
    asChild?: boolean
  }

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, size, children, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'

    return (
      <Component
        ref={ref}
        className={cn(buttonVariantsStyles({ variant, size }))}
        {...props}
      >
        {children}
      </Component>
    )
  },
)
