"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, FileText, Upload } from "lucide-react"

// Sample data files
const dataFiles = [
  { id: 1, name: "S&P 500 Historical Data.csv", size: "2.4 MB", date: "2023-12-15", category: "stocks" },
  { id: 2, name: "NASDAQ Composite Index.xlsx", size: "1.8 MB", date: "2023-12-10", category: "stocks" },
  { id: 3, name: "Dow Jones Industrial Average.csv", size: "3.1 MB", date: "2023-12-05", category: "stocks" },
  { id: 4, name: "Gold Price Historical Data.csv", size: "1.5 MB", date: "2023-11-28", category: "commodities" },
  { id: 5, name: "Silver Price Historical Data.xlsx", size: "1.2 MB", date: "2023-11-20", category: "commodities" },
  { id: 6, name: "Crude Oil WTI Futures.csv", size: "2.7 MB", date: "2023-11-15", category: "commodities" },
  { id: 7, name: "EUR/USD Exchange Rate.csv", size: "1.9 MB", date: "2023-11-10", category: "forex" },
  { id: 8, name: "GBP/USD Exchange Rate.xlsx", size: "1.6 MB", date: "2023-11-05", category: "forex" },
  { id: 9, name: "Bitcoin Historical Data.csv", size: "3.5 MB", date: "2023-10-30", category: "crypto" },
  { id: 10, name: "Ethereum Historical Data.xlsx", size: "2.8 MB", date: "2023-10-25", category: "crypto" },
]

export default function DataFilesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredFiles = dataFiles.filter((file) => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeTab === "all" || file.category === activeTab
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Financial Data Files</h1>
        <p className="text-muted-foreground">Download and upload financial data files for analysis</p>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="search">Search Files</Label>
          <Input
            id="search"
            placeholder="Search by filename..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-end">
          <Button className="ml-auto">
            <Upload className="mr-2 h-4 w-4" />
            Upload New File
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Files</TabsTrigger>
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="commodities">Commodities</TabsTrigger>
          <TabsTrigger value="forex">Forex</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
        </TabsList>

        <Card>
          <CardHeader>
            <CardTitle>Available Data Files</CardTitle>
            <CardDescription>
              {filteredFiles.length} file{filteredFiles.length !== 1 ? "s" : ""} found
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Date Added</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFiles.length > 0 ? (
                  filteredFiles.map((file) => (
                    <TableRow key={file.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          {file.name}
                        </div>
                      </TableCell>
                      <TableCell>{file.size}</TableCell>
                      <TableCell>{file.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="h-24 text-center">
                      No files found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">Files are available in CSV and Excel formats</p>
          </CardFooter>
        </Card>
      </Tabs>
    </div>
  )
}

