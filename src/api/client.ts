import ky from 'ky'

export const cmClient = ky.create({
  prefixUrl: 'https://kl-conferencemanager.kommuneplatformen.dk/Conference/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
