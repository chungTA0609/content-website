import {
    FileText,
    BarChart2,
    BookOpen,
    Home,
    DollarSign,
    Package,
    HistoryIcon as Philosophy,
    NotebookIcon as Lotus,
    PlusCircle,
} from "lucide-react"

// Define types for all our mock data
export interface FileItem {
    id: string
    name: string
    description: string
    type: string
    size: string
    date: string
    url: string
}

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

export interface BlogPostWithContent extends BlogPost {
    authorBio?: string
    content: string
    relatedPosts?: number[]
}

export interface MarketSummary {
    sp500: { value: number; change: number }
    nasdaq: { value: number; change: number }
    dowJones: { value: number; change: number }
}

export interface Stock {
    symbol: string
    price: number
    change: number
}

export interface CryptoCurrency {
    symbol: string
    price: number
    change: number
}

export interface MarketData {
    marketSummary: MarketSummary
    topStocks: Stock[]
    cryptoCurrencies: CryptoCurrency[]
}

// Sidebar tree data
export const TREE_DATA = [
    {
        id: "home",
        name: "Overview",
        href: "/",
        icon: Home,
    },
    {
        id: "finance",
        name: "Finance",
        icon: DollarSign,
        children: [
            {
                id: "finance-data",
                name: "Data Files",
                href: "/finance/data-files",
                icon: FileText,
            },
            {
                id: "finance-charts",
                name: "Price Charts",
                href: "/finance/price-charts",
                icon: BarChart2,
            },
            {
                id: "finance-articles",
                name: "Analytical Articles",
                href: "/finance/articles",
                icon: BookOpen,
            },
            {
                id: "finance-create-article",
                name: "Create Article",
                href: "/finance/articles/create",
                icon: PlusCircle,
            },
        ],
    },
    {
        id: "commodities",
        name: "Commodities",
        icon: Package,
        children: [
            {
                id: "commodities-data",
                name: "Data Files",
                href: "/commodities/data-files",
                icon: FileText,
            },
            {
                id: "commodities-charts",
                name: "Charts",
                href: "/commodities/charts",
                icon: BarChart2,
            },
            {
                id: "commodities-articles",
                name: "Analytical Articles",
                href: "/commodities/articles",
                icon: BookOpen,
            },
        ],
    },
    {
        id: "philosophy-buddhism",
        name: "Philosophy & Buddhism",
        icon: Philosophy,
        children: [
            {
                id: "philosophy",
                name: "Philosophy",
                href: "/philosophy-buddhism/philosophy",
                icon: BookOpen,
            },
            {
                id: "buddhism",
                name: "Buddhism",
                href: "/philosophy-buddhism/buddhism",
                icon: Lotus,
            },
        ],
    },
]

// Sample data files
export const DATA_FILES: FileItem[] = [
    {
        id: "1",
        name: "S&P 500 Historical Data (1950-2023)",
        description: "Complete historical price data for the S&P 500 index",
        type: "csv",
        size: "2.4 MB",
        date: "2023-10-01",
        url: "#",
    },
    {
        id: "2",
        name: "Global Interest Rates (2000-2023)",
        description: "Historical interest rates for major economies",
        type: "xlsx",
        size: "1.8 MB",
        date: "2023-09-15",
        url: "#",
    },
    {
        id: "3",
        name: "Economic Indicators Dashboard",
        description: "Interactive dashboard of key economic indicators",
        type: "pdf",
        size: "3.2 MB",
        date: "2023-09-10",
        url: "#",
    },
    {
        id: "4",
        name: "Sector Performance Analysis",
        description: "Comparative analysis of S&P 500 sectors",
        type: "csv",
        size: "1.5 MB",
        date: "2023-08-28",
        url: "#",
    },
    {
        id: "5",
        name: "Inflation Data (1970-2023)",
        description: "Historical inflation rates for major economies",
        type: "xlsx",
        size: "2.1 MB",
        date: "2023-08-15",
        url: "#",
    },
    {
        id: "6",
        name: "Yield Curve Analysis",
        description: "Historical yield curves and inversion analysis",
        type: "pdf",
        size: "4.5 MB",
        date: "2023-08-05",
        url: "#",
    },
]

// Stock market data
export const STOCK_DATA = [
    { name: "Jan", sp500: 3800, nasdaq: 13500, dow: 31000 },
    { name: "Feb", sp500: 3850, nasdaq: 13700, dow: 31200 },
    { name: "Mar", sp500: 3900, nasdaq: 13200, dow: 32000 },
    { name: "Apr", sp500: 4100, nasdaq: 13800, dow: 33500 },
    { name: "May", sp500: 4200, nasdaq: 14000, dow: 34000 },
    { name: "Jun", sp500: 4300, nasdaq: 14500, dow: 34500 },
]

// Time ranges for charts
export const TIME_RANGES = [
    {
        label: "6M",
        value: "6m",
        data: STOCK_DATA,
    },
    {
        label: "1Y",
        value: "1y",
        data: [
            { name: "Jul", sp500: 4250, nasdaq: 14300, dow: 34200 },
            { name: "Aug", sp500: 4400, nasdaq: 14800, dow: 35000 },
            { name: "Sep", sp500: 4300, nasdaq: 14600, dow: 34800 },
            { name: "Oct", sp500: 4500, nasdaq: 15000, dow: 35500 },
            { name: "Nov", sp500: 4600, nasdaq: 15500, dow: 36000 },
            { name: "Dec", sp500: 4700, nasdaq: 15800, dow: 36500 },
        ],
    },
]

// File upload constants
export const ACCEPTED_FILE_TYPES = ".csv,.xlsx,.pdf,.txt"
export const MAX_FILE_SIZE_MB = 20

// Filter options
export const FILE_FILTER_OPTIONS = ["All", "CSV", "XLSX", "PDF"]

// Mock blog post data
export const BLOG_POSTS: BlogPost[] = [
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

// Blog posts with content
export const BLOG_POSTS_WITH_CONTENT: BlogPostWithContent[] = [
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
  
  <p>For investors, the key to success lies in moving beyond simplistic approaches to develop a deep understanding of how environmental, social, and governance factors affect different industries and companies. Those who can effectively integrate these insights into their investment processes will be well-positioned to navigate the challenges and opportunities of a rapidly changing world.</p>
  `,
        relatedPosts: [9, 4, 8],
    },
]

// Mock market data
export const MOCK_MARKET_DATA: MarketData = {
    marketSummary: {
        sp500: { value: 5123.45, change: 0.67 },
        nasdaq: { value: 16789.23, change: 1.24 },
        dowJones: { value: 38456.78, change: -0.32 },
    },
    topStocks: [
        { symbol: "AAPL", price: 187.45, change: 1.23 },
        { symbol: "MSFT", price: 412.78, change: 0.87 },
        { symbol: "GOOGL", price: 156.34, change: -0.45 },
        { symbol: "AMZN", price: 178.92, change: 2.14 },
        { symbol: "NVDA", price: 824.56, change: 3.67 },
    ],
    cryptoCurrencies: [
        { symbol: "BTC", price: 68234.56, change: 2.34 },
        { symbol: "ETH", price: 3456.78, change: 1.56 },
        { symbol: "SOL", price: 145.23, change: 4.78 },
        { symbol: "ADA", price: 0.56, change: -1.23 },
        { symbol: "DOT", price: 7.89, change: -0.67 },
    ],
}

// Featured articles for homepage
export const FEATURED_ARTICLES = [
    {
        title: "The Future of Cryptocurrency in 2025",
        image: "/placeholder.svg?height=400&width=600&text=Crypto",
        category: "Cryptocurrency",
        author: "Michael Chen",
        date: "April 1, 2025",
        readTime: "8 min read",
    },
    {
        title: "How to Build a Recession-Proof Portfolio",
        image: "/placeholder.svg?height=400&width=600&text=Portfolio",
        category: "Investing",
        author: "Sarah Johnson",
        date: "March 28, 2025",
        readTime: "12 min read",
    },
    {
        title: "Real Estate Investment Trusts: A Complete Guide",
        image: "/placeholder.svg?height=400&width=600&text=REITs",
        category: "Real Estate",
        author: "David Williams",
        date: "March 25, 2025",
        readTime: "10 min read",
    },
    {
        title: "Maximizing Your 401(k): Strategies for Success",
        image: "/placeholder.svg?height=400&width=600&text=401k",
        category: "Retirement",
        author: "Jennifer Lee",
        date: "March 22, 2025",
        readTime: "9 min read",
    },
]

// Testimonials
export const TESTIMONIALS = [
    {
        name: "Emily Parker",
        role: "Small Business Owner",
        image: "/placeholder.svg?height=100&width=100&text=EP",
        quote:
            "The investment strategies I learned from FinanceInsight helped me grow my retirement portfolio by 32% in just one year. Incredible insights!",
    },
    {
        name: "Mark Johnson",
        role: "Software Engineer",
        image: "/placeholder.svg?height=100&width=100&text=MJ",
        quote:
            "As someone new to investing, the educational content provided clear, actionable advice that helped me start building wealth with confidence.",
    },
    {
        name: "Sophia Rodriguez",
        role: "Healthcare Professional",
        image: "/placeholder.svg?height=100&width=100&text=SR",
        quote:
            "The market analysis videos have been invaluable for understanding economic trends and making informed investment decisions.",
    },
]

// Premium reports
export const PREMIUM_REPORTS = [
    {
        title: "2025 Market Outlook",
        price: "$49.99",
        image: "/placeholder.svg?height=400&width=600&text=Market+Report",
        discount: "20% OFF",
    },
    {
        title: "Top 10 Dividend Stocks",
        price: "$29.99",
        image: "/placeholder.svg?height=400&width=600&text=Dividend+Report",
        discount: "15% OFF",
    },
    {
        title: "Crypto Investment Guide",
        price: "$39.99",
        image: "/placeholder.svg?height=400&width=600&text=Crypto+Guide",
        discount: "10% OFF",
    },
    {
        title: "Retirement Planning Kit",
        price: "$59.99",
        image: "/placeholder.svg?height=400&width=600&text=Retirement+Kit",
        discount: "25% OFF",
    },
]

// Media partners
export const MEDIA_PARTNERS = ["Bloomberg", "CNBC", "Forbes", "Wall Street Journal", "Reuters"]