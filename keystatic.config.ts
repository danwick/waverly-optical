import { config, fields, singleton } from '@keystatic/core'

const isProd = process.env.KEYSTATIC_GITHUB_CLIENT_ID !== undefined

const jsonFormat = { data: 'json' as const }

export default config({
  storage: isProd
    ? { kind: 'github' as const, repo: 'danwick/waverly-optical' as const }
    : { kind: 'local' as const },
  singletons: {
    businessInfo: singleton({
      label: 'Business Info',
      path: 'content/business-info',
      format: jsonFormat,
      schema: {
        name: fields.text({ label: 'Business Name' }),
        shortName: fields.text({ label: 'Short Name' }),
        slogan: fields.text({ label: 'Slogan' }),
        phone: fields.text({ label: 'Phone Number', description: 'Format: 319-559-2733' }),
        phoneDisplay: fields.text({ label: 'Phone Display', description: 'Format: 319-559-2SEE (2733)' }),
        street: fields.text({ label: 'Street Address' }),
        city: fields.text({ label: 'City' }),
        state: fields.text({ label: 'State' }),
        zip: fields.text({ label: 'ZIP Code' }),
        mondayThursday: fields.text({ label: 'Monday-Thursday Hours' }),
        friday: fields.text({ label: 'Friday Hours' }),
        saturday: fields.text({ label: 'Saturday Hours' }),
        sunday: fields.text({ label: 'Sunday Hours' }),
        storeUrl: fields.text({ label: 'Online Store URL' }),
      },
    }),
    hero: singleton({
      label: 'Homepage Hero',
      path: 'content/hero',
      format: jsonFormat,
      schema: {
        headline: fields.text({ label: 'Headline', multiline: true }),
        subheadline: fields.text({ label: 'Subheadline' }),
        description: fields.text({ label: 'Description', multiline: true }),
        examPrice: fields.text({ label: 'Exam Price (shown on button)', description: 'e.g. $99' }),
      },
    }),
    announcement: singleton({
      label: 'Announcement Bar',
      path: 'content/announcement',
      format: jsonFormat,
      schema: {
        message: fields.text({ label: 'Announcement Message' }),
        enabled: fields.checkbox({ label: 'Show announcement bar', defaultValue: true }),
      },
    }),
    pricing: singleton({
      label: 'Pricing',
      path: 'content/pricing',
      format: jsonFormat,
      schema: {
        eyeExamPrice: fields.integer({ label: 'Eye Exam Price' }),
        eyeExamTitle: fields.text({ label: 'Eye Exam Title' }),
        eyeExamDescription: fields.text({ label: 'Eye Exam Description' }),
        eyeExamFeatures: fields.text({ label: 'Eye Exam Features', description: 'One per line', multiline: true }),
        contactLensPrice: fields.integer({ label: 'Contact Lens Exam Price' }),
        contactLensTitle: fields.text({ label: 'Contact Lens Exam Title' }),
        contactLensDescription: fields.text({ label: 'Contact Lens Exam Description' }),
        contactLensFeatures: fields.text({ label: 'Contact Lens Features', description: 'One per line', multiline: true }),
      },
    }),
    promotion: singleton({
      label: 'Current Promotion',
      path: 'content/promotion',
      format: jsonFormat,
      schema: {
        title: fields.text({ label: 'Promotion Title' }),
        description: fields.text({ label: 'Promotion Description', multiline: true }),
        eligibility: fields.text({ label: 'Eligibility Details', multiline: true }),
        enabled: fields.checkbox({ label: 'Show promotion', defaultValue: true }),
      },
    }),
    insurance: singleton({
      label: 'Insurance Providers',
      path: 'content/insurance',
      format: jsonFormat,
      schema: {
        visionProviders: fields.text({ label: 'Vision Insurance Providers', description: 'One per line', multiline: true }),
        medicalProviders: fields.text({ label: 'Medical Insurance Providers', description: 'One per line', multiline: true }),
        additionalNote: fields.text({ label: 'Additional Note', multiline: true }),
      },
    }),
    doctors: singleton({
      label: 'Doctors',
      path: 'content/doctors',
      format: jsonFormat,
      schema: {
        capperName: fields.text({ label: 'Dr. Capper - Full Name' }),
        capperCredentials: fields.text({ label: 'Dr. Capper - Credentials' }),
        capperBio: fields.text({ label: 'Dr. Capper - Bio', multiline: true }),
        drMattName: fields.text({ label: 'Dr. Matt - Full Name' }),
        drMattCredentials: fields.text({ label: 'Dr. Matt - Credentials' }),
        drMattBio: fields.text({ label: 'Dr. Matt - Bio', multiline: true }),
        showDrMatt: fields.checkbox({ label: 'Show Dr. Matt on site', defaultValue: true }),
      },
    }),
  },
})
