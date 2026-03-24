/**
 * Date gate utility for content reveal after Dec 15, 2025
 */

export function isPostLaunchDate(): boolean {
  // Check for override flag first
  if (process.env.NEXT_PUBLIC_FORCE_POST_DEC15 === "true") {
    return true
  }

  const launchDate = new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE || "2025-12-15")
  const now = new Date()

  return now >= launchDate
}

export function shouldShowDrMattContent(): boolean {
  return isPostLaunchDate()
}
