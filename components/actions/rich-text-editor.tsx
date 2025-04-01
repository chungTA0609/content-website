"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Bold, Italic, Underline, List, ListOrdered, Heading1, Heading2, Quote, LinkIcon } from "lucide-react"

interface RichTextEditorProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    minHeight?: string
}

export function RichTextEditor({
    value,
    onChange,
    placeholder = "Write your content here...",
    minHeight = "300px",
}: RichTextEditorProps) {
    const [text, setText] = useState(value)

    useEffect(() => {
        setText(value)
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value
        setText(newValue)
        onChange(newValue)
    }

    const insertMarkdown = (markdownBefore: string, markdownAfter = "") => {
        const textarea = document.getElementById("editor") as HTMLTextAreaElement
        if (!textarea) return

        const start = textarea.selectionStart
        const end = textarea.selectionEnd
        const selectedText = text.substring(start, end)

        const newText = text.substring(0, start) + markdownBefore + selectedText + markdownAfter + text.substring(end)

        setText(newText)
        onChange(newText)

        // Set cursor position after update
        setTimeout(() => {
            textarea.focus()
            textarea.setSelectionRange(start + markdownBefore.length, end + markdownBefore.length)
        }, 0)
    }

    return (
        <div className="border rounded-md">
            <div className="flex flex-wrap gap-1 p-2 border-b bg-muted/30">
                <Button type="button" variant="ghost" size="sm" onClick={() => insertMarkdown("**", "**")} title="Bold">
                    <Bold className="h-4 w-4" />
                </Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => insertMarkdown("*", "*")} title="Italic">
                    <Italic className="h-4 w-4" />
                </Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => insertMarkdown("__", "__")} title="Underline">
                    <Underline className="h-4 w-4" />
                </Button>
                <div className="w-px h-6 bg-border mx-1" />
                <Button type="button" variant="ghost" size="sm" onClick={() => insertMarkdown("# ")} title="Heading 1">
                    <Heading1 className="h-4 w-4" />
                </Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => insertMarkdown("## ")} title="Heading 2">
                    <Heading2 className="h-4 w-4" />
                </Button>
                <div className="w-px h-6 bg-border mx-1" />
                <Button type="button" variant="ghost" size="sm" onClick={() => insertMarkdown("- ")} title="Bullet List">
                    <List className="h-4 w-4" />
                </Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => insertMarkdown("1. ")} title="Numbered List">
                    <ListOrdered className="h-4 w-4" />
                </Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => insertMarkdown("> ")} title="Quote">
                    <Quote className="h-4 w-4" />
                </Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => insertMarkdown("[", "](https://)")} title="Link">
                    <LinkIcon className="h-4 w-4" />
                </Button>
            </div>
            <Textarea
                id="editor"
                value={text}
                onChange={handleChange}
                placeholder={placeholder}
                className="border-0 rounded-none rounded-b-md resize-y"
                style={{ minHeight }}
            />
        </div>
    )
}

