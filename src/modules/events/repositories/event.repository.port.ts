import type { Result } from 'neverthrow'

import type { EventResult } from '@modules/auth/auth.model.ts'
import type { EventOptions } from '@modules/events/repositories/operations/get-events.ts'

export type EventRepository = {
  getEvents: (options: EventOptions) => Promise<Result<EventResult, Error>>
}
