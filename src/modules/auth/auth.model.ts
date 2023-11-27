import { z } from 'zod'

import { eventSchema } from '@modules/events/models/event.model.ts'

export const authResponseSchema = z.object({
  status: z.number(),
  requestTS: z.string().datetime(),
  token: z.string(),
  expireTS: z.string().datetime(),
  responseTime: z.number(),
})

export const eventsResultSchema = z.object({
  events: z.array(eventSchema),
  totalEvents: z.number(),
})

export const eventsResultWithPage = eventsResultSchema.extend({
  nextPage: z.number(),
})

export type EventsResultWithPage = z.infer<typeof eventsResultWithPage>

export type EventResult = z.infer<typeof eventsResultSchema>
