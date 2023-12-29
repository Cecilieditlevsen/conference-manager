import type { Result } from 'neverthrow'

export function createQueryFn<T, E extends Error, A extends unknown[]>(
  asyncFn: (...args: A) => Promise<Result<T, E>>,
) {
  return async function executeQuery(...args: A) {
    const result = await asyncFn(...args)

    if (result.isErr()) {
      throw result.error
    }

    return result.value
  }
}
