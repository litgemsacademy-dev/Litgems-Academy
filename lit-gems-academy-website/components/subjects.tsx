import { Calculator, BookCheck, Sparkles } from "lucide-react"

export function Subjects() {
  const subjects = [
    {
      icon: Calculator,
      title: "Mathematics",
      description: "From basic arithmetic to advanced algebra, geometry, and beyond. Building strong mathematical foundations for every grade level.",
      available: true
    },
    {
      icon: BookCheck,
      title: "Homework Support",
      description: "Dedicated assistance with math homework, assignments, and exam preparation to reinforce classroom learning.",
      available: true
    }
  ]

  return (
    <section id="subjects" className="py-16 md:py-24 bg-lavender/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-purple mb-4">
              Subjects Offered
            </h2>
            <p className="text-charcoal/70 max-w-xl mx-auto">
              Currently specializing in Mathematics with dedicated homework support.
            </p>
          </div>

          {/* Subject Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {subjects.map((subject) => (
              <div
                key={subject.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-purple/20 transition-all group"
              >
                <div className="w-16 h-16 bg-lavender rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple transition-colors">
                  <subject.icon className="w-8 h-8 text-purple group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-charcoal mb-3">
                  {subject.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed text-sm">
                  {subject.description}
                </p>
                {subject.available && (
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-purple font-medium">
                    <Sparkles className="w-4 h-4 text-gold" />
                    Now Available
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-white rounded-xl p-6 border border-border text-center">
            <p className="text-charcoal/70 text-sm">
              <span className="font-semibold text-purple">Note:</span> Math is currently our main subject. 
              Additional subjects will be introduced as LitGems Academy grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
