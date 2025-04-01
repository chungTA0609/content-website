import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReportCard } from "./report-card"
import { PREMIUM_REPORTS } from "@/lib/constants"

export function PremiumContentSection() {
  return (
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
              {PREMIUM_REPORTS.map((report, index) => (
                <ReportCard
                  key={index}
                  title={report.title}
                  image={report.image}
                  price={report.price}
                  discount={report.discount}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}