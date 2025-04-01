"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import Sidebar from "./sidebar"
import { cn } from "@/lib/utils"

type SidebarContextType = {
  isOpen: boolean
  toggle: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      <div className="flex min-h-screen">
        <Sidebar />
        <main
          className={cn(
            "flex-1 transition-all duration-300 ease-in-out",
            isOpen ? "lg:ml-64" : "lg:ml-16",
            "pt-16 lg:pt-0", // Add padding for mobile header
          )}
        >
          {children}
        </main>
      </div>
    </SidebarContext.Provider>
  )
}

