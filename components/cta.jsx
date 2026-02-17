import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-secondary font-semibold tracking-wider uppercase mb-4">
              Start Your Journey
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Shape Your Future?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Join DBIT and become part of a community that nurtures talent,
              fosters innovation, and prepares you for a successful career.
              Applications for 2025-26 are now open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
              >
                Apply for Admission{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Request Information
              </Button>
            </div>
          </div>

          {/* Right Content - Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Campus Tour",
                description: "Schedule a visit to explore our campus",
              },
              {
                title: "Scholarships",
                description: "Learn about financial aid options",
              },
              {
                title: "Fee Structure",
                description: "View detailed fee information",
              },
              {
                title: "Contact Us",
                description: "Get in touch with admissions team",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer"
              >
                <h3 className="font-sans text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
