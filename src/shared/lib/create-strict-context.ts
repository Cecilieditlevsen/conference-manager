import React from 'react'

/**
 * Options for creating a strict context.
 */
type BaseStrictContextOptions<T> = {
  /**
   * The name of the context. This is used for display purposes only.
   */
  name: string

  /**
   * The default value of the context. This is used when the context is used.
   */
  defaultValue?: T

  /**
   * The error message to display when the context is used without a provider.
   */
  errorMessage?: string

  /**
   * Whether to display warnings when the context value is the same as the default value.
   */
  isDevelopment?: boolean
}

/**
 * Options for creating a strict context that allows missing provider.
 */
type StrictContextOptionsAllowMissing<T> = BaseStrictContextOptions<T> & {
  allowMissingProvider: true
}

/**
 * Options for creating a strict context that disallows missing provider.
 */
type StrictContextOptionsDisallowMissing<T> = BaseStrictContextOptions<T> & {
  allowMissingProvider?: false
}

/**
 * Union type for strict context options.
 */
type StrictContextOptions<T> =
  | StrictContextOptionsAllowMissing<T>
  | StrictContextOptionsDisallowMissing<T>

type StrictContextReturnType<T> = [
  React.Context<T | undefined>,
  () => T,
  T | undefined,
]
type MaybeContextReturnType<T> = [
  React.Context<T | undefined>,
  () => T | undefined,
  T | undefined,
]

export function createStrictContext<T>(
  options: StrictContextOptionsDisallowMissing<T>,
): StrictContextReturnType<T>

export function createStrictContext<T>(
  options: StrictContextOptionsAllowMissing<T>,
): MaybeContextReturnType<T>

/**
 * Creates a mandatory context based on parameters,
 * ensuring that the appropriate type is returned based on allowMissingProvider.
 * When allowMissingProvider is true, the custom useContext hook may return undefined.
 * When allowMissingProvider is false, the custom useContext hook will never return undefined.
 *
 * @param options - An object specifying the context options.
 * @returns A tuple of the form [Context, useContext, defaultValue].
 *          Context is created with React context.
 *          useContext is a custom hook for using the context that can throw errors,
 *          handle allowances for missing providers, and warn in development mode.
 *          defaultValue is the default value of the context as provided in options (can be undefined).
 */
export function createStrictContext<T>({
  errorMessage,
  name,
  defaultValue,
  allowMissingProvider,
  isDevelopment = false,
}: StrictContextOptions<T>) {
  const Context = React.createContext<T | undefined>(defaultValue)

  if (isDevelopment) {
    Context.displayName = name
  }

  function useContext(): T | undefined {
    const context = React.useContext(Context)

    if (!allowMissingProvider && context === undefined) {
      throw new Error(errorMessage || `${name} Context Provider is missing`)
    }

    if (defaultValue && context === defaultValue && isDevelopment) {
      console.warn(
        `Value provided is == defaultValue for the context: ${
          name || 'UnnamedContext'
        }. This may be an error.`,
      )
    }

    return context
  }

  return allowMissingProvider
    ? ([Context, useContext, defaultValue] as const)
    : ([Context, useContext, defaultValue] as const)
}
