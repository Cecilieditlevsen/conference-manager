import React from 'react'
import { ThemeContextProvider } from '@app/contexts/theme/theme-context.provider.tsx'
import type { Meta, StoryObj } from '@storybook/react'

import { ListMenu } from './list-menu.tsx'

const options = [
  { id: 1, name: 'Aardvark' },
  { id: 2, name: 'Cat' },
  { id: 3, name: 'Dog' },
  { id: 4, name: 'Kangaroo' },
  { id: 5, name: 'Koala' },
  { id: 6, name: 'Penguin' },
  { id: 7, name: 'Snake' },
  { id: 8, name: 'Turtle' },
  { id: 9, name: 'Wombat' },
]

/**
 * A list box displays a list of options and allows a user to select one or more of them.
 */
const meta = {
  title: 'List Menu',
  component: ListMenu,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  render: (args) => (
    <ThemeContextProvider>
      <ListMenu {...args}>
        <ListMenu.Title>Animals</ListMenu.Title>

        <ListMenu.ListBox
          aria-label={'Choose animal'}
          items={options}
          selectionMode={'single'}
        >
          {(item) => (
            <ListMenu.Item id={item.id} textValue={item.name}>
              {item.name}
            </ListMenu.Item>
          )}
        </ListMenu.ListBox>
      </ListMenu>
    </ThemeContextProvider>
  ),
} satisfies Meta<typeof ListMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default = {
  args: {},
} satisfies Story
