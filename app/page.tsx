import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronRight, Clock, Play, Star, User } from "lucide-react"
import { MarketData } from "@/components/market-data"
import { UmlDiagramFlow } from "@/components/uml-diagram-flow"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <Image
          src="/placeholder.svg?height=1000&width=2000"
          alt="Finance Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Discover the world of <span className="text-primary-foreground">financial freedom</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-200">
            Expert insights, market analysis, and investment strategies to help you build wealth
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button size="lg" className="gap-2">
              Explore Articles <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-black/30 text-white hover:bg-black/50">
              <Play className="h-4 w-4" /> Watch Market Analysis
            </Button>
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 bg-black/50 p-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-16 w-24 cursor-pointer overflow-hidden rounded">
              <Image
                src={`/placeholder.svg?height=100&width=150&text=Finance${item}`}
                alt={`Thumbnail ${item}`}
                width={150}
                height={100}
                className="h-full w-full object-cover transition-transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Market Data Section - Using Node.js 20 features */}
      <section className="container mx-auto px-4 py-8">
        <MarketData />
      </section>

      {/* Overview Diagram Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">
            Your Complete <span className="text-primary">Financial Resource</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Explore our comprehensive suite of financial tools, resources, and expert insights
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <UmlDiagramFlow />

          <div className="mt-8 text-center">
            <Button size="lg" className="gap-2">
              Explore All Features
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">
            Featured <span className="text-primary">Investment Opportunities</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Explore the most promising investment opportunities and financial strategies from our expert analysts
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6 justify-start">
            <TabsTrigger value="all">All Topics</TabsTrigger>
            <TabsTrigger value="stocks">Stocks</TabsTrigger>
            <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
            <TabsTrigger value="realestate">Real Estate</TabsTrigger>
            <TabsTrigger value="retirement">Retirement</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
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
              ].map((article, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    <Badge className="absolute left-3 top-3">{article.category}</Badge>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-2 text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between p-4 pt-0">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Other tab contents would be similar */}
          <TabsContent value="stocks">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Stock-specific articles would go here */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Stocks"
                    alt="Stock Market Analysis"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <Badge className="absolute left-3 top-3">Stocks</Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-2 text-lg">10 Undervalued Stocks to Buy Now</CardTitle>
                </CardHeader>
                <CardFooter className="flex items-center justify-between p-4 pt-0">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="h-3 w-3" />
                    <span>Robert Thompson</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>15 min read</span>
                  </div>
                </CardFooter>
              </Card>
              {/* More stock articles would be here */}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Rest of the page content remains unchanged */}
      {/* Expert Profile Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Financial+Expert"
                alt="Financial Expert"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold">
                James Wilson
                <span className="ml-2 block text-xl text-primary">& FinanceInsight</span>
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-1">
                    20+ Years Experience
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Former Wall Street analyst with over two decades of experience in financial markets and investment
                    strategies.
                  </p>
                </div>

                <p className="text-muted-foreground">
                  James has helped thousands of investors build wealth through strategic investment planning and market
                  analysis. His approach combines fundamental analysis with macroeconomic trends to identify
                  opportunities in various market conditions.
                </p>

                <div className="mt-4">
                  <h3 className="font-semibold">Areas of Expertise:</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Value Investing & Portfolio Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Retirement Planning & Tax Strategies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Market Analysis & Economic Forecasting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold">
                Financial Education Videos
                <span className="ml-2 block text-xl text-primary-foreground">Expert Analysis</span>
              </h2>
              <p className="mt-4 text-gray-300">
                Watch our in-depth market analysis and investment strategy videos to help you make informed financial
                decisions.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="rounded-full bg-white/10 px-4 py-2">
                  <span className="text-2xl font-bold">4M+</span>
                  <span className="ml-2 text-sm text-gray-300">Views</span>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2">
                  <span className="text-2xl font-bold">250+</span>
                  <span className="ml-2 text-sm text-gray-300">Videos</span>
                </div>
              </div>
              <Button className="mt-8 w-fit">Watch Now</Button>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Financial+Video"
                alt="Financial Video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <Play className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            What People <span className="text-primary">Say About FinanceInsight</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-1 pb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Content Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold">
            Premium <span className="text-primary">Financial Reports</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
            Exclusive research reports and investment guides to help you navigate complex financial markets
          </p>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6 justify-center">
              <TabsTrigger value="all">All Reports</TabsTrigger>
              <TabsTrigger value="market">Market Analysis</TabsTrigger>
              <TabsTrigger value="stock">Stock Picks</TabsTrigger>
              <TabsTrigger value="etf">ETF Guide</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
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
                ].map((report, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative">
                      <Image
                        src={report.image || "/placeholder.svg"}
                        alt={report.title}
                        width={600}
                        height={400}
                        className="h-48 w-full object-cover"
                      />
                      <div className="absolute right-2 top-2 rounded bg-primary px-2 py-1 text-xs font-bold text-white">
                        {report.discount}
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-2 text-lg">{report.title}</CardTitle>
                      <CardDescription>Premium Financial Report</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between p-4 pt-0">
                      <div className="text-lg font-bold">{report.price}</div>
                      <Button size="sm">Purchase</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            {["Bloomberg", "CNBC", "Forbes", "Wall Street Journal", "Reuters"].map((partner) => (
              <div key={partner} className="flex h-12 items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=50&width=150&text=${partner}`}
                  alt={partner}
                  width={150}
                  height={50}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Subscribe to Our Financial Newsletter</h2>
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

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">FinanceInsight</h3>
            <p className="text-sm text-muted-foreground">
              Providing expert financial analysis and investment strategies to help you build wealth and achieve
              financial freedom.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Premium Reports
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Stocks & ETFs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Cryptocurrency
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Tax Strategies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">contact@financeinsight.com</li>
              <li className="text-muted-foreground">1-800-FINANCE</li>
              <li className="text-muted-foreground">123 Wall Street, New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 FinanceInsight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

