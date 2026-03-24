import { getBusinessInfo } from "@/lib/content"
import { HeaderClient } from "./header-client"

export async function Header() {
  const biz = await getBusinessInfo()
  return <HeaderClient name={biz.name} slogan={biz.slogan} phone={biz.phone} />
}
