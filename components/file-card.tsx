import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, FileSpreadsheet, FileIcon as FilePdf, Download, Eye } from "lucide-react"
import Link from "next/link"
import type { FileItem } from "@/lib/constants"

interface FileCardProps {
    file: FileItem
}

// Function to get icon based on file type
function getFileIcon(type: string) {
    switch (type) {
        case "csv":
            return <FileSpreadsheet className="h-10 w-10 text-green-500" />
        case "xlsx":
            return <FileSpreadsheet className="h-10 w-10 text-blue-500" />
        case "pdf":
            return <FilePdf className="h-10 w-10 text-red-500" />
        default:
            return <FileText className="h-10 w-10 text-gray-500" />
    }
}

export function FileCard({ file }: FileCardProps) {
    return (
        <Card>
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    {getFileIcon(file.type)}
                    <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href={file.url} title="View file">
                                <Eye className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href={file.url} download title="Download file">
                                <Download className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <CardTitle className="text-lg">{file.name}</CardTitle>
                <CardDescription>{file.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                    <div>Type: {file.type.toUpperCase()}</div>
                    <div>Size: {file.size}</div>
                    <div>Date: {file.date}</div>
                </div>
            </CardContent>
        </Card>
    )
}