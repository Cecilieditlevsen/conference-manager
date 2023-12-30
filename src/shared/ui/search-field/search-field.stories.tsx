import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { SearchField } from './search-field.tsx'

const meta = {
  title: 'SearchField',
  component: SearchField,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'The label of the field.',
    },
    placeholder: {
      description: 'The placeholder of the field.',
    },
    isDisabled: {
      description: 'If true, the field will be disabled.',
      control: { type: 'boolean' },
    },
    isInvalid: {
      description: 'If true, the field will be styled as invalid.',
      control: {
        type: 'boolean',
      },
    },
    description: {
      description: 'The description of the field.',
      control: {
        type: 'text',
      },
    },
    errorMessage: {
      description: 'The error message of the field.',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    placeholder: 'Søg',
  },
  render: (args) => <SearchField {...args} />,
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

export const Default = {
  args: {},
} satisfies Story

export const WithHelpText = {
  args: {
    description: 'Please enter a search term',
    errorMessage: 'The input cannot be empty',
  },
} satisfies Story

export const WithErrorMessage = {
  args: {
    errorMessage: 'The input cannot be empty',
    isInvalid: true,
  },
} satisfies Story

export const Controlled = {
  render: (args) => {
    const [value, setValue] = React.useState('0')
    const isInvalid = React.useMemo(() => !/^\d$/.test(value), [value])

    return (
      <SearchField
        {...args}
        isInvalid={isInvalid}
        value={value}
        onChange={setValue}
        maxLength={1}
        description={'Please enter a single digit number.'}
        errorMessage={
          value === ''
            ? 'Empty input not allowed.'
            : 'Single digit numbers are 0-9.'
        }
      />
    )
  },
} satisfies Story
