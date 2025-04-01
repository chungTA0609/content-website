import Image from "next/image"
import { MEDIA_PARTNERS } from "@/lib/constants"

export function PartnersSection() {
  return (
    <section className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
          {MEDIA_PARTNERS.map((partner) => (
            <div key={partner} className="flex h-12 items-center justify-center">
              <Image
                src={`/placeholder.svg?height=50&width=150&text=${partner}`}
                alt={partner}
                width={150}
                height={50}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

