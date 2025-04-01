import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, BarChart2, BookOpen, ChevronRight } from "lucide-react"
import ChartComponent from "@/components/chart-component"
import { STOCK_DATA, TIME_RANGES } from "@/lib/constants"

export default function FinancePage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10 space-y-8 pt-16 lg:pt-6">
      <div className="flex flex-col items-start space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Finance</h1>
        <p className="text-muted-foreground max-w-[700px]">
          Explore in-depth financial analysis, market data, and investment insights.
        </p>
      </div>

      <ChartComponent
        title="Major Stock Indices"
        description="Performance of major US stock indices"
        data={STOCK_DATA}
        series={[
          { name: "S&P 500", key: "sp500", color: "hsl(var(--chart-1))" },
          { name: "NASDAQ", key: "nasdaq", color: "hsl(var(--chart-2))" },
          { name: "Dow Jones", key: "dow", color: "hsl(var(--chart-3))" },
        ]}
        timeRanges={TIME_RANGES}
      />

      <div className="grid gap-6 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Data Files
            </CardTitle>
            <CardDescription>Financial datasets and reports</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Access financial data files including market data, economic indicators, and financial reports.
            </p>
            <Link href="/finance/data-files">
              <Button className="w-full" variant="outline">
                View Data Files <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <BarChart2 className="mr-2 h-5 w-5" />
              Price Charts
            </CardTitle>
            <CardDescription>Interactive financial charts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Explore interactive charts for stocks, bonds, commodities, and other financial instruments.
            </p>
            <Link href="/finance/price-charts">
              <Button className="w-full" variant="outline">
                View Price Charts <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Analytical Articles
            </CardTitle>
            <CardDescription>In-depth financial analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Read in-depth articles on financial markets, investment strategies, and economic trends.
            </p>
            <Link href="/finance/articles">
              <Button className="w-full" variant="outline">
                View Articles <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}