"use client"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

const MyCalendarComponent = ({ className }) => {
  const [showOutsideDays, setShowOutsideDays] = useState(true)

  return (
    <Calendar
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button_previous>svg]:rotate-180`,
        className,
      )}
    />
  )
}

export default MyCalendarComponent
