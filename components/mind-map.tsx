"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export default function MindMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = 500
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Define nodes
    const nodes = [
      { id: "main", label: "Knowledge Domains", x: canvas.width / 2, y: canvas.height / 2, color: "#3b82f6" },
      { id: "finance", label: "Finance", x: canvas.width / 4, y: canvas.height / 3, color: "#10b981" },
      { id: "commodities", label: "Commodities", x: (canvas.width * 3) / 4, y: canvas.height / 3, color: "#f59e0b" },
      {
        id: "philosophy",
        label: "Philosophy & Buddhism",
        x: canvas.width / 2,
        y: (canvas.height * 4) / 5,
        color: "#8b5cf6",
      },

      // Finance children
      { id: "finance-data", label: "Data Files", x: canvas.width / 8, y: canvas.height / 5, color: "#10b981" },
      { id: "finance-charts", label: "Price Charts", x: canvas.width / 4, y: canvas.height / 8, color: "#10b981" },
      { id: "finance-articles", label: "Articles", x: (canvas.width * 3) / 8, y: canvas.height / 5, color: "#10b981" },

      // Commodities children
      {
        id: "commodities-data",
        label: "Data Files",
        x: (canvas.width * 5) / 8,
        y: canvas.height / 5,
        color: "#f59e0b",
      },
      { id: "commodities-charts", label: "Charts", x: (canvas.width * 3) / 4, y: canvas.height / 8, color: "#f59e0b" },
      {
        id: "commodities-articles",
        label: "Articles",
        x: (canvas.width * 7) / 8,
        y: canvas.height / 5,
        color: "#f59e0b",
      },

      // Philosophy children
      {
        id: "philosophy-branch",
        label: "Philosophy",
        x: canvas.width / 3,
        y: (canvas.height * 4) / 5 + 60,
        color: "#8b5cf6",
      },
      {
        id: "buddhism-branch",
        label: "Buddhism",
        x: (canvas.width * 2) / 3,
        y: (canvas.height * 4) / 5 + 60,
        color: "#8b5cf6",
      },
    ]

    // Define connections
    const connections = [
      { from: "main", to: "finance" },
      { from: "main", to: "commodities" },
      { from: "main", to: "philosophy" },

      { from: "finance", to: "finance-data" },
      { from: "finance", to: "finance-charts" },
      { from: "finance", to: "finance-articles" },

      { from: "commodities", to: "commodities-data" },
      { from: "commodities", to: "commodities-charts" },
      { from: "commodities", to: "commodities-articles" },

      { from: "philosophy", to: "philosophy-branch" },
      { from: "philosophy", to: "buddhism-branch" },
    ]

    // Draw connections
    connections.forEach((conn) => {
      const fromNode = nodes.find((n) => n.id === conn.from)
      const toNode = nodes.find((n) => n.id === conn.to)

      if (fromNode && toNode && ctx) {
        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        ctx.lineTo(toNode.x, toNode.y)
        ctx.strokeStyle = "#64748b"
        ctx.lineWidth = 1.5
        ctx.stroke()
      }
    })

    // Draw nodes
    nodes.forEach((node) => {
      if (!ctx) return

      // Draw circle
      ctx.beginPath()
      ctx.arc(node.x, node.y, 30, 0, Math.PI * 2)
      ctx.fillStyle = node.color
      ctx.fill()

      // Draw label
      ctx.font = "12px Inter, sans-serif"
      ctx.fillStyle = "#ffffff"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Handle multi-line labels
      const words = node.label.split(" ")
      let line = ""
      const lineHeight = 15
      let y = node.y - ((words.length - 1) * lineHeight) / 2

      words.forEach((word) => {
        const testLine = line + word + " "
        const metrics = ctx.measureText(testLine)
        const testWidth = metrics.width

        if (testWidth > 50 && line !== "") {
          ctx.fillText(line, node.x, y)
          line = word + " "
          y += lineHeight
        } else {
          line = testLine
        }
      })

      ctx.fillText(line, node.x, y)
    })

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <Card className="w-full overflow-hidden p-1 bg-background/50">
      <canvas ref={canvasRef} className="w-full" style={{ height: "500px" }} />
    </Card>
  )
}

