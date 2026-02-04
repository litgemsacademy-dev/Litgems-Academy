import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Subjects } from "@/components/subjects"
import { GradeLevels } from "@/components/grade-levels"
import { Pricing } from "@/components/pricing"
import { HowItWorks } from "@/components/how-it-works"
import { BookingForm } from "@/components/booking-form"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Subjects />
      <GradeLevels />
      <Pricing />
      <HowItWorks />
      <BookingForm />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
