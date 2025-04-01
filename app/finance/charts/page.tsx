"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download, ZoomIn, ZoomOut } from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

// Sample data for charts
const stockData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
  { name: "Jul", value: 1000 },
  { name: "Aug", value: 1200 },
  { name: "Sep", value: 1100 },
  { name: "Oct", value: 1300 },
  { name: "Nov", value: 1500 },
  { name: "Dec", value: 1400 },
]

const commodityData = [
  { name: "Jan", gold: 1800, silver: 25, oil: 60 },
  { name: "Feb", gold: 1850, silver: 27, oil: 62 },
  { name: "Mar", gold: 1900, silver: 26, oil: 65 },
  { name: "Apr", gold: 1950, silver: 28, oil: 64 },
  { name: "May", gold: 1920, silver: 27, oil: 63 },
  { name: "Jun", gold: 1880, silver: 26, oil: 66 },
  { name: "Jul", gold: 1860, silver: 25, oil: 68 },
  { name: "Aug", gold: 1900, silver: 24, oil: 70 },
  { name: "Sep", gold: 1950, silver: 26, oil: 72 },
  { name: "Oct", gold: 2000, silver: 28, oil: 75 },
  { name: "Nov", gold: 2050, silver: 30, oil: 73 },
  { name: "Dec", gold: 2100, silver: 32, oil: 70 },
]

export default function ChartsPage() {
  const [timeframe, setTimeframe] = useState("1y")
  const [zoomLevel, setZoomLevel] = useState(1)

  const handleZoomIn = () => {
    if (zoomLevel < 2) setZoomLevel(zoomLevel + 0.25)
  }

  const handleZoomOut = () => {
    if (zoomLevel > 0.5) setZoomLevel(zoomLevel - 0.25)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Financial Charts</h1>
        <p className="text-muted-foreground">Interactive price charts and financial data visualization</p>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-4">
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1m">1 Month</SelectItem>
            <SelectItem value="3m">3 Months</SelectItem>
            <SelectItem value="6m">6 Months</SelectItem>
            <SelectItem value="1y">1 Year</SelectItem>
            <SelectItem value="5y">5 Years</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="outline" className="ml-auto">
          <Download className="mr-2 h-4 w-4" />
          Download Data
        </Button>
      </div>

      <Tabs defaultValue="stocks">
        <TabsList className="mb-6">
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="commodities">Commodities</TabsTrigger>
          <TabsTrigger value="forex">Forex</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
        </TabsList>

        <TabsContent value="stocks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>S&P 500 Index</CardTitle>
              <CardDescription>Historical price movement of the S&P 500 index</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ height: `${400 * zoomLevel}px` }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trading Volume</CardTitle>
              <CardDescription>Monthly trading volume for major indices</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ height: `${400 * zoomLevel}px` }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="commodities" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Precious Metals</CardTitle>
              <CardDescription>Gold and Silver price trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ height: `${400 * zoomLevel}px` }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={commodityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="gold" stroke="#FFD700" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="silver" stroke="#C0C0C0" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Oil Prices</CardTitle>
              <CardDescription>Crude oil price movement</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ height: `${400 * zoomLevel}px` }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={commodityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="oil" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forex">
          <Card>
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
              <CardDescription>Forex data will be available soon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We're working on adding comprehensive forex data and charts.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crypto">
          <Card>
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
              <CardDescription>Cryptocurrency data will be available soon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're working on adding comprehensive cryptocurrency data and charts.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

