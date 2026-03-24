"use server"

import { getBusinessInfo } from "@/lib/content"

export async function getMapEmbedUrl(): Promise<string> {
  const biz = await getBusinessInfo()
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || ""
  const address = encodeURIComponent(biz.address.full)

  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${address}`
}
