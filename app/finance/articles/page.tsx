import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, PlusCircle } from "lucide-react"
import { BlogPostCard } from "@/components/blog-post-card"
import { BLOG_POSTS } from "@/lib/constants"
import Link from "next/link"

export default function FinanceArticlesPage() {
    // Get featured posts
    const featuredPosts = BLOG_POSTS.filter((post) => post.featured)
    // Get regular posts
    const regularPosts = BLOG_POSTS.filter((post) => !post.featured)

    return (
        <div className="min-h-screen bg-background">
            {/* Hero section */}
            <div className="bg-slate-900 py-16 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Financial Analysis & Insights</h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Expert perspectives on markets, investing, and financial planning
                    </p>
                    <div className="mt-6">
                        <Link href="/finance/articles/create">
                            <Button className="gap-2">
                                <PlusCircle className="h-4 w-4" />
                                Create New Article
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Search and filters */}
            <div className="border-b bg-muted/40">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="relative w-full max-w-md">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input type="search" placeholder="Search articles..." className="pl-9" />
                        </div>
                        <Tabs defaultValue="all">
                            <TabsList>
                                <TabsTrigger value="all">All Topics</TabsTrigger>
                                <TabsTrigger value="investing">Investing</TabsTrigger>
                                <TabsTrigger value="markets">Markets</TabsTrigger>
                                <TabsTrigger value="planning">Planning</TabsTrigger>
                                <TabsTrigger value="technology">Technology</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </div>
            </div>

            {/* Featured posts */}
            <section className="container mx-auto px-4 py-12">
                <h2 className="mb-8 text-2xl font-bold">Featured Articles</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {featuredPosts.map((post) => (
                        <BlogPostCard key={post.id} post={post} variant="featured" />
                    ))}
                </div>
            </section>

            {/* Regular posts */}
            <section className="container mx-auto px-4 py-8">
                <h2 className="mb-8 text-2xl font-bold">Latest Articles</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {regularPosts.map((post) => (
                        <BlogPostCard key={post.id} post={post} variant="regular" />
                    ))}
                </div>
            </section>

            {/* Pagination */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-center gap-1">
                    <Button variant="outline" size="icon" disabled>
                        &lt;
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                        1
                    </Button>
                    <Button variant="outline" size="sm">
                        2
                    </Button>
                    <Button variant="outline" size="sm">
                        3
                    </Button>
                    <Button variant="outline" size="sm">
                        4
                    </Button>
                    <Button variant="outline" size="sm">
                        5
                    </Button>
                    <span>...</span>
                    <Button variant="outline" size="sm">
                        10
                    </Button>
                    <Button variant="outline" size="icon">
                        &gt;
                    </Button>
                </div>
            </div>

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