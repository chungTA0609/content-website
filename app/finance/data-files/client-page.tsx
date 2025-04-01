"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import FileUpload from "@/components/file-upload"
import { toast } from "@/components/ui/use-toast"
import { DATA_FILES, ACCEPTED_FILE_TYPES, MAX_FILE_SIZE_MB, FILE_FILTER_OPTIONS, type FileItem } from "@/lib/constants"
import { FileCard } from "@/components/file-card"

export default function DataFilesClientPage() {
    const [files, setFiles] = useState<FileItem[]>(DATA_FILES)
    const [searchTerm, setSearchTerm] = useState("")
    const [activeFilter, setActiveFilter] = useState(FILE_FILTER_OPTIONS[0])

    const handleFileUploadSuccess = (fileInfo: { name: string; size: number; type: string }) => {
        // Create a new file entry
        const newFile: FileItem = {
            id: `${files.length + 1}`,
            name: fileInfo.name,
            description: `Uploaded file: ${fileInfo.name}`,
            type: fileInfo.name.split(".").pop() || "",
            size: `${(fileInfo.size / (1024 * 1024)).toFixed(2)} MB`,
            date: new Date().toISOString().split("T")[0],
            url: "#",
        }

        // Add the new file to the list
        setFiles([newFile, ...files])

        // Show success toast
        toast({
            title: "File uploaded successfully",
            description: `${fileInfo.name} has been uploaded.`,
        })
    }

    // Filter files based on search term and active filter
    const filteredFiles = files.filter((file) => {
        const matchesSearch =
            file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            file.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesFilter = activeFilter === FILE_FILTER_OPTIONS[0] || file.type.toUpperCase() === activeFilter
        return matchesSearch && matchesFilter
    })

    return (
        <div className="container max-w-6xl py-6 lg:py-10 space-y-8 pt-16 lg:pt-6">
            <div className="flex flex-col items-start space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Financial Data Files</h1>
                <p className="text-muted-foreground max-w-[700px]">
                    Access and download financial datasets, reports, and analysis files.
                </p>
            </div>

            <Tabs defaultValue="browse">
                <TabsList>
                    <TabsTrigger value="browse">Browse Files</TabsTrigger>
                    <TabsTrigger value="upload">Upload File</TabsTrigger>
                </TabsList>
                <TabsContent value="browse" className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <div className="relative w-full max-w-md">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search files..."
                                className="w-full pl-8"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2">
                            {FILE_FILTER_OPTIONS.map((filter) => (
                                <Button
                                    key={filter}
                                    variant={activeFilter === filter ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {filteredFiles.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-muted-foreground">No files found matching your criteria.</p>
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredFiles.map((file) => (
                                <FileCard key={file.id} file={file} />
                            ))}
                        </div>
                    )}
                </TabsContent>
                <TabsContent value="upload">
                    <FileUpload
                        acceptedFileTypes={ACCEPTED_FILE_TYPES}
                        maxSizeMB={MAX_FILE_SIZE_MB}
                        onSuccess={handleFileUploadSuccess}
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}