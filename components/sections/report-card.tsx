import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export interface ReportCardProps {
    title: string
    image: string
    price: string
    discount?: string
    className?: string
}

export function ReportCard({ title, image, price, discount, className = "" }: ReportCardProps) {
    return (
        <Card className={`overflow-hidden ${className}`}>
            <div className="relative">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                />
                {discount && (
                    <div className="absolute right-2 top-2 rounded bg-primary px-2 py-1 text-xs font-bold text-white">
                        {discount}
                    </div>
                )}
            </div>
            <CardHeader className="p-4">
                <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
                <CardDescription>Premium Financial Report</CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center justify-between p-4 pt-0">
                <div className="text-lg font-bold">{price}</div>
                <Button size="sm">Purchase</Button>
            </CardFooter>
        </Card>
    )
}