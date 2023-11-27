import { z } from 'zod'

const metaDataSchema = z.object({
  title: z.string().nullish(),
  description: z.string().nullish(),
  image: z.string().nullish(),
})

const eventLocationSchema = z.object({
  name: z.string().nullish(),
  address: z.string().nullish(),
  zip: z.string().nullish(),
  city: z.string().nullish(),
  country: z.string().nullish(),
  phone: z.string().nullish(),
  website: z.string().nullish(),
  industry: z.string().nullish(),
  ean: z.string().nullish(),
})

const eventOrganizerSchema = z.object({
  name: z.string(),
  address: z.string(),
  zip: z.string(),
  city: z.string(),
  country: z.string(),
  phone: z.string(),
  website: z.string().nullish(),
  email: z.string(),
  cvr: z.string(),
})

export const companyCustomFieldsSchema = z.object({
  type: z
    .object({
      type: z.string(),
      value: z.string().nullish(),
    })
    .nullish(),
  area: z
    .object({
      type: z.string(),
      value: z.string().nullish(),
    })
    .nullish(),
})

export const subjectAreaSchema = z.enum([
  'Administration og digitalisering',
  'Arbejdsgiver',
  'Beskæftigelse',
  'Børn og Unge',
  'Center for Forebyggelse i praksis',
  'Center for Velfærdsteknologi',
  'Dagtilbud',
  'Erhvervsudvikling',
  'EU',
  'Folkeskolen',
  'Forvaltning og ledelse',
  'Integration',
  'Kommunaljura',
  'Kommunikation',
  'Kultur og fritid',
  'Økonomi og styring',
  'Personalejura',
  'Politik',
  'Social',
  'Sundhed',
  'Teknik og miljø',
])

export const eventTypeSchema = z.enum([
  'Konferencer og messer',
  'Kurser',
  'Møder og netværk',
  'Temadage',
])

export const eventSchema = z.object({
  eventID: z.number(),
  eventName: z.string(),
  publicKey: z.string(),
  companyID: z.number().int(),
  companyCustomFields: companyCustomFieldsSchema,
  eventWebsiteURL: z.string(),
  eventContactEmail: z.string(),
  showlink: z.boolean().nullish(),
  eventCreatedTS: z.string().datetime(),
  eventUpdatedTS: z.string().datetime(),
  eventStartTS: z.string().datetime(),
  eventEndTS: z.string().datetime(),
  capacityTotal: z.number().int(),
  capacityUsed: z.number().int(),
  signupQueue: z.boolean(),
  registrationDeadlineTS: z.string().datetime(),
  archivedTS: z.string().datetime().nullish(),
  usingPayment: z.boolean(),
  usingCMInvoicing: z.boolean(),
  websiteMetadata: metaDataSchema,
  language: z.string(),
  eventLocation: eventLocationSchema,
  eventOrganizer: eventOrganizerSchema,
  invoicePrefix: z.string().nullish(),
})

export type EventModel = z.infer<typeof eventSchema>
