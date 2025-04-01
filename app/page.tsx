import { MarketData } from "@/components/market-data"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturedArticlesSection } from "@/components/sections/featured-articles-section"
import { ExpertProfileSection } from "@/components/sections/expert-profile-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PremiumContentSection } from "@/components/sections/premium-content-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"
import { FooterSection } from "@/components/sections/footer-section"
import { FadeInSection } from "@/components/fade-in-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section - No animation for the first section */}
      <HeroSection />

      {/* Market Data Section */}
      <FadeInSection animation="fade-up">
        <section className="container mx-auto px-4 py-8">
          <MarketData />
        </section>
      </FadeInSection>

      {/* Featured Articles Section */}
      <FadeInSection delay={100} animation="fade-up">
        <FeaturedArticlesSection />
      </FadeInSection>

      {/* Expert Profile Section */}
      <FadeInSection delay={150} animation="fade-left">
        <ExpertProfileSection />
      </FadeInSection>

      {/* Testimonials Section */}
      <FadeInSection delay={200} animation="fade-up">
        <TestimonialsSection />
      </FadeInSection>

      {/* Premium Content Section */}
      <FadeInSection delay={250} animation="fade-right">
        <PremiumContentSection />
      </FadeInSection>

      {/* Partners Section */}
      <FadeInSection delay={300} animation="fade-in">
        <PartnersSection />
      </FadeInSection>

      {/* Newsletter Section */}
      <FadeInSection delay={350} animation="fade-up">
        <NewsletterSection />
      </FadeInSection>

      {/* Footer - No animation for the footer */}
      <FooterSection />
    </div>
  )
}

