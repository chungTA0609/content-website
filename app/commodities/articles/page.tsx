import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Search, Tag, User } from "lucide-react"

// Sample articles data
const articles = [
  {
    id: 1,
    title: "Gold Market Outlook: Trends and Forecasts for 2023",
    excerpt:
      "An in-depth analysis of the gold market, examining current trends, price drivers, and forecasts for the coming year.",
    author: "Michael Johnson",
    date: "2023-12-10",
    readTime: "12 min",
    category: "precious-metals",
    tags: ["Gold", "Market Analysis", "Investment"],
  },
  {
    id: 2,
    title: "The Impact of Renewable Energy on Oil Markets",
    excerpt:
      "Exploring how the growth of renewable energy technologies is reshaping global oil markets and affecting price dynamics.",
    author: "Sarah Williams",
    date: "2023-11-28",
    readTime: "15 min",
    category: "energy",
    tags: ["Oil", "Renewable Energy", "Market Trends"],
  },
  {
    id: 3,
    title: "Agricultural Commodities: Climate Change Challenges",
    excerpt:
      "Analyzing how climate change is affecting agricultural commodity production, prices, and global food security.",
    author: "David Chen",
    date: "2023-11-15",
    readTime: "10 min",
    category: "agriculture",
    tags: ["Agriculture", "Climate Change", "Food Security"],
  },
  {
    id: 4,
    title: "Silver: The Overlooked Precious Metal Investment",
    excerpt: "Why silver might be an undervalued investment opportunity in the current market environment.",
    author: "Emily Rodriguez",
    date: "2023-10-30",
    readTime: "8 min",
    category: "precious-metals",
    tags: ["Silver", "Investment", "Precious Metals"],
  },
  {
    id: 5,
    title: "Natural Gas Markets: Winter Outlook and Price Predictions",
    excerpt: "A comprehensive look at natural gas supply, demand, and price forecasts for the upcoming winter season.",
    author: "Robert Thompson",
    date: "2023-10-15",
    readTime: "14 min",
    category: "energy",
    tags: ["Natural Gas", "Energy Markets", "Price Forecast"],
  },
  {
    id: 6,
    title: "Copper's Role in the Green Energy Transition",
    excerpt: "Examining how copper demand is being driven by renewable energy technologies and electric vehicles.",
    author: "Jennifer Lee",
    date: "2023-09-28",
    readTime: "11 min",
    category: "metals",
    tags: ["Copper", "Green Energy", "Electric Vehicles"],
  },
]

export default function CommoditiesArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Commodities Articles</h1>
        <p className="text-muted-foreground">In-depth analysis and insights on commodity markets</p>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search articles..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Articles</TabsTrigger>
          <TabsTrigger value="precious-metals">Precious Metals</TabsTrigger>
          <TabsTrigger value="energy">Energy</TabsTrigger>
          <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
          <TabsTrigger value="metals">Industrial Metals</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <User className="h-3 w-3" /> {article.author}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="line-clamp-3 text-muted-foreground">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                      <Clock className="ml-2 h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                    <Button asChild size="sm">
                      <Link href={`/commodities/articles/${article.id}`}>Read</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="precious-metals" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles
              .filter((article) => article.category === "precious-metals")
              .map((article) => (
                <Card key={article.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <User className="h-3 w-3" /> {article.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="line-clamp-3 text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                        <Clock className="ml-2 h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <Button asChild size="sm">
                        <Link href={`/commodities/articles/${article.id}`}>Read</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        {/* Similar TabsContent for other categories */}
        <TabsContent value="energy" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles
              .filter((article) => article.category === "energy")
              .map((article) => (
                <Card key={article.id} className="flex flex-col">
                  {/* Card content similar to above */}
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <User className="h-3 w-3" /> {article.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="line-clamp-3 text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                        <Clock className="ml-2 h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <Button asChild size="sm">
                        <Link href={`/commodities/articles/${article.id}`}>Read</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="agriculture" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles
              .filter((article) => article.category === "agriculture")
              .map((article) => (
                <Card key={article.id} className="flex flex-col">
                  {/* Card content similar to above */}
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <User className="h-3 w-3" /> {article.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="line-clamp-3 text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                        <Clock className="ml-2 h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <Button asChild size="sm">
                        <Link href={`/commodities/articles/${article.id}`}>Read</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="metals" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles
              .filter((article) => article.category === "metals")
              .map((article) => (
                <Card key={article.id} className="flex flex-col">
                  {/* Card content similar to above */}
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <User className="h-3 w-3" /> {article.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="line-clamp-3 text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                        <Clock className="ml-2 h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <Button asChild size="sm">
                        <Link href={`/commodities/articles/${article.id}`}>Read</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

