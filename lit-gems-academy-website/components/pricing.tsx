import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star, Sparkles } from "lucide-react"

export function Pricing() {
  const pricingTiers = [
    { grade: "Grade 1–3", perClass: "$7.50", monthly: "$60", popular: false },
    { grade: "Grade 4–6", perClass: "$10", monthly: "$80", popular: false },
    { grade: "Grade 7", perClass: "$12.50", monthly: "$100", popular: false },
    { grade: "Grade 8", perClass: "$15", monthly: "$120", popular: true },
    { grade: "Grade 9", perClass: "$17.50", monthly: "$140", popular: false },
    { grade: "Grade 10", perClass: "$20", monthly: "$160", popular: false },
    { grade: "Grade 11", perClass: "$22.50", monthly: "$180", popular: false },
    { grade: "Grade 12", perClass: "$25", monthly: "$200", popular: false },
  ]

  const benefits = [
    "2 classes per week (8 classes/month)",
    "60 minutes per session",
    "Personalized learning plan",
    "Progress tracking",
    "Flexible scheduling"
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-white/80 max-w-xl mx-auto">
              Monthly rates based on 2 classes per week (8 classes/month, 60 minutes each)
            </p>
          </div>

          {/* Top CTA */}
          <div className="text-center mb-10">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-6 text-lg shadow-lg"
            >
              <Link href="#booking">Book a Session</Link>
            </Button>
          </div>

          {/* Pricing Table - Desktop */}
          <div className="hidden md:block bg-white rounded-2xl overflow-hidden shadow-xl mb-8">
            <div className="grid grid-cols-3 bg-lavender text-charcoal font-semibold">
              <div className="p-4 text-center">Grade Level</div>
              <div className="p-4 text-center">Per Class</div>
              <div className="p-4 text-center">Monthly Rate</div>
            </div>
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.grade}
                className={`grid grid-cols-3 border-t border-border ${
                  tier.popular ? "bg-lavender/30" : index % 2 === 0 ? "bg-white" : "bg-ivory/50"
                }`}
              >
                <div className="p-4 text-center font-medium text-charcoal flex items-center justify-center gap-2">
                  {tier.grade}
                  {tier.popular && (
                    <span className="text-xs bg-gold text-charcoal px-2 py-0.5 rounded-full font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <div className="p-4 text-center text-charcoal/70">{tier.perClass}</div>
                <div className="p-4 text-center font-bold text-purple text-lg">{tier.monthly}</div>
              </div>
            ))}
          </div>

          {/* Pricing Cards - Mobile */}
          <div className="md:hidden space-y-4 mb-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.grade}
                className={`bg-white rounded-xl p-5 shadow-lg ${
                  tier.popular ? "ring-2 ring-gold" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-charcoal">{tier.grade}</h3>
                  {tier.popular && (
                    <span className="text-xs bg-gold text-charcoal px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-4">
                  <div>
                    <p className="text-2xl font-bold text-purple">{tier.monthly}</p>
                    <p className="text-xs text-charcoal/60">per month</p>
                  </div>
                  <div className="text-charcoal/60 text-sm">
                    {tier.perClass} per class
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white mb-4 text-center">
              Every Plan Includes
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-white/90 text-sm">
                  <Check className="w-4 h-4 text-gold" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Special Discount Note */}
          <div className="bg-gold/20 backdrop-blur-sm rounded-xl p-6 text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-gold" />
              <p className="text-white font-semibold">Special Offers Available</p>
            </div>
            <p className="text-white/80 text-sm">
              Discounts for early birds and multiple siblings. Introductory rates for early enrollment.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-10 py-6 text-lg shadow-lg"
            >
              <Link href="#booking">Book a Session Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
