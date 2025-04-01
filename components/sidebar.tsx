"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useSidebar } from "./sidebar-provider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TREE_DATA } from "@/lib/constants"

type TreeNode = {
  id: string
  name: string
  href?: string
  icon?: React.ElementType
  children?: TreeNode[]
}

function TreeNode({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isActive = pathname === node.href
  const hasChildren = node.children && node.children.length > 0
  const Icon = node.icon

  return (
    <div>
      <div
        className={cn(
          "flex items-center py-2 px-3 rounded-md text-sm",
          isActive ? "bg-accent text-accent-foreground font-medium" : "hover:bg-accent/50",
          level > 0 && "ml-4",
        )}
      >
        {hasChildren ? (
          <Button variant="ghost" size="icon" className="h-5 w-5 p-0 mr-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        ) : (
          <div className="w-5 mr-1"></div>
        )}

        {Icon && <Icon className="mr-2 h-4 w-4" />}

        {node.href ? (
          <Link href={node.href} className="flex-1">
            {node.name}
          </Link>
        ) : (
          <span className="flex-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {node.name}
          </span>
        )}
      </div>

      {hasChildren && isOpen && (
        <div className="mt-1">
          {node.children?.map((child) => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Sidebar() {
  const { isOpen, toggle } = useSidebar()

  return (
    <>
      <div className={cn("fixed top-0 z-40 lg:hidden h-16 w-full bg-background border-b flex items-center px-4")}>
        <Button variant="outline" size="icon" onClick={toggle} aria-label="Toggle Menu">
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="ml-4 text-lg font-semibold">Insights Platform</h1>
      </div>

      <div
        className={cn(
          "fixed inset-y-0 z-50 flex-col bg-background border-r shadow-sm",
          "transition-all duration-300 ease-in-out",
          isOpen ? "w-64" : "w-0 lg:w-16",
          "lg:flex hidden",
        )}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <h1 className={cn("font-semibold transition-opacity", isOpen ? "opacity-100" : "opacity-0 lg:hidden")}>
            Insights Platform
          </h1>
          <Button variant="outline" size="icon" onClick={toggle} aria-label="Toggle Menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 py-2">
          <div
            className={cn(
              "transition-all duration-300 ease-in-out",
              isOpen ? "opacity-100 w-full" : "opacity-0 w-0 lg:w-0 overflow-hidden",
            )}
          >
            {TREE_DATA.map((node) => (
              <TreeNode key={node.id} node={node} />
            ))}
          </div>

          {!isOpen && (
            <div className="lg:flex flex-col items-center py-2 hidden">
              {TREE_DATA.map((node) => {
                const Icon = node.icon
                return Icon ? (
                  <Link
                    key={node.id}
                    href={node.href || (node.children && node.children.length > 0 ? "#" : "#")}
                    className="p-2 rounded-md hover:bg-accent my-1"
                    title={node.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ) : null
              })}
            </div>
          )}
        </ScrollArea>
      </div>

      {/* Mobile sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100",
          isOpen ? "lg:hidden" : "hidden",
        )}
        onClick={toggle}
      />

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-background border-r shadow-lg transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:hidden pt-16",
        )}
      >
        <ScrollArea className="h-full py-2">
          {TREE_DATA.map((node) => (
            <TreeNode key={node.id} node={node} />
          ))}
        </ScrollArea>
      </div>
    </>
  )
}

