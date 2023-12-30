import React from 'react'
import type { ListBoxProps } from 'react-aria-components'
import { ListBox as RAListBox } from 'react-aria-components'
import { tw } from 'twind'

export function ListBox<T extends object>(props: ListBoxProps<T>) {
  return (
    <RAListBox className={tw`list-none space-y-[12px]`} {...props}>
      {props.children}
    </RAListBox>
  )
}
