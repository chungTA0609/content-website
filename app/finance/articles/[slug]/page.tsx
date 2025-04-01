import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, ChevronLeft, Clock, Share2, Tag, ThumbsUp } from "lucide-react"
import { BlogPostCard, type BlogPost } from "@/components/blog-post-card"

// Mock blog post data
const blogPosts: (BlogPost & {
    authorBio?: string
    content: string
    relatedPosts?: number[]
})[] = [
        {
            id: 1,
            title: "Understanding Cryptocurrency: A Beginner's Guide to Digital Assets",
            slug: "understanding-cryptocurrency-beginners-guide",
            excerpt:
                "Learn the fundamentals of cryptocurrency, blockchain technology, and how digital assets are changing the financial landscape for investors worldwide.",
            category: "Cryptocurrency",
            author: "Michael Chen",
            authorImage: "/placeholder.svg?height=100&width=100&text=MC",
            authorBio:
                "Michael is a blockchain specialist with over 10 years of experience in the cryptocurrency industry. He has advised numerous startups and written extensively about digital assets.",
            date: "April 1, 2025",
            readTime: "8 min read",
            image: "/placeholder.svg?height=600&width=1200&text=Cryptocurrency",
            featured: true,
            tags: ["Bitcoin", "Ethereum", "Blockchain"],
            content: `
      <h2>Introduction to Cryptocurrency</h2>
      <p>Cryptocurrency represents a revolutionary approach to money and finance, operating on decentralized networks based on blockchain technology. Unlike traditional currencies issued by governments, cryptocurrencies function without a central authority, making them theoretically immune to government interference or manipulation.</p>
      
      <p>The first and most well-known cryptocurrency, Bitcoin, was introduced in 2009 by an individual or group using the pseudonym Satoshi Nakamoto. Since then, thousands of alternative cryptocurrencies have been created, each with unique features and applications.</p>
      
      <h2>How Blockchain Technology Works</h2>
      <p>At the heart of cryptocurrency is blockchain technology—a distributed ledger enforced by a decentralized network of computers. Each "block" contains a number of transactions, and once completed, is added to the "chain" of previous blocks, creating a permanent and unalterable record.</p>
      
      <p>This technology ensures transparency and security in several ways:</p>
      <ul>
        <li>Decentralization: No single entity controls the network</li>
        <li>Immutability: Once recorded, data cannot be altered</li>
        <li>Transparency: All transactions are publicly viewable</li>
        <li>Security: Cryptographic techniques protect the integrity of the data</li>
      </ul>
      
      <h2>Types of Cryptocurrencies</h2>
      <p>While Bitcoin remains the most valuable and recognized cryptocurrency, the ecosystem has expanded dramatically to include:</p>
      
      <h3>Altcoins</h3>
      <p>Alternative cryptocurrencies like Litecoin, Ripple (XRP), and Cardano offer different features, such as faster transaction times or different consensus mechanisms.</p>
      
      <h3>Stablecoins</h3>
      <p>Cryptocurrencies like Tether (USDT) and USD Coin (USDC) are designed to minimize volatility by pegging their value to stable assets like the US dollar.</p>
      
      <h3>Utility Tokens</h3>
      <p>Tokens like Basic Attention Token (BAT) or Filecoin are designed for specific use cases within their respective platforms.</p>
      
      <h3>Security Tokens</h3>
      <p>These represent ownership in an external asset, similar to traditional securities.</p>
      
      <h2>Investing in Cryptocurrency</h2>
      <p>For those interested in investing in cryptocurrency, there are several approaches to consider:</p>
      
      <h3>Direct Purchase</h3>
      <p>Buying and holding cryptocurrencies through exchanges like Coinbase, Binance, or Kraken is the most straightforward approach.</p>
      
      <h3>Cryptocurrency ETFs</h3>
      <p>Exchange-traded funds that track the price of cryptocurrencies offer exposure without directly owning the assets.</p>
      
      <h3>Mining</h3>
      <p>Some cryptocurrencies can be "mined" by contributing computing power to validate transactions and secure the network.</p>
      
      <h3>Staking</h3>
      <p>Certain cryptocurrencies allow holders to earn passive income by participating in transaction validation through staking.</p>
      
      <h2>Risks and Considerations</h2>
      <p>While cryptocurrency offers exciting opportunities, investors should be aware of several risks:</p>
      
      <ul>
        <li>Volatility: Cryptocurrency prices can fluctuate dramatically</li>
        <li>Regulatory uncertainty: Government regulations are still evolving</li>
        <li>Security concerns: Digital assets can be vulnerable to hacking</li>
        <li>Technical complexity: Understanding the technology requires a learning curve</li>
      </ul>
      
      <h2>The Future of Cryptocurrency</h2>
      <p>As cryptocurrency continues to mature, several trends are emerging:</p>
      
      <ul>
        <li>Institutional adoption: Major companies and financial institutions are increasingly investing in and accepting cryptocurrency</li>
        <li>Central Bank Digital Currencies (CBDCs): Many countries are exploring government-backed digital currencies</li>
        <li>Decentralized Finance (DeFi): A growing ecosystem of financial applications built on blockchain technology</li>
        <li>Non-Fungible Tokens (NFTs): Unique digital assets representing ownership of specific items</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Cryptocurrency represents a fundamental shift in how we think about money, value, and financial systems. While still in its relative infancy, the technology continues to evolve and find new applications across various industries.</p>
      
      <p>For investors, cryptocurrency offers both significant opportunities and substantial risks. A thoughtful approach, thorough research, and careful risk management are essential for navigating this dynamic and rapidly changing landscape.</p>
    `,
            relatedPosts: [5, 7, 2],
        },
        {
            id: 2,
            title: "The Future of ESG Investing: Sustainable Finance Trends for 2025",
            slug: "future-esg-investing-sustainable-finance-trends",
            excerpt:
                "Discover how environmental, social, and governance factors are reshaping investment strategies and creating new opportunities in the financial markets.",
            category: "Sustainable Finance",
            author: "Sarah Johnson",
            authorImage: "/placeholder.svg?height=100&width=100&text=SJ",
            authorBio:
                "Sarah is a sustainable finance expert with experience at leading investment firms. She specializes in ESG integration and impact investing strategies.",
            date: "March 28, 2025",
            readTime: "10 min read",
            image: "/placeholder.svg?height=600&width=1200&text=ESG+Investing",
            featured: true,
            tags: ["ESG", "Sustainable Investing", "Green Bonds"],
            content: `
      <h2>The Evolution of ESG Investing</h2>
      <p>Environmental, Social, and Governance (ESG) investing has transformed from a niche approach to a mainstream investment strategy. What began as simple negative screening—excluding certain industries like tobacco or firearms—has evolved into a sophisticated framework for evaluating companies based on their environmental impact, social responsibility, and governance practices.</p>
      
      <p>In 2025, ESG investing is no longer viewed as sacrificing returns for values. Instead, it's increasingly recognized as a risk management tool that can identify companies positioned for long-term success in a changing world.</p>
      
      <h2>Key ESG Trends Shaping Markets</h2>
      
      <h3>Climate Transition Investing</h3>
      <p>As governments worldwide implement more stringent climate policies, investors are focusing on companies that are successfully navigating the transition to a low-carbon economy. This includes:</p>
      <ul>
        <li>Renewable energy producers and technology providers</li>
        <li>Traditional energy companies with credible transition plans</li>
        <li>Companies reducing emissions across their supply chains</li>
        <li>Providers of climate adaptation solutions</li>
      </ul>
      
      <h3>Biodiversity and Natural Capital</h3>
      <p>Beyond climate change, investors are increasingly recognizing the financial risks associated with biodiversity loss and ecosystem degradation. Companies that depend on natural resources or have significant impacts on ecosystems face growing scrutiny from investors concerned about long-term sustainability.</p>
      
      <h3>Social Factors Gaining Prominence</h3>
      <p>While environmental concerns have dominated the ESG conversation, social factors are receiving increased attention. This includes:</p>
      <ul>
        <li>Labor practices and human rights throughout supply chains</li>
        <li>Diversity, equity, and inclusion initiatives</li>
        <li>Community relations and social license to operate</li>
        <li>Product safety and data privacy</li>
      </ul>
      
      <h3>Governance Evolution</h3>
      <p>Corporate governance continues to evolve with greater emphasis on:</p>
      <ul>
        <li>Board diversity and expertise in sustainability issues</li>
        <li>Executive compensation tied to ESG metrics</li>
        <li>Transparent tax practices</li>
        <li>Cybersecurity governance</li>
      </ul>
      
      <h2>ESG Integration Approaches</h2>
      
      <h3>Data and Metrics Standardization</h3>
      <p>One of the most significant developments in ESG investing is the standardization of reporting frameworks. The International Sustainability Standards Board (ISSB) has established global baseline standards for sustainability-related financial disclosures, making it easier for investors to compare companies across borders and industries.</p>
      
      <h3>Active Ownership and Engagement</h3>
      <p>Rather than simply divesting from companies with poor ESG profiles, many investors are taking an active ownership approach. This involves:</p>
      <ul>
        <li>Voting on shareholder resolutions</li>
        <li>Direct engagement with management on ESG issues</li>
        <li>Collaborative initiatives with other investors</li>
        <li>Public policy advocacy</li>
      </ul>
      
      <h3>Impact Investing Goes Mainstream</h3>
      <p>Impact investing—which seeks to generate positive, measurable social and environmental impacts alongside financial returns—has moved from the margins to the mainstream. Large asset managers now offer a range of impact investing products accessible to retail investors.</p>
      
      <h2>Innovative Financial Products</h2>
      
      <h3>Sustainability-Linked Bonds and Loans</h3>
      <p>Unlike green bonds, which fund specific environmental projects, sustainability-linked bonds and loans tie interest rates to the achievement of sustainability targets. This creates a direct financial incentive for companies to improve their ESG performance.</p>
      
      <h3>Transition Finance</h3>
      <p>Specialized financial instruments are emerging to fund the transition of carbon-intensive industries toward more sustainable business models. These instruments acknowledge that some sectors cannot transform overnight but need capital to reduce their environmental impact over time.</p>
      
      <h3>Nature-Based Solutions</h3>
      <p>Financial products that support nature conservation and restoration are gaining traction, including blue bonds for ocean conservation and forest bonds for reforestation projects.</p>
      
      <h2>Regulatory Landscape</h2>
      <p>The regulatory environment for sustainable finance continues to evolve rapidly:</p>
      <ul>
        <li>Mandatory ESG disclosure requirements in major markets</li>
        <li>Taxonomies defining sustainable economic activities</li>
        <li>Anti-greenwashing regulations</li>
        <li>Climate stress testing for financial institutions</li>
      </ul>
      
      <h2>Challenges and Opportunities</h2>
      
      <h3>Data Quality and Comparability</h3>
      <p>Despite improvements in standardization, ESG data still presents challenges in terms of quality, coverage, and comparability, particularly for smaller companies and emerging markets.</p>
      
      <h3>Avoiding Greenwashing</h3>
      <p>As ESG investing grows in popularity, so does the risk of greenwashing—making misleading claims about environmental benefits. Investors need robust due diligence processes to distinguish between genuine sustainability leaders and those merely paying lip service.</p>
      
      <h3>Just Transition</h3>
      <p>Ensuring that the transition to a sustainable economy is socially inclusive presents both challenges and opportunities for investors committed to both environmental and social outcomes.</p>
      
      <h2>Conclusion</h2>
      <p>ESG investing in 2025 is characterized by greater sophistication, improved data, and a more nuanced understanding of the complex relationships between sustainability factors and financial performance. As climate change, resource scarcity, and social inequalities continue to present material risks and opportunities, ESG considerations are becoming integral to investment decision-making across asset classes.</p>
      
      <p>For investors, the key to success lies in moving beyond simplistic approaches to develop a deep understanding of how environmental, social, and governance factors affect different industries and companies. Those who can effectively integrate these insights into their investment processes will be well-positioned to navigate the challenges and opportunities of a rapidly changing world.</p>
    `,
            relatedPosts: [3, 6, 9],
        },
        {
            id: 3,
            title: "Navigating Market Volatility: Strategies for Uncertain Times",
            slug: "navigating-market-volatility-strategies",
            excerpt:
                "Expert analysis on how to position your portfolio during periods of market uncertainty, with practical advice for both defensive and opportunistic approaches.",
            category: "Market Analysis",
            author: "David Williams",
            authorImage: "/placeholder.svg?height=100&width=100&text=DW",
            authorBio:
                "David is a veteran market strategist with over 20 years of experience in financial markets. He specializes in volatility analysis and risk management strategies.",
            date: "March 25, 2025",
            readTime: "12 min read",
            image: "/placeholder.svg?height=600&width=1200&text=Market+Volatility",
            featured: true,
            tags: ["Risk Management", "Portfolio Strategy", "Market Timing"],
            content: `
      <h2>Understanding Market Volatility</h2>
      <p>Market volatility—the rate at which security prices rise or fall—is an inherent characteristic of financial markets. While often perceived negatively, volatility itself is neither good nor bad; it simply represents the market's reaction to new information and changing expectations.</p>
      
      <p>In 2025, several factors are contributing to heightened market volatility:</p>
      <ul>
        <li>Geopolitical tensions and trade disputes</li>
        <li>Monetary policy adjustments by central banks</li>
        <li>Technological disruption across industries</li>
        <li>Climate-related risks and regulatory responses</li>
        <li>Shifting demographic trends</li>
      </ul>
      
      <h2>The Psychology of Volatility</h2>
      <p>Before discussing specific strategies, it's important to understand the psychological impact of market volatility. Research in behavioral finance has identified several cognitive biases that can lead investors to make suboptimal decisions during volatile periods:</p>
      
      <h3>Loss Aversion</h3>
      <p>Investors typically feel the pain of losses more acutely than the pleasure of equivalent gains. This asymmetry can lead to panic selling during market downturns, locking in losses rather than staying the course.</p>
      
      <h3>Recency Bias</h3>
      <p>The tendency to place too much weight on recent events can cause investors to extrapolate short-term market movements into long-term trends, leading to overreaction.</p>
      
      <h3>Herd Behavior</h3>
      <p>The natural tendency to follow the crowd can amplify market movements, as investors rush to buy or sell based on what others are doing rather than fundamental analysis.</p>
      
      <h2>Defensive Strategies for Volatile Markets</h2>
      
      <h3>Diversification Across Asset Classes</h3>
      <p>One of the most effective ways to manage volatility is through strategic diversification. This means spreading investments across different asset classes that typically don't move in tandem:</p>
      <ul>
        <li>Equities (stocks) across different sectors, geographies, and market capitalizations</li>
        <li>Fixed income securities with varying durations and credit qualities</li>
        <li>Alternative investments such as real estate, commodities, or infrastructure</li>
        <li>Cash and cash equivalents for liquidity and stability</li>
      </ul>
      
      <h3>Defensive Equity Sectors</h3>
      <p>Within equity allocations, certain sectors historically demonstrate greater resilience during market turbulence:</p>
      <ul>
        <li>Consumer staples (food, beverages, household products)</li>
        <li>Healthcare (pharmaceuticals, medical devices)</li>
        <li>Utilities (electricity, water, gas)</li>
        <li>Telecommunications (essential communication services)</li>
      </ul>
      
      <h3>Quality Factor Focus</h3>
      <p>Companies with strong balance sheets, stable earnings, and sustainable competitive advantages often weather volatility better than their peers. Key quality indicators include:</p>
      <ul>
        <li>Low debt-to-equity ratios</li>
        <li>Consistent profit margins</li>
        <li>Strong free cash flow generation</li>
        <li>High return on invested capital</li>
      </ul>
      
      <h3>Hedging Strategies</h3>
      <p>For sophisticated investors, various hedging techniques can help mitigate downside risk:</p>
      <ul>
        <li>Options strategies (protective puts, covered calls)</li>
        <li>Inverse ETFs that move opposite to market indexes</li>
        <li>Volatility-linked products (though these require careful management)</li>
        <li>Tail risk hedging programs</li>
      </ul>
      
      <h2>Opportunistic Approaches to Volatility</h2>
      
      <h3>Systematic Rebalancing</h3>
      <p>Rather than trying to time the market, a disciplined rebalancing approach automatically sells assets that have appreciated and buys those that have declined, maintaining target allocations while implementing a "buy low, sell high" discipline.</p>
      
      <h3>Dollar-Cost Averaging</h3>
      <p>Investing fixed amounts at regular intervals regardless of market conditions can reduce the impact of volatility and potentially lower the average cost of investments over time.</p>
      
      <h3>Tactical Asset Allocation</h3>
      <p>For investors with strong market views, making temporary adjustments to asset allocation based on market conditions can enhance returns. However, this approach requires discipline and a systematic framework to avoid emotional decision-making.</p>
      
      <h3>Volatility as an Opportunity</h3>
      <p>Market dislocations often create opportunities to acquire high-quality assets at discounted prices. Maintaining a watchlist of desirable investments and predetermined entry points can help investors capitalize on volatility rather than fear it.</p>
      
      <h2>Building Resilience: Portfolio Construction for Volatile Markets</h2>
      
      <h3>Core-Satellite Approach</h3>
      <p>A core-satellite portfolio structure combines a stable, diversified core (often using low-cost index funds) with satellite positions that target specific opportunities or defensive strategies.</p>
      
      <h3>Barbell Strategy</h3>
      <p>This approach combines very conservative investments (like short-term government bonds) with higher-risk, higher-potential-return investments, while minimizing exposure to the middle ground.</p>
      
      <h3>Risk Parity</h3>
      <p>Rather than allocating capital based on asset classes, risk parity allocates based on risk contribution, potentially creating more balanced exposure to different market environments.</p>
      
      <h2>The Role of Cash in Volatile Markets</h2>
      <p>Maintaining adequate cash reserves serves multiple purposes during volatile periods:</p>
      <ul>
        <li>Provides liquidity for essential expenses without forcing untimely asset sales</li>
        <li>Creates dry powder to take advantage of market opportunities</li>
        <li>Reduces overall portfolio volatility</li>
        <li>Provides psychological comfort that can prevent panic selling</li>
      </ul>
      
      <h2>Long-Term Perspective: Volatility in Context</h2>
      <p>While navigating short-term volatility requires specific strategies, maintaining a long-term perspective is perhaps the most important approach. Historical data consistently shows that:</p>
      <ul>
        <li>Market timing is extremely difficult, even for professionals</li>
        <li>The impact of volatility diminishes over longer time horizons</li>
        <li>Missing just a few of the market's best days can significantly reduce long-term returns</li>
        <li>Patient investors who stay invested through market cycles typically outperform those who try to avoid volatility</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Market volatility is an inevitable aspect of investing that can test even the most disciplined investors. By understanding the psychological challenges it presents, implementing appropriate defensive strategies, and maintaining a long-term perspective, investors can not only survive periods of market turbulence but potentially use them to their advantage.</p>
      
      <p>The most successful approach combines preparation before volatility strikes, discipline during market stress, and a willingness to capitalize on the opportunities that volatility inevitably creates. By developing a personalized volatility management strategy that aligns with your financial goals, risk tolerance, and time horizon, you can navigate uncertain markets with greater confidence and resilience.</p>
    `,
            relatedPosts: [9, 4, 8],
        },
    ]

// Find related posts
function getRelatedPosts(postId: number) {
    const post = blogPosts.find((p) => p.id === postId)
    if (!post || !post.relatedPosts) return []

    return post.relatedPosts.map((id) => blogPosts.find((p) => p.id === id)).filter(Boolean)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((post) => post.slug === params.slug)

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
                        {post.tags.map((tag) => (
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

