import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArticleCard } from "@/components/article-card"
import { FEATURED_ARTICLES } from "@/lib/constants"

export function FeaturedArticlesSection() {
  return (
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
            {FEATURED_ARTICLES.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                image={article.image}
                category={article.category}
                author={article.author}
                readTime={article.readTime}
              />
            ))}
          </div>
        </TabsContent>

        {/* Other tab contents would be similar */}
        <TabsContent value="stocks">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Stock-specific articles would go here */}
            <ArticleCard
              title="10 Undervalued Stocks to Buy Now"
              image="/placeholder.svg?height=400&width=600&text=Stocks"
              category="Stocks"
              author="Robert Thompson"
              readTime="15 min read"
            />
            {/* More stock articles would be here */}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}