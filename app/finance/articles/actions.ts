"use server"

import { revalidatePath } from "next/cache"
import { BLOG_POSTS, BLOG_POSTS_WITH_CONTENT, type BlogPostWithContent } from "@/lib/constants"

// In a real app, this would interact with a database
// For this demo, we'll simulate adding to our constants

export async function createBlogPost(formData: FormData) {
    try {
        // Extract form data
        const title = formData.get("title") as string
        const excerpt = formData.get("excerpt") as string
        const content = formData.get("content") as string
        const category = formData.get("category") as string
        const author = formData.get("author") as string
        const tags = (formData.get("tags") as string).split(",").map((tag) => tag.trim())
        const featured = formData.get("featured") === "on"

        // Validate required fields
        if (!title || !excerpt || !content || !category || !author) {
            return {
                success: false,
                message: "All required fields must be filled out",
            }
        }

        // Generate a slug from the title
        const slug = title
            .toLowerCase()
            .replace(/[^\w\s]/gi, "")
            .replace(/\s+/g, "-")

        // Create a new blog post object
        const newPost: BlogPostWithContent = {
            id: BLOG_POSTS.length + 1,
            title,
            slug,
            excerpt,
            content,
            category,
            author,
            authorImage: "/placeholder.svg?height=100&width=100&text=" + author.substring(0, 2).toUpperCase(),
            date: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
            readTime: `${Math.max(1, Math.ceil(content.length / 1000))} min read`,
            image: `/placeholder.svg?height=600&width=1200&text=${encodeURIComponent(category)}`,
            featured,
            tags: tags.filter((tag) => tag.length > 0),
            relatedPosts: [1, 2, 3].slice(0, Math.min(3, BLOG_POSTS.length)),
        }

        // In a real app, we would save to a database
        // For this demo, we'll simulate by adding to our arrays
        // Note: This won't persist after a server restart since we're modifying constants
        // @ts-ignore - We're intentionally modifying the constants for demo purposes
        BLOG_POSTS.unshift(newPost)
        // @ts-ignore
        BLOG_POSTS_WITH_CONTENT.unshift(newPost)

        // Revalidate the articles page to show the new post
        revalidatePath("/finance/articles")

        // Redirect to the new post
        return { success: true, slug }
    } catch (error) {
        console.error("Error creating blog post:", error)
        return {
            success: false,
            message: "An error occurred while creating the post",
        }
    }
}