import React from "react"
import Link from "next/link"
import { Eye, Target, CheckCircle2 } from "lucide-react"

export function VisionMission() {
  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] bg-gray-200 overflow-hidden">
        <img 
          src="/campus3.webp" 
          alt="Campus Building" 
          className="w-full h-full object-cover object-center block"
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Breadcrumb Overlay */}
        <div className="absolute bottom-0 left-0 lg:left-24 flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-tr-xl z-10">
          <nav className="flex text-sm font-semibold text-gray-500 tracking-wide">
            <Link href="/" className="text-[#3B82F6] hover:text-[#003366] transition-colors uppercase">Home</Link>
            <span className="mx-2">|</span>
            <span className="uppercase text-gray-500 hover:text-[#003366] transition-colors cursor-pointer">About Us</span>
            <span className="mx-2">/</span>
            <span className="uppercase text-gray-400">Vision & Mission</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#3B82F6] font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Our Goals
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase text-[#003366] mb-6">
            Vision & Mission
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            Guiding our pursuit of excellence in education, innovation, and social responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Vision */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye className="w-32 h-32 text-[#3B82F6]" />
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#3B82F6]">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="font-sans text-3xl font-black text-[#003366] uppercase tracking-wide">
                Our Vision
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed relative z-10">
              DBIT will be known to have an innovative, enjoyable and holistic learning environment that transforms individuals into socially conscious citizens the Don Bosco way, and will lead in research and entrepreneurship in the area of sustainable technologies.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#003366] rounded-3xl p-10 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target className="w-32 h-32 text-white" />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="font-sans text-3xl font-black text-white uppercase tracking-wide">
                Our Mission
              </h2>
            </div>

            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4 text-blue-50 text-lg leading-relaxed">
                <CheckCircle2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                <span>To create future engineers who work with honesty and integrity and excel in the use of technology for the benefit of the underprivileged.</span>
              </li>
              <li className="flex items-start gap-4 text-blue-50 text-lg leading-relaxed">
                <CheckCircle2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                <span>To train engineers to be innovative problem solvers and entrepreneurs who engages in research and life-long learning.</span>
              </li>
              <li className="flex items-start gap-4 text-blue-50 text-lg leading-relaxed">
                <CheckCircle2 className="w-6 h-6 text-[#3B82F6] flex-shrink-0 mt-1" />
                <span>To provide a diverse and stimulating environment for staff and students to grow holistically.</span>
              </li>
            </ul>
          </div>

        </div>

      </section>
    </div>
  )
}
