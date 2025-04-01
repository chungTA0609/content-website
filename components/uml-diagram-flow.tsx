"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UmlDiagramFlow() {
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
        canvas.height = 400
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Define nodes and connections
    const nodes = [
      { id: "finance", label: "Finance", x: canvas.width * 0.25, y: canvas.height * 0.2, color: "#3b82f6" },
      { id: "commodities", label: "Commodities", x: canvas.width * 0.75, y: canvas.height * 0.2, color: "#10b981" },
      { id: "philosophy", label: "Philosophy", x: canvas.width * 0.25, y: canvas.height * 0.6, color: "#8b5cf6" },
      { id: "buddhism", label: "Buddhism", x: canvas.width * 0.75, y: canvas.height * 0.6, color: "#f59e0b" },
      { id: "markets", label: "Markets", x: canvas.width * 0.5, y: canvas.height * 0.4, color: "#ef4444" },
      { id: "wisdom", label: "Wisdom", x: canvas.width * 0.5, y: canvas.height * 0.8, color: "#6366f1" },
    ]

    const connections = [
      { from: "finance", to: "markets", label: "Influences" },
      { from: "commodities", to: "markets", label: "Affects" },
      { from: "philosophy", to: "wisdom", label: "Provides" },
      { from: "buddhism", to: "wisdom", label: "Teaches" },
      { from: "markets", to: "wisdom", label: "Requires" },
      { from: "finance", to: "commodities", label: "Trades" },
      { from: "philosophy", to: "buddhism", label: "Informs" },
    ]

    // Draw connections
    connections.forEach((conn) => {
      const fromNode = nodes.find((n) => n.id === conn.from)
      const toNode = nodes.find((n) => n.id === conn.to)

      if (fromNode && toNode && ctx) {
        // Calculate control points for curved lines
        const midX = (fromNode.x + toNode.x) / 2
        const midY = (fromNode.y + toNode.y) / 2
        const offset = 30 // Curve offset

        // Draw curved line
        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        ctx.quadraticCurveTo(midX + offset, midY - offset, toNode.x, toNode.y)
        ctx.strokeStyle = "#64748b"
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Draw arrow at the end
        const angle = Math.atan2(toNode.y - midY, toNode.x - midX)
        const arrowSize = 8

        ctx.beginPath()
        ctx.moveTo(toNode.x, toNode.y)
        ctx.lineTo(
          toNode.x - arrowSize * Math.cos(angle - Math.PI / 6),
          toNode.y - arrowSize * Math.sin(angle - Math.PI / 6),
        )
        ctx.lineTo(
          toNode.x - arrowSize * Math.cos(angle + Math.PI / 6),
          toNode.y - arrowSize * Math.sin(angle + Math.PI / 6),
        )
        ctx.closePath()
        ctx.fillStyle = "#64748b"
        ctx.fill()

        // Draw connection label
        ctx.font = "10px Inter, sans-serif"
        ctx.fillStyle = "#64748b"
        ctx.textAlign = "center"
        ctx.fillText(conn.label, midX + offset, midY - offset - 5)
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
      ctx.fillText(node.label, node.x, node.y)
    })

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Knowledge Domain Relationships</CardTitle>
        <CardDescription>How different areas of knowledge interact and influence each other</CardDescription>
      </CardHeader>
      <CardContent>
        <canvas ref={canvasRef} className="w-full" style={{ height: "400px" }} />
      </CardContent>
    </Card>
  )
}

