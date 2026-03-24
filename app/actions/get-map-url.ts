"use server"

import { BUSINESS_INFO } from "@/lib/constants"

export async function getMapEmbedUrl(): Promise<string> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || ""
  const address = encodeURIComponent(BUSINESS_INFO.address.full)

  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${address}`
}
