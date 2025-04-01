"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { RichTextEditor } from "@/components/actions/rich-text-editor"
import { MarkdownPreview } from "@/components/actions/markdown-preview"
import { createBlogPost } from "../actions"
import { toast } from "@/components/ui/use-toast"

export default function CreatePostPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        excerpt: "",
        content: "",
        category: "",
        author: "",
        tags: "",
        featured: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSwitchChange = (name: string, checked: boolean) => {
        setFormData((prev) => ({ ...prev, [name]: checked }))
    }

    const handleContentChange = (value: string) => {
        setFormData((prev) => ({ ...prev, content: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const formDataObj = new FormData()
            Object.entries(formData).forEach(([key, value]) => {
                if (typeof value === "boolean") {
                    formDataObj.append(key, value ? "on" : "off")
                } else {
                    formDataObj.append(key, value)
                }
            })

            const result = await createBlogPost(formDataObj)

            if (result.success) {
                toast({
                    title: "Post created successfully!",
                    description: "Your article has been published.",
                })
                router.push(`/finance/articles/${result.slug}`)
            } else {
                toast({
                    title: "Error creating post",
                    description: result.message,
                    variant: "destructive",
                })
                setIsSubmitting(false)
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            toast({
                title: "Error creating post",
                description: "An unexpected error occurred. Please try again.",
                variant: "destructive",
            })
            setIsSubmitting(false)
        }
    }

    return (
        <div className="container max-w-5xl py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Create New Article</h1>
                <p className="text-muted-foreground">Write and publish a new article to the Finance section</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            placeholder="Enter article title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea
                            id="excerpt"
                            name="excerpt"
                            placeholder="Brief summary of the article"
                            value={formData.excerpt}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="content">Content</Label>
                        <Tabs defaultValue="write">
                            <TabsList className="mb-2">
                                <TabsTrigger value="write">Write</TabsTrigger>
                                <TabsTrigger value="preview">Preview</TabsTrigger>
                            </TabsList>
                            <TabsContent value="write">
                                <RichTextEditor value={formData.content} onChange={handleContentChange} minHeight="400px" />
                            </TabsContent>
                            <TabsContent value="preview">
                                <MarkdownPreview content={formData.content} />
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="grid gap-3">
                            <Label htmlFor="category">Category</Label>
                            <Select onValueChange={(value) => handleSelectChange("category", value)} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Cryptocurrency">Cryptocurrency</SelectItem>
                                    <SelectItem value="Investing">Investing</SelectItem>
                                    <SelectItem value="Market Analysis">Market Analysis</SelectItem>
                                    <SelectItem value="Retirement">Retirement</SelectItem>
                                    <SelectItem value="Real Estate">Real Estate</SelectItem>
                                    <SelectItem value="Tax Planning">Tax Planning</SelectItem>
                                    <SelectItem value="Fintech">Fintech</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="author">Author</Label>
                            <Input
                                id="author"
                                name="author"
                                placeholder="Your name"
                                value={formData.author}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="tags">Tags</Label>
                        <Input
                            id="tags"
                            name="tags"
                            placeholder="Enter tags separated by commas"
                            value={formData.tags}
                            onChange={handleChange}
                        />
                        <p className="text-sm text-muted-foreground">Example: Investing, Stocks, Financial Planning</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Switch
                            id="featured"
                            checked={formData.featured}
                            onCheckedChange={(checked) => handleSwitchChange("featured", checked)}
                        />
                        <Label htmlFor="featured">Feature this article on the homepage</Label>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Publishing..." : "Publish Article"}
                        </Button>
                        <Button type="button" variant="outline" onClick={() => router.back()}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

