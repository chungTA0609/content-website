"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer } from "@/components/ui/chart"
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

interface ChartData {
  name: string
  [key: string]: string | number
}

interface ChartComponentProps {
  title: string
  description?: string
  data: ChartData[]
  series: {
    name: string
    key: string
    color: string
  }[]
  timeRanges?: {
    label: string
    value: string
    data: ChartData[]
  }[]
}

export default function ChartComponent({
  title,
  description,
  data: initialData,
  series,
  timeRanges,
}: ChartComponentProps) {
  const [chartType, setChartType] = useState("line")
  const [data, setData] = useState(initialData)

  const handleTimeRangeChange = (value: string) => {
    const selectedRange = timeRanges?.find((range) => range.value === value)
    if (selectedRange) {
      setData(selectedRange.data)
    }
  }

  // Create config object for ChartContainer
  const chartConfig = series.reduce(
    (acc, series) => {
      acc[series.key] = {
        label: series.name,
        color: series.color,
      }
      return acc
    },
    {} as Record<string, { label: string; color: string }>,
  )

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          <div className="flex items-center gap-2">
            {timeRanges && (
              <Select onValueChange={handleTimeRangeChange} defaultValue={timeRanges[0].value}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Time Range" />
                </SelectTrigger>
                <SelectContent>
                  {timeRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            <Tabs defaultValue="line" onValueChange={setChartType}>
              <TabsList className="grid w-[180px] grid-cols-3">
                <TabsTrigger value="line">Line</TabsTrigger>
                <TabsTrigger value="bar">Bar</TabsTrigger>
                <TabsTrigger value="area">Area</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "line" ? (
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {series.map((s) => (
                  <Line key={s.key} type="monotone" dataKey={s.key} stroke={`var(--color-${s.key})`} name={s.name} />
                ))}
              </LineChart>
            ) : chartType === "bar" ? (
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {series.map((s) => (
                  <Bar key={s.key} dataKey={s.key} fill={`var(--color-${s.key})`} name={s.name} />
                ))}
              </BarChart>
            ) : (
              <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {series.map((s) => (
                  <Area
                    key={s.key}
                    type="monotone"
                    dataKey={s.key}
                    fill={`var(--color-${s.key})`}
                    stroke={`var(--color-${s.key})`}
                    name={s.name}
                  />
                ))}
              </AreaChart>
            )}
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

