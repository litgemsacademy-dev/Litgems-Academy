import { CheckCircle2, Clock, Users, Award, Heart } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Users,
      title: "Personalized 1-on-1 Instruction",
      description: "Every session is tailored to your child's unique learning style and pace."
    },
    {
      icon: Clock,
      title: "60-Minute Focused Sessions",
      description: "Each class is designed to maximize learning without overwhelming young minds."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "100% WAEC pass rate in physical classes with 2.5+ years of combined teaching experience."
    },
    {
      icon: Heart,
      title: "Supportive Learning Environment",
      description: "A warm, patient approach that builds confidence alongside academic skills."
    }
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-purple mb-4">
              About LitGems Academy
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              We provide online, teacher-led tutoring that transforms learning into an enjoyable journey. 
              Our approach is designed to support students across different grades and learning abilities.
            </p>
          </div>

          {/* Experience Highlights */}
          <div className="bg-lavender rounded-2xl p-6 md:p-8 mb-12">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-purple mb-4 text-center">
              Our Experience
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-purple mb-1">1.5+</p>
                <p className="text-charcoal/70 text-sm">Years Physical Teaching (Primary 1 – SS3)</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple mb-1">1+ Year</p>
                <p className="text-charcoal/70 text-sm">Online Tutoring Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold mb-1">100%</p>
                <p className="text-charcoal/70 text-sm">WAEC Pass Rate in Physical Classes</p>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-ivory rounded-xl p-6 border border-border hover:border-purple/20 hover:shadow-md transition-all"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-lavender rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-semibold text-charcoal mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-charcoal/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-charcoal/70">
              <CheckCircle2 className="w-5 h-5 text-purple" />
              <p className="text-sm">
                Designed to support students across different grades and learning abilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
