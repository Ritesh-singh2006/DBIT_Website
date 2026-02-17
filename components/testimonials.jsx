"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "As parents, we are immensely proud of our child's journey at DBIT. The college's strong emphasis on real-time projects has significantly enhanced their problem-solving skills and technical acumen. The dedication of the faculty and supportive learning environment have been instrumental in shaping our child's future.",
    author: "Girjashankar Pandey",
    role: "Parent of Ravishankar Pandey",
    department: "Information Technology",
  },
  {
    quote:
      "During my time at DBIT, I was given numerous opportunities to learn and grow under the guidance of expert professors. Their mentorship was instrumental in my success at both national (SIH) and international (AIH) hackathons. The supportive environment helped me secure a position in a reputable organization.",
    author: "Afif Ahmed Shaikh",
    role: "Alumni",
    department: "Information Technology",
  },
  {
    quote:
      "The four years I spent at DBIT were transformative. From the beginning to the end, I experienced tremendous personal and professional growth. DBIT's excellent placement opportunities helped me secure a position at a top-tier company as a fresher. Once I started working, I found myself outperforming everyone else.",
    author: "Ismeet Kaur",
    role: "Alumni",
    department: "Information Technology",
  },
  {
    quote:
      "Engineering isn't just a degree - the education and values imparted at DBIT were foundational in making us well-rounded engineers ready to hit the ground running. The faculty always encouraged holistic individual development, not just academic success.",
    author: "Omkar Kadam",
    role: "Alumni",
    department: "Information Technology",
  },
  {
    quote:
      "My time at DBIT has been a transformative experience. As the Public Relations Head of CSI, I honed my leadership and communication skills. I am especially grateful for the encouragement from our dedicated teachers who motivated us to participate in hackathons and technical competitions.",
    author: "Jevina V.",
    role: "Alumni",
    department: "Information Technology",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold tracking-wider uppercase mb-2">
            Student Voices
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Community Says
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg">
              <Quote className="h-8 w-8" />
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-muted rounded-3xl p-8 sm:p-12 pt-16 text-center">
            <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-8">
              {`"${testimonials[currentIndex].quote}"`}
            </blockquote>

            <div className="mb-8">
              <p className="font-sans text-xl font-bold text-primary">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-muted-foreground">
                {testimonials[currentIndex].role}
              </p>
              <p className="text-secondary font-medium text-sm">
                {testimonials[currentIndex].department}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-border hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-secondary w-6"
                        : "bg-border w-2"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-border hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
