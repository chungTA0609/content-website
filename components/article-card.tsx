import Image from "next/image"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"

export interface ArticleCardProps {
    title: string
    image: string
    category: string
    author: string
    readTime: string
    className?: string
}

export function ArticleCard({ title, image, category, author, readTime, className = "" }: ArticleCardProps) {
    return (
        <Card className={`overflow-hidden ${className}`}>
            <div className="relative h-48">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                />
                <Badge className="absolute left-3 top-3">{category}</Badge>
            </div>
            <CardHeader className="p-4">
                <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
            </CardHeader>
            <CardFooter className="flex items-center justify-between p-4 pt-0">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="h-3 w-3" />
                    <span>{author}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{readTime}</span>
                </div>
            </CardFooter>
        </Card>
    )
}

