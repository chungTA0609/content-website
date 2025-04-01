"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Home,
  LineChart,
  Menu,
  Package,
  PanelLeft,
  ScrollText,
  Sigma,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useSidebar } from "./sidebar-provider"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface NavItemProps {
  href: string
  icon: React.ElementType
  label: string
  isActive?: boolean
  children?: React.ReactNode
}

function NavItem({ href, icon: Icon, label, isActive, children }: NavItemProps) {
  const [open, setOpen] = React.useState(false)
  const hasChildren = Boolean(children)

  if (hasChildren) {
    return (
      <Collapsible open={open} onOpenChange={setOpen} className="w-full">
        <div className="flex items-center">
          <CollapsibleTrigger asChild className="flex-1">
            <Button
              variant="ghost"
              className={cn("w-full justify-start gap-2 px-3 py-2 text-left", isActive && "bg-muted")}
            >
              <Icon className="h-4 w-4" />
              <span className="flex-1 truncate">{label}</span>
              {open ? <ChevronDown className="h-4 w-4 shrink-0" /> : <ChevronRight className="h-4 w-4 shrink-0" />}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pl-6 pt-1">{children}</CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Link href={href} passHref>
      <Button variant="ghost" className={cn("w-full justify-start gap-2 px-3 py-2 text-left", isActive && "bg-muted")}>
        <Icon className="h-4 w-4" />
        <span className="flex-1 truncate">{label}</span>
      </Button>
    </Link>
  )
}

export function Sidebar() {
  const { isOpen, toggleSidebar, isMobile } = useSidebar()
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" className="fixed left-4 top-4 z-50 md:hidden" onClick={toggleSidebar}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Sidebar backdrop for mobile */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden" onClick={toggleSidebar} />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-background transition-transform duration-200 ease-in-out md:relative md:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full md:w-16 md:translate-x-0",
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className={cn("flex items-center gap-2", !isOpen && "md:hidden")}>
            <Sigma className="h-6 w-6" />
            <span className="font-semibold">Knowledge Hub</span>
          </Link>
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={toggleSidebar}>
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>

        <div className="space-y-1 px-2 py-2">
          <NavItem href="/" icon={Home} label="Overview" isActive={pathname === "/"} />

          <NavItem href="/finance" icon={LineChart} label="Finance" isActive={pathname.startsWith("/finance")}>
            <NavItem href="/finance/data" icon={FileText} label="Data Files" isActive={pathname === "/finance/data"} />
            <NavItem
              href="/finance/charts"
              icon={LineChart}
              label="Price Charts"
              isActive={pathname === "/finance/charts"}
            />
            <NavItem
              href="/finance/articles"
              icon={ScrollText}
              label="Analytical Articles"
              isActive={pathname === "/finance/articles"}
            />
          </NavItem>

          <NavItem
            href="/commodities"
            icon={Package}
            label="Commodities"
            isActive={pathname.startsWith("/commodities")}
          >
            <NavItem
              href="/commodities/data"
              icon={FileText}
              label="Data Files"
              isActive={pathname === "/commodities/data"}
            />
            <NavItem
              href="/commodities/charts"
              icon={LineChart}
              label="Charts"
              isActive={pathname === "/commodities/charts"}
            />
            <NavItem
              href="/commodities/articles"
              icon={ScrollText}
              label="Analytical Articles"
              isActive={pathname === "/commodities/articles"}
            />
          </NavItem>

          <NavItem
            href="/philosophy"
            icon={Sigma}
            label="Philosophy & Buddhism"
            isActive={pathname.startsWith("/philosophy")}
          >
            <NavItem
              href="/philosophy/philosophy"
              icon={Sigma}
              label="Philosophy"
              isActive={pathname === "/philosophy/philosophy"}
            />
            <NavItem
              href="/philosophy/buddhism"
              icon={Sigma}
              label="Buddhism"
              isActive={pathname === "/philosophy/buddhism"}
            />
          </NavItem>
        </div>
      </div>
    </>
  )
}

