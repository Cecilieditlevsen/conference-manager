import type { EventModel } from '@entities/events/models/event.model.ts'

export const generateEvent = (event: EventModel) => event

export const generateEventMock = (overrides?: Partial<EventModel>) => {
  return generateEvent({
    eventID: 224_084,
    eventName: 'Karens test',
    publicKey: '9684D0F5-0191-494D-8039-17458FB46B26',
    companyCustomFields: {},
    companyID: 864,
    eventWebsiteURL: '',
    eventContactEmail: 'smvs@kl.dk',
    eventCreatedTS: '2023-09-14T09:23:38.280Z',
    eventUpdatedTS: '2023-09-14T09:23:49.852Z',
    eventStartTS: '2023-09-15T09:30:00.000Z',
    eventEndTS: '2023-09-15T16:00:00.000Z',
    capacityTotal: 200,
    capacityUsed: 0,
    signupQueue: false,
    registrationDeadlineTS: '2023-09-14T23:00:00.000Z',
    archivedTS: null,
    usingPayment: false,
    usingCMInvoicing: false,
    websiteMetadata: {
      title: 'Karens test',
      description: null,
      image: null,
    },
    language: 'Danish',
    eventLocation: {
      name: 'Comwell Køge Strand',
      address: 'Strandvejen 111',
      zip: '4600',
      city: 'Køge',
      country: 'DK',
      phone: null,
      website: null,
      industry: null,
      ean: null,
    },
    eventOrganizer: {
      name: 'KL',
      address: 'Weidekampsgade 10',
      zip: '2300',
      city: 'København S',
      country: 'DK',
      phone: '33703370',
      website: 'www.kl.dk',
      email: 'kl@kl.dk',
      cvr: '62547413',
    },
    invoicePrefix: null,
    ...overrides,
  })
}
