import { cmClient } from '@api/client.ts'
import { HTTPError } from 'ky'
import type { Result } from 'neverthrow'
import { err, ok, ResultAsync } from 'neverthrow'
import { fromZodError } from 'zod-validation-error'

import type { EventResult } from '@modules/auth/auth.model.ts'
import { eventsResultSchema } from '@modules/auth/auth.model.ts'

export function intoError(error: unknown, fallbackMsg: string): Error {
  if (error instanceof HTTPError) {
    return new Error(error.message)
  }

  return new Error(fallbackMsg)
}

export type EventOptions = {
  type?: string | null
  area?: string | null
  startDate?: string | null
  name?: string | null
  page: number
  pageSize: number
}

export async function getEvents(
  options: EventOptions,
): Promise<Result<EventResult, Error>> {
  const searchParams = new URLSearchParams()

  for (const [key, value] of Object.entries(options)) {
    searchParams.set(key, String(value ?? ''))
  }

  const eventResult = await ResultAsync.fromPromise(
    cmClient.get('GetEvents', { searchParams }).json(),
    (error) => intoError(error, 'getEvents ~ Failed to fetch events'),
  )

  if (eventResult.isErr()) {
    return err(eventResult.error)
  }

  const parsed = eventsResultSchema.safeParse(eventResult.value)

  if (!parsed.success) {
    console.log(fromZodError(parsed.error))
    return err(new Error('getAllEventsImpl ~ Invalid response'))
  }

  return ok(parsed.data)
}
