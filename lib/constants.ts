export const BUSINESS_INFO = {
  name: "Dr Matt's Optical Outlet",
  shortName: "DMOO",
  slogan: "Experience Matters. Price Matters.",
  phone: "319-559-2733",
  phoneDisplay: "319-559-2SEE (2733)",
  address: {
    street: "1300 10th Avenue SW, Suite A",
    city: "Waverly",
    state: "IA",
    zip: "50677",
    full: "1300 10th Avenue SW, Suite A, Waverly, IA 50677",
  },
  hours: {
    monday: "8:30 AM - 5:00 PM",
    tuesday: "8:30 AM - 5:00 PM",
    wednesday: "8:30 AM - 5:00 PM",
    thursday: "8:30 AM - 5:00 PM",
    friday: "Closed",
    saturday: "Closed",
    sunday: "Closed",
  },
  coordinates: {
    lat: 42.7261,
    lng: -92.4788,
  },
} as const

export const PRICING = {
  eyeExam: {
    price: 99,
    title: "Vision Eye Exam",
    description: "Includes retinal photography and refraction",
  },
  contactLensExam: {
    price: 49,
    title: "Contact Lens Exam",
    description: "Flat rate for any prescription",
  },
} as const

export const INSURANCE_PROVIDERS = {
  vision: ["VSP", "EyeMed", "Avesis", "Spectera"],
  medical: ["Medicare", "Blue Cross Blue Shield"],
} as const

export const DOCTORS = {
  capper: {
    name: "Dr. Vonda Capper",
    credentials: "OD",
    bio: "Dr. Capper brings experience in comprehensive eye care for over 3 decades. She specializes in the diagnosis and management of glaucoma, diabetic eye disease, age-related macular degeneration, and cataracts. Her commitment to patient care and clinical excellence has made her a trusted name in the area.",
    image: "/dr-vonda-capper.jpg",
  },
  drMatt: {
    name: "Dr. Matt",
    credentials: "OD",
    bio: "Dr. Matt is dedicated to providing exceptional eye care with a focus on patient education and personalized treatment plans. With extensive experience in comprehensive optometry, he is committed to helping patients achieve optimal vision and eye health.",
    image: "/dr-matt.jpg",
  },
} as const

export const PROMOTION = {
  title: "Win $500 Toward Eyewear or Contacts",
  description: "Be one of the first 250 patients to schedule an appointment and be automatically entered to win!",
  eligibility: "Be one of the first 250 patients to schedule an appointment at Dr Matt's Optical Outlet",
} as const

export const EXTERNAL_LINKS = {
  store: "https://yourstore.wewillship.com/?account_id=5699A",
  googleMaps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address.full)}`,
} as const
