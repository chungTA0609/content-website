import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

export function ExpertProfileSection() {
  return (
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
                analysis. His approach combines fundamental analysis with macroeconomic trends to identify opportunities
                in various market conditions.
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
  )
}

