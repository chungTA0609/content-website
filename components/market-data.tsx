"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"

type MarketSummary = {
  sp500: { value: number; change: number }
  nasdaq: { value: number; change: number }
  dowJones: { value: number; change: number }
}

type Stock = {
  symbol: string
  price: number
  change: number
}

type CryptoCurrency = {
  symbol: string
  price: number
  change: number
}

type MarketData = {
  marketSummary: MarketSummary
  topStocks: Stock[]
  cryptoCurrencies: CryptoCurrency[]
}

export function MarketData() {
  const [data, setData] = useState<MarketData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        // Using the fetch API (supported in Node.js 20)
        const response = await fetch("/api/market-data")

        if (!response.ok) {
          throw new Error("Failed to fetch market data")
        }

        const marketData = await response.json()
        setData(marketData)
      } catch (err) {
        setError("Error loading market data")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMarketData()

    // Refresh data every 5 minutes
    const intervalId = setInterval(fetchMarketData, 5 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Market Data</CardTitle>
          <CardDescription>Loading latest financial data...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error || !data) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Market Data</CardTitle>
          <CardDescription>Unable to load market data</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{error || "An unknown error occurred"}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Summary</CardTitle>
        <CardDescription>Live financial market data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(data.marketSummary).map(([key, { value, change }]) => (
            <div key={key} className="rounded-lg border p-3">
              <div className="text-sm font-medium uppercase text-muted-foreground">
                {key === "sp500" ? "S&P 500" : key === "nasdaq" ? "NASDAQ" : "Dow Jones"}
              </div>
              <div className="mt-1 flex items-baseline justify-between">
                <div className="text-2xl font-bold">{value.toLocaleString()}</div>
                <div className={`flex items-center ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {change >= 0 ? <ArrowUp className="mr-1 h-4 w-4" /> : <ArrowDown className="mr-1 h-4 w-4" />}
                  {Math.abs(change)}%
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-lg font-medium">Top Stocks</h3>
            <div className="space-y-2">
              {data.topStocks.map((stock) => (
                <div key={stock.symbol} className="flex items-center justify-between rounded-md border p-2">
                  <div className="font-medium">{stock.symbol}</div>
                  <div className="flex items-center gap-2">
                    <div>${stock.price.toLocaleString()}</div>
                    <div className={`flex items-center ${stock.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {stock.change >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                      {Math.abs(stock.change)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium">Cryptocurrencies</h3>
            <div className="space-y-2">
              {data.cryptoCurrencies.map((crypto) => (
                <div key={crypto.symbol} className="flex items-center justify-between rounded-md border p-2">
                  <div className="font-medium">{crypto.symbol}</div>
                  <div className="flex items-center gap-2">
                    <div>${crypto.price.toLocaleString()}</div>
                    <div className={`flex items-center ${crypto.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {crypto.change >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                      {Math.abs(crypto.change)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

