import React from 'react'

import { Item } from './list-menu-item.tsx'
import { ListBox } from './list-menu-list-box.tsx'
import { Title } from './list-menu-title.tsx'

type ListMenuProps = {
  children?: React.ReactNode
}

export function ListMenu(props: ListMenuProps) {
  return <div data-testid={'list-menu'}>{props.children}</div>
}

ListMenu.Title = Title
ListMenu.Item = Item
ListMenu.ListBox = ListBox
