import { GraduationCap } from "lucide-react"

export function GradeLevels() {
  const grades = [
    {
      range: "Grade 1 – 3",
      equivalent: "Primary 1–3 / US/UK Grades 1–3",
      description: "Building foundational math skills with engaging, age-appropriate methods."
    },
    {
      range: "Grade 4 – 6",
      equivalent: "Primary 4–6 / US/UK Grades 4–6",
      description: "Strengthening core concepts and preparing for more advanced mathematics."
    },
    {
      range: "Grade 7 – 9",
      equivalent: "JSS 1–3 / US/UK Grades 7–9",
      description: "Tackling algebra, geometry, and building problem-solving skills."
    },
    {
      range: "Grade 10 – 12",
      equivalent: "SS 1–3 / US/UK Grades 10–12",
      description: "Advanced math preparation including exam readiness for WAEC and beyond."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-purple mb-4">
              Grade Levels Supported
            </h2>
            <p className="text-charcoal/70 max-w-xl mx-auto">
              From Primary 1 to SS3 — we support students at every stage of their academic journey.
            </p>
          </div>

          {/* Grade Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {grades.map((grade, index) => (
              <div
                key={grade.range}
                className="bg-ivory rounded-xl p-6 border border-border hover:border-purple/30 hover:shadow-md transition-all text-center group"
              >
                <div className="w-14 h-14 bg-lavender rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple transition-colors">
                  <GraduationCap className="w-7 h-7 text-purple group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-charcoal mb-2">
                  {grade.range}
                </h3>
                <p className="text-xs text-purple/70 font-medium mb-3">
                  {grade.equivalent}
                </p>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {grade.description}
                </p>
              </div>
            ))}
          </div>

          {/* International Note */}
          <div className="mt-10 text-center">
            <p className="text-sm text-charcoal/60 bg-lavender/50 inline-block px-6 py-3 rounded-full">
              Supporting students following Nigerian, US, UK, and international curricula
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
