"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home, LineChart, Package, Search, Settings, Sigma } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

type NavItem = {
  title: string
  href: string
  icon?: React.ElementType
  submenu?: NavItem[]
  badge?: string
}

const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/",
    icon: Home,
  },
  {
    title: "Finance",
    href: "#",
    icon: LineChart,
    submenu: [
      {
        title: "Data Files",
        href: "/finance/data",
      },
      {
        title: "Price Charts",
        href: "/finance/charts",
      },
      {
        title: "Analytical Articles",
        href: "/finance/articles",
      },
    ],
  },
  {
    title: "Commodities",
    href: "#",
    icon: Package,
    submenu: [
      {
        title: "Data Files",
        href: "/commodities/data",
      },
      {
        title: "Charts",
        href: "/commodities/charts",
      },
      {
        title: "Analytical Articles",
        href: "/commodities/articles",
      },
    ],
  },
  {
    title: "Philosophy & Buddhism",
    href: "#",
    icon: Sigma,
    submenu: [
      {
        title: "Philosophy",
        href: "/philosophy/philosophy",
      },
      {
        title: "Buddhism",
        href: "/philosophy/buddhism",
      },
    ],
  },
]

export function MainSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex h-14 items-center px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <LineChart className="h-4 w-4" />
            </div>
            <span>FinanceInsight</span>
          </Link>
        </div>
        <div className="px-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <SidebarInput placeholder="Search..." className="pl-8" />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navItems.map((item) => {
              const isActive = item.href === pathname || pathname.startsWith(item.href + "/")

              if (item.submenu) {
                return (
                  <Collapsible key={item.title} defaultOpen={isActive} className="w-full">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full justify-between">
                          <div className="flex items-center gap-2">
                            {item.icon && <item.icon className="h-4 w-4" />}
                            <span>{item.title}</span>
                          </div>
                          <ChevronRight className="h-4 w-4 transition-transform ui-open:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.submenu.map((subItem) => {
                            const isSubActive = subItem.href === pathname

                            return (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild isActive={isSubActive}>
                                  <Link href={subItem.href}>
                                    {subItem.title}
                                    {subItem.badge && (
                                      <span className="ml-auto rounded-sm bg-primary px-1 py-0.5 text-[10px] font-medium text-primary-foreground">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            )
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                )
              }

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link href={item.href}>
                      {item.icon && <item.icon className="h-4 w-4" />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

