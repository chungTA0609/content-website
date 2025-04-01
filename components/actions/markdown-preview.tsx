"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

interface MarkdownPreviewProps {
    content: string
}

export function MarkdownPreview({ content }: MarkdownPreviewProps) {
    const [html, setHtml] = useState("")

    useEffect(() => {
        // Simple markdown to HTML conversion
        // In a real app, you'd use a proper markdown library
        const formatted = content
            // Headers
            .replace(/^# (.*$)/gm, "<h1>$1</h1>")
            .replace(/^## (.*$)/gm, "<h2>$1</h2>")
            .replace(/^### (.*$)/gm, "<h3>$1</h3>")
            // Bold, italic, underline
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/g, "<em>$1</em>")
            .replace(/__(.*?)__/g, "<u>$1</u>")
            // Lists
            .replace(/^\s*- (.*$)/gm, "<li>$1</li>")
            .replace(/<\/li>\n<li>/g, "</li><li>")
            .replace(/<li>(.+?)(?=<\/li>|$)/g, "<ul><li>$1</li></ul>")
            .replace(/<\/ul>\n<ul>/g, "")
            // Numbered lists
            .replace(/^\s*\d+\. (.*$)/gm, "<li>$1</li>")
            .replace(/<\/li>\n<li>/g, "</li><li>")
            .replace(/<li>(.+?)(?=<\/li>|$)/g, "<ol><li>$1</li></ol>")
            .replace(/<\/ol>\n<ol>/g, "")
            // Blockquotes
            .replace(/^> (.*$)/gm, "<blockquote>$1</blockquote>")
            // Links
            .replace(/\[(.*?)\]$$(.*?)$$/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
            // Paragraphs
            .replace(/^(?!<[a-z])(.*$)/gm, "<p>$1</p>")
            .replace(/<\/p>\n<p>/g, "</p><p>")
            // Clean up empty paragraphs
            .replace(/<p><\/p>/g, "")

        setHtml(formatted)
    }, [content])

    return (
        <Card className="p-4 prose prose-sm max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Card>
    )
}