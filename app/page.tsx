import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Achievements } from "@/components/sections/achievements"
import { CallToAction } from "@/components/sections/call-to-action"
import { WorkStages } from "@/components/sections/work-stages"
import { WhyUs } from "@/components/sections/why-us"
import { FAQ } from "@/components/sections/faq"
import { Reviews } from "@/components/sections/reviews"
import { Tariffs } from "@/components/sections/tariffs"
import { ConsultationForm } from "@/components/sections/consultation-form"
import { Footer } from "@/components/sections/footer"

export default function BankruptcyLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Achievements />
      <CallToAction />
      <WorkStages />
      <WhyUs />
      <FAQ />
      <Reviews />
      <Tariffs />
      <ConsultationForm />
      <Footer />
    </div>
  )
}
