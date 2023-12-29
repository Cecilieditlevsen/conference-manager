import { z } from 'zod'

import { eventSchema } from './event.model.ts'


export const eventsResultSchema = z.object({
  events: z.array(eventSchema),
  totalEvents: z.number(),
})



export type EventsResult = z.infer<typeof eventsResultSchema>
