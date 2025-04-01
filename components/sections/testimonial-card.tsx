import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export interface TestimonialCardProps {
    name: string
    role: string
    image: string
    quote: string
    className?: string
}

export function TestimonialCard({ name, role, image, quote, className = "" }: TestimonialCardProps) {
    return (
        <Card className={`flex flex-col ${className}`}>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={name}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div>
                    <CardTitle className="text-base">{name}</CardTitle>
                    <CardDescription>{role}</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex gap-1 pb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                </div>
                <p className="text-sm text-muted-foreground">{quote}</p>
            </CardContent>
        </Card>
    )
}

