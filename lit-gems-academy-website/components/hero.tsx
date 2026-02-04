import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, BookOpen, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-ivory overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-lavender/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-lavender/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-lavender text-purple px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            Online One-on-One Tutoring
          </div>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-purple mb-6 text-balance">
            Helping Young Minds Shine
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
            One-on-one online tutoring designed to build confidence and strong academic foundations for students from Grade 1 to Grade 12.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-purple hover:bg-purple-dark text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="#pricing">Check Pricing</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-purple text-purple hover:bg-purple hover:text-white font-semibold px-8 py-6 text-lg transition-all bg-transparent"
            >
              <Link href="#booking">Book a Session</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center justify-center gap-8 text-charcoal/70">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple" />
                <span className="text-sm font-medium">60-Minute Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold fill-gold" />
                <span className="text-sm font-medium">100% WAEC Pass Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple" />
                <span className="text-sm font-medium">Personalized Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
