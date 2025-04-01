"use client"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, User } from "lucide-react"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"

export function SiteHeader() {
  const pathname = usePathname()
  const { isMobile } = useSidebar()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        {isMobile && <SidebarTrigger className="mr-4" />}

        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-[200px] pl-8" />
            </div>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <User className="mr-2 h-4 w-4" />
            Sign In
          </Button>
          <Button size="sm">Subscribe</Button>
        </div>
      </div>
    </header>
  )
}

