import { eventRepositoryImpl } from '@modules/events/repositories/event.repository.impl.ts'
import type { EventRepository } from '@modules/events/repositories/event.repository.port.ts'

export const makeEventService = (repository: EventRepository) => {
  const { getEvents } = repository

  return {
    getEvents,
  }
}
export const eventService = makeEventService(eventRepositoryImpl)
