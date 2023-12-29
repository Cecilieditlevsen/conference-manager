import type { EventsResult } from '@entities/events/models/result.model.ts'
import type { Result } from 'neverthrow'

import type { EventOptions } from './operations/get-events.ts'

export type EventRepository = {
  getEvents: (options: EventOptions) => Promise<Result<EventsResult, Error>>
}
