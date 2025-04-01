import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

export interface BlogPost {
    id: number
    title: string
    slug: string
    excerpt: string
    category: string
    author: string
    authorImage: string
    date: string
    readTime: string
    image: string
    featured?: boolean
    tags?: string[]
}

interface BlogPostCardProps {
    post: BlogPost
    variant?: "featured" | "regular"
}

export function BlogPostCard({ post, variant = "regular" }: BlogPostCardProps) {
    return (
        <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <Link href={`/finance/articles/${post.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3">
                        {/* Custom badge instead of using the Badge component */}
                        <span className="inline-flex rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                            {post.category}
                        </span>
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="text-xl font-bold leading-tight tracking-tight">{post.title}</h3>
                    <p className="mt-2 text-muted-foreground">{post.excerpt}</p>

                    <div className="mt-4 flex items-center gap-3">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-muted">
                            <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
                        </div>
                        <span className="font-medium">{post.author}</span>
                    </div>

                    <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
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
            </Link>
        </div>
    )
}

