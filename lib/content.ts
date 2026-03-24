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
  mondayThursday: string
  friday: string
  saturday: string
  sunday: string
  storeUrl: string
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
    hours: {
      monday: data.mondayThursday,
      tuesday: data.mondayThursday,
      wednesday: data.mondayThursday,
      thursday: data.mondayThursday,
      friday: data.friday,
      saturday: data.saturday,
      sunday: data.sunday,
    },
    storeUrl: data.storeUrl,
  }
}

export async function getHero() {
  return readContent<{ headline: string; subheadline: string; description: string; examPrice: string }>('hero')
}

export async function getAnnouncement() {
  return readContent<{ message: string; enabled: boolean }>('announcement')
}

export async function getPricing() {
  const data = await readContent<{
    eyeExamPrice: number
    eyeExamTitle: string
    eyeExamDescription: string
    eyeExamFeatures: string
    contactLensPrice: number
    contactLensTitle: string
    contactLensDescription: string
    contactLensFeatures: string
  }>('pricing')
  return {
    eyeExam: {
      price: data.eyeExamPrice,
      title: data.eyeExamTitle,
      description: data.eyeExamDescription,
      features: data.eyeExamFeatures.split('\n').filter(Boolean),
    },
    contactLensExam: {
      price: data.contactLensPrice,
      title: data.contactLensTitle,
      description: data.contactLensDescription,
      features: data.contactLensFeatures.split('\n').filter(Boolean),
    },
  }
}

export async function getPromotion() {
  return readContent<{ title: string; description: string; eligibility: string; enabled: boolean }>('promotion')
}

export async function getInsurance() {
  const data = await readContent<{ visionProviders: string; medicalProviders: string; additionalNote: string }>('insurance')
  return {
    vision: data.visionProviders.split('\n').filter(Boolean),
    medical: data.medicalProviders.split('\n').filter(Boolean),
    additionalNote: data.additionalNote,
  }
}

export async function getPromoAd() {
  return readContent<{ image: string; altText: string }>('promo-ad')
}

export async function getDoctors() {
  const data = await readContent<{
    capperName: string
    capperCredentials: string
    capperBio: string
    drMattName: string
    drMattCredentials: string
    drMattBio: string
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
      image: '/dr-matt.jpg',
    },
    showDrMatt: data.showDrMatt,
  }
}

export async function getExternalLinks() {
  const biz = await getBusinessInfo()
  return {
    store: biz.storeUrl,
    googleMaps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(biz.address.full)}`,
  }
}
