import { NextResponse } from "next/server"

// Example of using Node.js 20 features for financial data API
export async function GET() {
  try {
    // Using the built-in fetch API (available in Node.js 20)
    // This is a placeholder - in a real app you would fetch from a financial API
    const mockData = {
      marketSummary: {
        sp500: { value: 5123.45, change: 0.75 },
        nasdaq: { value: 16789.32, change: 1.25 },
        dowJones: { value: 38567.12, change: 0.45 },
      },
      topStocks: [
        { symbol: "AAPL", price: 187.32, change: 1.2 },
        { symbol: "MSFT", price: 415.67, change: 0.8 },
        { symbol: "GOOGL", price: 142.89, change: -0.3 },
        { symbol: "AMZN", price: 178.45, change: 2.1 },
      ],
      cryptoCurrencies: [
        { symbol: "BTC", price: 68234.56, change: 3.2 },
        { symbol: "ETH", price: 3456.78, change: 2.5 },
        { symbol: "SOL", price: 123.45, change: 5.7 },
      ],
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    return NextResponse.json(mockData)
  } catch (error) {
    console.error("Error fetching market data:", error)
    return NextResponse.json({ error: "Failed to fetch market data" }, { status: 500 })
  }
}

