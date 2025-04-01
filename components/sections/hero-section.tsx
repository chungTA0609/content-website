import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[500px] w-full">
      <Image
        src="/placeholder.svg?height=1000&width=2000"
        alt="Finance Hero"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Discover the world of <span className="text-primary-foreground">financial freedom</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-200">
          Expert insights, market analysis, and investment strategies to help you build wealth
        </p>
        <div className="mt-8 flex items-center gap-4">
          <Button size="lg" className="gap-2">
            Explore Articles <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-black/30 text-white hover:bg-black/50">
            <Play className="h-4 w-4" /> Watch Market Analysis
          </Button>
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 bg-black/50 p-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="h-16 w-24 cursor-pointer overflow-hidden rounded">
            <Image
              src={`/placeholder.svg?height=100&width=150&text=Finance${item}`}
              alt={`Thumbnail ${item}`}
              width={150}
              height={100}
              className="h-full w-full object-cover transition-transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

