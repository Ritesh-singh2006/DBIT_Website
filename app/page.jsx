import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Courses } from "@/components/courses"
import { Facilities } from "@/components/facilities"
import { Recruiters } from "@/components/recruiters"
import { Events } from "@/components/events"
import { StudentBodies } from "@/components/student-bodies"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Courses />
      <Recruiters />
      <Facilities />
      <Events />
      <StudentBodies />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
