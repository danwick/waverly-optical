import { reader } from './reader'

export async function getBusinessInfo() {
  const data = await reader.singletons.businessInfo.read()
  if (!data) throw new Error('Business info content not found')
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
  const data = await reader.singletons.hero.read()
  if (!data) throw new Error('Hero content not found')
  return data
}

export async function getAnnouncement() {
  const data = await reader.singletons.announcement.read()
  if (!data) throw new Error('Announcement content not found')
  return data
}

export async function getPricing() {
  const data = await reader.singletons.pricing.read()
  if (!data) throw new Error('Pricing content not found')
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
  const data = await reader.singletons.promotion.read()
  if (!data) throw new Error('Promotion content not found')
  return data
}

export async function getInsurance() {
  const data = await reader.singletons.insurance.read()
  if (!data) throw new Error('Insurance content not found')
  return {
    vision: data.visionProviders.split('\n').filter(Boolean),
    medical: data.medicalProviders.split('\n').filter(Boolean),
    additionalNote: data.additionalNote,
  }
}

export async function getDoctors() {
  const data = await reader.singletons.doctors.read()
  if (!data) throw new Error('Doctors content not found')
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
