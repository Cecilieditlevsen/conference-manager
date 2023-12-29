import { generateEventMock } from '@entities/events/helpers/generate-event.ts'
import type { EventRepository } from '@entities/events/repositories/event.repository.port.ts'
import { listOfWithIndex } from '@shared/lib/list-of.ts'
import { ok } from 'neverthrow'


export const getEventsMock: EventRepository['getEvents'] = async () => {
  return ok({
    events: listOfWithIndex(10, (index) =>
      generateEventMock({ eventID: index, eventName: `Event ${index}` }),
    ),
    totalEvents: 10,
  })
}
