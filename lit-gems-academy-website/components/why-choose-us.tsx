import { 
  Users, 
  Clock, 
  Award, 
  Heart, 
  Target, 
  Shield,
  Star
} from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: "One-on-One Online Tutoring",
      description: "Dedicated, personalized attention for your child in every session."
    },
    {
      icon: Clock,
      title: "60-Minute Focused Sessions",
      description: "Optimal session length to maintain engagement without fatigue."
    },
    {
      icon: Award,
      title: "Experienced & Dedicated Tutor",
      description: "Over 2.5 years of combined physical and online teaching experience."
    },
    {
      icon: Target,
      title: "Personalized Learning Plans",
      description: "Curriculum tailored to your child's unique needs and learning pace."
    },
    {
      icon: Heart,
      title: "Supportive, Confidence-Building Approach",
      description: "A warm environment that encourages questions and celebrates progress."
    },
    {
      icon: Shield,
      title: "Limited Slots for Quality",
      description: "We maintain small numbers to ensure every student gets our best."
    },
  ]

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-purple mb-4">
              Why Choose LitGems Academy?
            </h2>
            <p className="text-charcoal/70 max-w-xl mx-auto">
              We&apos;re dedicated to providing exceptional tutoring that makes a real difference.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-ivory rounded-xl p-6 border border-border hover:border-purple/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-lavender rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple transition-colors">
                  <reason.icon className="w-6 h-6 text-purple group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-charcoal mb-2">
                  {reason.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Track Record Highlight */}
          <div className="bg-purple rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-6 h-6 text-gold fill-gold" />
              <Star className="w-6 h-6 text-gold fill-gold" />
              <Star className="w-6 h-6 text-gold fill-gold" />
              <Star className="w-6 h-6 text-gold fill-gold" />
              <Star className="w-6 h-6 text-gold fill-gold" />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-2">
              100% WAEC Pass Rate
            </h3>
            <p className="text-white/80 max-w-lg mx-auto">
              Our record in physical classes speaks for itself. We bring the same dedication 
              and proven methods to every online session.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
