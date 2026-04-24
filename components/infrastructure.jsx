import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const infraImages = [
  {
    src: "https://www.dbit.in/images/pdf/naac/infra/2022/image-000.jpg",
    title: "Campus Entrance",
    description: "Welcoming and modern entrance to the Don Bosco Institute of Technology.",
  },
  {
    src: "https://www.dbit.in/images/pdf/naac/infra/2022/image-001.jpg",
    title: "Main Building",
    description: "The central hub for academics and administration.",
  },
  {
    src: "https://www.dbit.in/images/pdf/naac/infra/2022/image-002.jpg",
    title: "Advanced Laboratories",
    description: "State-of-the-art facilities equipped with modern tools.",
  },
  {
    src: "https://www.dbit.in/images/pdf/naac/infra/2022/image-003.jpg",
    title: "Computer Center",
    description: "High-performance computing resources for technical research.",
  },
  {
    src: "https://www.dbit.in/images/pdf/naac/infra/2022/image-004.jpg",
    title: "Library",
    description: "A vast collection of reference materials and comfortable reading spaces.",
  },
  {
    src: "https://www.dbit.in/images/pdf/naac/infra/2022/image-005.jpg",
    title: "Seminar Hall",
    description: "Spacious halls for workshops, guest lectures, and events.",
  },
]

export function Infrastructure() {
  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] bg-gray-200 overflow-hidden">
        <img 
          src="/campus3.webp" 
          alt="Campus Building" 
          className="w-full h-full object-cover object-center block"
        />
        {/* Breadcrumb Overlay */}
        <div className="absolute bottom-0 left-0 lg:left-24 flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-tr-xl">
          <nav className="flex text-sm font-semibold text-gray-500 tracking-wide">
            <Link href="/" className="text-[#3B82F6] hover:text-[#003366] transition-colors uppercase">Home</Link>
            <span className="mx-2">|</span>
            <span className="uppercase text-gray-500 hover:text-[#003366] transition-colors cursor-pointer">About Us</span>
            <span className="mx-2">/</span>
            <span className="uppercase text-gray-400">College Links</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#3B82F6] font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Discover Our Campus
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase text-[#003366] mb-6">
            Campus Infrastructure
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Take a virtual tour of our state-of-the-art facilities, designed to foster innovation, 
            learning, and holistic development for all our students.
          </p>
        </div>

        {/* 3-Column Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infraImages.map((img, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Content Section */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {img.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {img.description}
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center text-[#E3342F] font-medium text-sm hover:text-red-700 transition-colors"
                >
                  Learn more 
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
