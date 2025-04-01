"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ZoomIn, ZoomOut, RotateCw } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileViewerProps {
  fileUrl: string
  fileType: "pdf" | "image" | "text"
  fileName: string
  className?: string
}

export default function FileViewer({ fileUrl, fileType, fileName, className }: FileViewerProps) {
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 2))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.5))
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360)

  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="flex items-center justify-between p-2 border-b">
        <span className="text-sm font-medium truncate">{fileName}</span>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={handleZoomIn} title="Zoom In">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleZoomOut} title="Zoom Out">
            <ZoomOut className="h-4 w-4" />
          </Button>
          {fileType === "image" && (
            <Button variant="ghost" size="icon" onClick={handleRotate} title="Rotate">
              <RotateCw className="h-4 w-4" />
            </Button>
          )}
          <Button variant="ghost" size="icon" asChild title="Download">
            <a href={fileUrl} download={fileName}>
              <Download className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      <CardContent className="p-0 overflow-auto max-h-[70vh]">
        {fileType === "pdf" && <iframe src={`${fileUrl}#view=FitH`} className="w-full h-[70vh]" title={fileName} />}

        {fileType === "image" && (
          <div className="flex items-center justify-center p-4">
            <img
              src={fileUrl || "/placeholder.svg"}
              alt={fileName}
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
                transition: "transform 0.2s ease-in-out",
                maxWidth: "100%",
                maxHeight: "65vh",
              }}
            />
          </div>
        )}

        {fileType === "text" && (
          <div className="p-4 whitespace-pre-wrap font-mono text-sm">
            <iframe src={fileUrl} className="w-full h-[70vh]" title={fileName} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

