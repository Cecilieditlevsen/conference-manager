import React from 'react'
import { createContext } from 'react'

type StrictContextReturn<T> = readonly [
  React.Context<T | undefined>,
  () => T,
  T | undefined,
]
type StrictContextOptions<T> = {
  errorMessage?: string
  name?: string
  defaultValue?: T
  allowMissingProvider?: boolean
  isDevelopment?: boolean
}

export function createStrictContext<T>({
  errorMessage,
  name,
  defaultValue,
  allowMissingProvider = false,
  isDevelopment = false,
}: StrictContextOptions<T> = {}): StrictContextReturn<T> {
  const Context = createContext<T | undefined>(defaultValue)

  if (isDevelopment) {
    Context.displayName = name
  }

  function useContext() {
    const context = React.useContext(Context)

    if (!allowMissingProvider && context === undefined) {
      throw new Error(
        errorMessage ||
          `${
            name
              ? `${name} Context Provider is missing`
              : 'Context Provider is missing'
          }`,
      )
    }
    if (defaultValue && context === defaultValue && isDevelopment) {
      console.warn(
        `Value provided is == defaultValue for the context: ${
          name || 'UnnamedContext'
        }. This may be an error.`,
      )
    }
    return context as T
  }
  return [Context, useContext, defaultValue] as const
}
