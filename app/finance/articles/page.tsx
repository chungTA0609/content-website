import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { BlogPostCard, type BlogPost } from "@/components/blog-post-card"

// Mock blog post data
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Understanding Cryptocurrency: A Beginner's Guide to Digital Assets",
        slug: "understanding-cryptocurrency-beginners-guide",
        excerpt:
            "Learn the fundamentals of cryptocurrency, blockchain technology, and how digital assets are changing the financial landscape for investors worldwide.",
        category: "Cryptocurrency",
        author: "Michael Chen",
        authorImage: "/placeholder.svg?height=50&width=50&text=MC",
        date: "April 1, 2025",
        readTime: "8 min read",
        image: "/placeholder.svg?height=400&width=600&text=Cryptocurrency",
        featured: true,
        tags: ["Bitcoin", "Ethereum", "Blockchain"],
    },
    {
        id: 2,
        title: "The Future of ESG Investing: Sustainable Finance Trends for 2025",
        slug: "future-esg-investing-sustainable-finance-trends",
        excerpt:
            "Discover how environmental, social, and governance factors are reshaping investment strategies and creating new opportunities in the financial markets.",
        category: "Sustainable Finance",
        author: "Sarah Johnson",
        authorImage: "/placeholder.svg?height=50&width=50&text=SJ",
        date: "March 28, 2025",
        readTime: "10 min read",
        image: "/placeholder.svg?height=400&width=600&text=ESG+Investing",
        featured: true,
        tags: ["ESG", "Sustainable Investing", "Green Bonds"],
    },
    {
        id: 3,
        title: "Navigating Market Volatility: Strategies for Uncertain Times",
        slug: "navigating-market-volatility-strategies",
        excerpt:
            "Expert analysis on how to position your portfolio during periods of market uncertainty, with practical advice for both defensive and opportunistic approaches.",
        category: "Market Analysis",
        author: "David Williams",
        authorImage: "/placeholder.svg?height=50&width=50&text=DW",
        date: "March 25, 2025",
        readTime: "12 min read",
        image: "/placeholder.svg?height=400&width=600&text=Market+Volatility",
        featured: true,
        tags: ["Risk Management", "Portfolio Strategy", "Market Timing"],
    },
    {
        id: 4,
        title: "Retirement Planning in Your 30s: Building Wealth for the Long Term",
        slug: "retirement-planning-30s-building-wealth",
        excerpt:
            "Why starting retirement planning early is crucial and how to optimize your savings strategy to ensure financial security in your golden years.",
        category: "Retirement",
        author: "Jennifer Lee",
        authorImage: "/placeholder.svg?height=50&width=50&text=JL",
        date: "March 22, 2025",
        readTime: "9 min read",
        image: "/placeholder.svg?height=400&width=600&text=Retirement+Planning",
        featured: false,
        tags: ["401(k)", "IRA", "Financial Planning"],
    },
    {
        id: 5,
        title: "The Rise of Decentralized Finance (DeFi): Disrupting Traditional Banking",
        slug: "rise-defi-disrupting-traditional-banking",
        excerpt:
            "Exploring how DeFi protocols are challenging conventional financial systems and creating new opportunities for lending, borrowing, and investing.",
        category: "Fintech",
        author: "Robert Thompson",
        authorImage: "/placeholder.svg?height=50&width=50&text=RT",
        date: "March 18, 2025",
        readTime: "11 min read",
        image: "/placeholder.svg?height=400&width=600&text=DeFi",
        featured: false,
        tags: ["DeFi", "Smart Contracts", "Yield Farming"],
    },
    {
        id: 6,
        title: "Real Estate Investment Trusts (REITs): Passive Income Through Property",
        slug: "reits-passive-income-property",
        excerpt:
            "A comprehensive guide to investing in REITs, including different types, tax implications, and how they can provide steady income in your investment portfolio.",
        category: "Real Estate",
        author: "Emily Rodriguez",
        authorImage: "/placeholder.svg?height=50&width=50&text=ER",
        date: "March 15, 2025",
        readTime: "10 min read",
        image: "/placeholder.svg?height=400&width=600&text=REITs",
        featured: false,
        tags: ["REITs", "Passive Income", "Dividend Investing"],
    },
    {
        id: 7,
        title: "Algorithmic Trading: How AI is Transforming Financial Markets",
        slug: "algorithmic-trading-ai-transforming-markets",
        excerpt:
            "Discover how artificial intelligence and machine learning algorithms are being used to analyze market data and execute trades with unprecedented speed and accuracy.",
        category: "Technology",
        author: "James Wilson",
        authorImage: "/placeholder.svg?height=50&width=50&text=JW",
        date: "March 12, 2025",
        readTime: "14 min read",
        image: "/placeholder.svg?height=400&width=600&text=Algorithmic+Trading",
        featured: false,
        tags: ["AI", "Machine Learning", "Quantitative Finance"],
    },
    {
        id: 8,
        title: "Tax-Efficient Investing: Strategies to Minimize Your Tax Burden",
        slug: "tax-efficient-investing-strategies",
        excerpt:
            "Learn how to structure your investments to minimize taxes and maximize after-tax returns through asset location, tax-loss harvesting, and other proven techniques.",
        category: "Tax Planning",
        author: "Michelle Parker",
        authorImage: "/placeholder.svg?height=50&width=50&text=MP",
        date: "March 10, 2025",
        readTime: "9 min read",
        image: "/placeholder.svg?height=400&width=600&text=Tax+Planning",
        featured: false,
        tags: ["Tax Optimization", "Capital Gains", "Tax-Loss Harvesting"],
    },
    {
        id: 9,
        title: "The Psychology of Investing: Overcoming Emotional Biases",
        slug: "psychology-investing-emotional-biases",
        excerpt:
            "Understanding the cognitive and emotional biases that affect investment decisions and practical strategies to improve your decision-making process.",
        category: "Behavioral Finance",
        author: "Daniel Kim",
        authorImage: "/placeholder.svg?height=50&width=50&text=DK",
        date: "March 8, 2025",
        readTime: "11 min read",
        image: "/placeholder.svg?height=400&width=600&text=Investing+Psychology",
        featured: false,
        tags: ["Behavioral Finance", "Decision Making", "Risk Perception"],
    },
]

export default function FinanceArticlesPage() {
    // Get featured posts
    const featuredPosts = blogPosts.filter((post) => post.featured)
    // Get regular posts
    const regularPosts = blogPosts.filter((post) => !post.featured)

    return (
        <div className="min-h-screen bg-background">
            {/* Hero section */}
            <div className="bg-slate-900 py-16 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Financial Analysis & Insights</h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Expert perspectives on markets, investing, and financial planning
                    </p>
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

