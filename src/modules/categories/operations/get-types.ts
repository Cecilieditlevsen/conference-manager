import { cmClient } from '@api/client.ts'
import type { Result } from 'neverthrow'
import { err, ok, ResultAsync } from 'neverthrow'
import { z } from 'zod'

import { intoError } from '@modules/events/repositories/operations/get-events.ts'

const typeSchema = z.array(z.string()).min(1)

const schema = z.array(
  z.object({
    name: z.string(),
  }),
)

type EventType = z.infer<typeof schema>

export async function getTypes(): Promise<Result<EventType, Error>> {
  const typeResult = await ResultAsync.fromPromise(
    cmClient.get('GetTypes').json(),
    (error) => intoError(error, 'getTypes ~ Failed to fetch types'),
  )

  if (typeResult.isErr()) {
    return err(typeResult.error)
  }

  const parsed = typeSchema.safeParse(typeResult.value)

  if (!parsed.success) {
    console.log(parsed.error)
    return err(new Error('getTypes ~ Invalid response'))
  }

  const mappedResult = parsed.data.map((type) => {
    return {
      name: type,
    }
  })

  return ok(mappedResult)
}
