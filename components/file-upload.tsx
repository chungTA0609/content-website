"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, File, X, Check } from "lucide-react"
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE_MB } from "@/lib/constants"

interface FileUploadProps {
  acceptedFileTypes?: string
  maxSizeMB?: number
  onSuccess?: (fileInfo: { name: string; size: number; type: string }) => void
}

export default function FileUpload({
  acceptedFileTypes = ACCEPTED_FILE_TYPES,
  maxSizeMB = MAX_FILE_SIZE_MB,
  onSuccess,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const validateFile = (file: File): boolean => {
    // Check file type
    const fileType = file.type
    const fileExtension = `.${file.name.split(".").pop()?.toLowerCase()}`
    const validTypes = acceptedFileTypes.split(",")

    const isValidType = validTypes.some((type) => {
      if (type.startsWith(".")) {
        return fileExtension === type.toLowerCase()
      }
      return fileType.includes(type)
    })

    if (!isValidType) {
      setError(`Invalid file type. Accepted types: ${acceptedFileTypes}`)
      return false
    }

    // Check file size
    const maxSizeBytes = maxSizeMB * 1024 * 1024
    if (file.size > maxSizeBytes) {
      setError(`File size exceeds the maximum limit of ${maxSizeMB}MB`)
      return false
    }

    return true
  }

  const handleFileUpload = async (file: File) => {
    // In a real application, you would upload the file to your server or cloud storage
    // For this example, we'll just simulate a successful upload

    // Simulate API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // If onSuccess callback is provided, call it with file info
    if (onSuccess) {
      onSuccess({
        name: file.name,
        size: file.size,
        type: file.type,
      })
    }

    setSuccess(true)
    return true
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    setError(null)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (validateFile(file)) {
        setSelectedFile(file)
        await handleFileUpload(file)
      }
    }
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setError(null)

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (validateFile(file)) {
        setSelectedFile(file)
        await handleFileUpload(file)
      }
    }
  }

  const handleButtonClick = () => {
    inputRef.current?.click()
  }

  const removeFile = () => {
    setSelectedFile(null)
    setSuccess(false)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload File</CardTitle>
        <CardDescription>Upload a file to view or analyze. Accepted formats: {acceptedFileTypes}</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`relative border-2 border-dashed rounded-lg p-6 ${dragActive ? "border-primary bg-primary/10" : "border-muted-foreground/25"
            } ${error ? "border-destructive bg-destructive/10" : ""} ${success ? "border-green-500 bg-green-500/10" : ""
            }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input ref={inputRef} type="file" className="hidden" accept={acceptedFileTypes} onChange={handleChange} />

          {!selectedFile ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="rounded-full bg-muted p-3">
                <Upload className="h-6 w-6" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">Drag and drop your file here or click to browse</p>
                <p className="text-xs text-muted-foreground mt-1">Maximum file size: {maxSizeMB}MB</p>
              </div>
              <Button type="button" variant="outline" onClick={handleButtonClick}>
                Select File
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <File className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm font-medium">{selectedFile.name}</p>
                  <p className="text-xs text-muted-foreground">{(selectedFile.size / (1024 * 1024)).toFixed(2)}MB</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {success && <Check className="h-5 w-5 text-green-500" />}
                <Button type="button" variant="ghost" size="icon" onClick={removeFile}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {error && <div className="mt-2 text-sm text-destructive">{error}</div>}
        </div>
      </CardContent>
    </Card>
  )
}

