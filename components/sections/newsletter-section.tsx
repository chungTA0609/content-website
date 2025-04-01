import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">Subscribe to Our Financial Newsletter</h2>
          <p className="mt-4 text-gray-300">
            Get weekly market insights, investment tips, and exclusive financial opportunities directly to your inbox
          </p>

          <div className="mt-8 flex">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="rounded-r-none bg-white/10 text-white placeholder:text-gray-400 focus-visible:ring-primary"
            />
            <Button className="rounded-l-none">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

