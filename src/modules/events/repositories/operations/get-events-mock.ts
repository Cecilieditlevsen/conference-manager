import { ok } from 'neverthrow'

import { generateEventMock } from '@modules/events/helpers/generate-event.ts'
import type { EventRepository } from '@modules/events/repositories/event.repository.port.ts'

import { listOfWithIndex } from '../../../../utils/list-of.ts'

export const getEventsMock: EventRepository['getEvents'] = async () => {
  return ok({
    events: listOfWithIndex(10, (index) =>
      generateEventMock({ eventID: index, eventName: `Event ${index}` }),
    ),
    totalEvents: 10,
  })
}
