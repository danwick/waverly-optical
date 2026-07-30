import fs from 'fs/promises'
import path from 'path'

async function readContent<T>(name: string): Promise<T> {
  const filePath = path.join(process.cwd(), 'content', `${name}.json`)
  const raw = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(raw)
}

interface BusinessInfoData {
  name: string
  shortName: string
  slogan: string
  phone: string
  phoneDisplay: string
  street: string
  city: string
  state: string
  zip: string
  hours: string
}

export async function getBusinessInfo() {
  const data = await readContent<BusinessInfoData>('business-info')
  return {
    name: data.name,
    shortName: data.shortName,
    slogan: data.slogan,
    phone: data.phone,
    phoneDisplay: data.phoneDisplay,
    address: {
      street: data.street,
      city: data.city,
      state: data.state,
      zip: data.zip,
      full: `${data.street}, ${data.city}, ${data.state} ${data.zip}`,
    },
    hours: data.hours,
  }
}

export async function getHero() {
  return readContent<{ headline: string; subheadline: string; description: string; examPrice: string }>('hero')
}

export async function getInsurance() {
  const data = await readContent<{ visionProviders: string; medicalProviders: string; additionalNote: string }>('insurance')
  return {
    vision: data.visionProviders.split('\n').filter(Boolean),
    medical: data.medicalProviders.split('\n').filter(Boolean),
    additionalNote: data.additionalNote,
  }
}

export async function getDoctors() {
  const data = await readContent<{
    capperName: string
    capperCredentials: string
    capperBio: string
    drMattName: string
    drMattCredentials: string
    drMattBio: string
    drMattDisclaimer: string
    showDrMatt: boolean
  }>('doctors')
  return {
    capper: {
      name: data.capperName,
      credentials: data.capperCredentials,
      bio: data.capperBio,
      image: '/dr-vonda-capper.jpg',
    },
    drMatt: {
      name: data.drMattName,
      credentials: data.drMattCredentials,
      bio: data.drMattBio,
      disclaimer: data.drMattDisclaimer,
      image: '/dr-matt.jpg',
    },
    showDrMatt: data.showDrMatt,
  }
}

export async function getExternalLinks() {
  const biz = await getBusinessInfo()
  return {
    googleMaps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(biz.address.full)}`,
  }
}
