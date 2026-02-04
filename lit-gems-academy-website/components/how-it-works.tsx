import { Search, FileText, MessageCircle, Gift } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Check Pricing",
      description: "Review our transparent pricing based on your child's grade level. Monthly rates make budgeting easy."
    },
    {
      icon: FileText,
      number: "02",
      title: "Fill Booking Form",
      description: "Complete our simple enrollment form with your child's details, preferred schedule, and subject needs."
    },
    {
      icon: MessageCircle,
      number: "03",
      title: "Connect & Confirm",
      description: "We'll reach out via WhatsApp or email to finalize scheduling and payment details."
    }
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-purple mb-4">
              How It Works
            </h2>
            <p className="text-charcoal/70 max-w-xl mx-auto">
              Getting started with LitGems Academy is simple and straightforward.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden md:block absolute top-24 left-[16.5%] right-[16.5%] h-0.5 bg-lavender" />
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  {/* Step Number Badge */}
                  <div className="relative z-10 w-20 h-20 bg-white rounded-2xl shadow-lg border border-border mx-auto mb-6 flex items-center justify-center group hover:bg-purple transition-colors">
                    <step.icon className="w-8 h-8 text-purple group-hover:text-white transition-colors" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-gold text-charcoal text-xs font-bold rounded-full flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trial Session Note */}
          <div className="mt-12 bg-lavender/50 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-purple" />
              <p className="font-semibold text-purple">Optional Trial Session</p>
            </div>
            <p className="text-charcoal/70 text-sm max-w-lg mx-auto">
              After booking, parents can choose a 20-minute trial session before making full payment — 
              experience our teaching style first!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
