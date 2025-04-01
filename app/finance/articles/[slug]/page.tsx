import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, ChevronLeft, Clock, Share2, Tag, ThumbsUp } from "lucide-react"
import { BlogPostCard } from "@/components/blog-post-card"
import { BLOG_POSTS_WITH_CONTENT } from "@/lib/constants"

// Find related posts
function getRelatedPosts(postId: number) {
    const post = BLOG_POSTS_WITH_CONTENT.find((p) => p.id === postId)
    if (!post || !post.relatedPosts) return []

    return post.relatedPosts.map((id) => BLOG_POSTS_WITH_CONTENT.find((p) => p.id === id)).filter(Boolean)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = BLOG_POSTS_WITH_CONTENT.find((post) => post.slug === params.slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = getRelatedPosts(post.id)

    return (
        <div className="min-h-screen bg-background">
            {/* Hero section */}
            <div className="relative h-[400px] w-full">
                <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                    <Badge className="mb-4">{post.category}</Badge>
                    <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{post.title}</h1>
                    <div className="mt-6 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
                            </div>
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article content */}
            <div className="container mx-auto px-4 py-12">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-8 flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/finance/articles">
                                <ChevronLeft className="mr-1 h-4 w-4" />
                                Back to Articles
                            </Link>
                        </Button>
                        <div className="ml-auto flex gap-2">
                            <Button variant="outline" size="sm">
                                <Share2 className="mr-1 h-4 w-4" />
                                Share
                            </Button>
                            <Button variant="outline" size="sm">
                                <ThumbsUp className="mr-1 h-4 w-4" />
                                Like
                            </Button>
                        </div>
                    </div>

                    <div
                        className="prose prose-lg max-w-none dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-8 flex flex-wrap gap-2">
                        {post.tags?.map((tag) => (
                            <Badge key={tag} variant="outline">
                                <Tag className="mr-1 h-3 w-3" />
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <Separator className="my-12" />

                    {/* Author bio */}
                    <div className="flex flex-col gap-4 rounded-lg border bg-card p-6 sm:flex-row">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                            <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">{post.author}</h3>
                            <p className="mt-2 text-muted-foreground">{post.authorBio}</p>
                            <Button variant="outline" size="sm" className="mt-4">
                                View All Articles
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related articles */}
            {relatedPosts.length > 0 && (
                <section className="border-t bg-muted/30">
                    <div className="container mx-auto px-4 py-12">
                        <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedPosts.map(
                                (relatedPost) =>
                                    relatedPost && <BlogPostCard key={relatedPost.id} post={relatedPost} variant="regular" />,
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Newsletter */}
            <section className="bg-slate-900 py-16 text-white">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-2xl font-bold">Subscribe to Our Financial Newsletter</h2>
                        <p className="mt-4 text-gray-300">
                            Get weekly market insights, investment tips, and exclusive financial opportunities directly to your inbox
                        </p>
                        <div className="mt-8 flex">
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                className="rounded-r-none bg-white/10 text-white placeholder:text-gray-400 focus-visible:ring-primary"
                            />
                            <Button className="rounded-l-none">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

