import { makeRouteHandler } from '@keystatic/next/route-handler'
import keystaticConfig from '../../../../keystatic.config'

let handler: ReturnType<typeof makeRouteHandler>

try {
  handler = makeRouteHandler({ config: keystaticConfig })
} catch {
  // During build or when GitHub credentials are missing, provide a stub
  const stub = () => new Response('Keystatic not configured', { status: 503 })
  handler = { GET: stub, POST: stub }
}

export const POST = handler.POST
export const GET = handler.GET
