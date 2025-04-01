import { NextResponse } from "next/server"
import { MOCK_MARKET_DATA } from "@/lib/constants"

export async function GET() {
  // In a real application, this would fetch data from a financial API
  // For demonstration purposes, we're returning mock data
  return NextResponse.json(MOCK_MARKET_DATA)
}