// "use client"

// import { useState } from "react"
// import { Calendar, ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const events = [
//   {
//     title: "Colosseum",
//     category: "Technical Fest",
//     type: "technical",
//     description:
//       "Annual technical festival featuring coding competitions, hackathons, robotics challenges, and tech talks by industry experts.",
//     image: "/colo2.jpg",
//     date: "March 2025",
//   },
//   {
//     title: "Euphoria",
//     category: "Cultural Fest",
//     type: "cultural",
//     description:
//       "The biggest cultural extravaganza with music, dance, drama, art exhibitions, and celebrity performances.",
//     image: "/hysteria.png",
//     date: "February 2025",
//   },
//   {
//     title: "Innoquest",
//     category: "Project Exhibition",
//     type: "technical",
//     description:
//       "Annual BE project exhibition showcasing innovative student projects to industry professionals and academicians.",
//     image: "/innoquest.png",
//     date: "April 2025",
//   },
//   {
//     title: "Department Day",
//     category: "Academic Event",
//     type: "cultural",
//     description:
//       "Celebrating departmental achievements with technical presentations, alumni talks, and cultural performances.",
//     image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
//     date: "Various",
//   },
//   {
//     title: "Engineer's Day",
//     category: "Industry Connect",
//     type: "technical",
//     description:
//       "Special sessions with industry experts, technical workshops, and inspiring talks from successful engineers.",
//     image: "/engday.png",
//     date: "September 2025",
//   },
//   {
//     title: "Mix and Match",
//     category: "Council Event",
//     type: "cultural",
//     description:
//       "Fun-filled event organized by the student council featuring games, competitions, and team building activities.",
//     image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=800&auto=format&fit=crop",
//     date: "November 2025",
//   },
// ]

// const filters = ["all", "technical", "cultural"]

// export function Events() {
//   const [activeFilter, setActiveFilter] = useState("all")

//   const filteredEvents =
//     activeFilter === "all"
//       ? events
//       : events.filter((event) => event.type === activeFilter)

//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//        {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               {/* Decorative Yellow Bar */}
//               <span className="w-12 h-[3px] bg-[#FFD700] rounded-full"></span>
//               <p className="text-[#0056b3] font-bold tracking-[0.2em] uppercase text-xs">
//                 Campus Activities
//               </p>
//             </div>
//             <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-[#003366] leading-tight">
//               Events at <span className="relative inline-block">
//                 DBIT
//                 <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#FFD700]/30 -z-10"></span>
//               </span>
//             </h2>
//             <p className="text-slate-500 max-w-xl text-lg leading-relaxed">
//               Experience a vibrant campus life with our diverse range of
//               technical and cultural events throughout the year.
//             </p>
//           </div>

//           {/* Filter Tabs - Redesigned for a "Pill" Aesthetic */}
//           <div className="flex bg-slate-200/50 p-1.5 rounded-2xl mt-8 md:mt-0 border border-slate-200 backdrop-blur-sm">
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
//                   activeFilter === filter
//                     ? "bg-white text-[#003366] shadow-md scale-[1.02]"
//                     : "text-slate-500 hover:text-[#003366] hover:bg-white/50"
//                 }`}
//               >
//                 {filter.charAt(0).toUpperCase() + filter.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Events Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredEvents.map((event) => (
//             <div
//               key={event.title}
//               className="group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl hover:border-[#0056b3]/30 transition-all duration-300"
//             >
//               {/* Image Overlay logic for color theme */}
//               <div className="relative h-48 overflow-hidden">
//                 <div
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//                   style={{ backgroundImage: `url('${event.image}')` }}
//                 />
//                 {/* Don Bosco Blue Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
//                 <div className="absolute top-4 left-4">
//                   <span className="inline-flex items-center rounded-md bg-[#0056b3] px-3 py-1 text-xs font-semibold text-white">
//                     {event.category}
//                   </span>
//                 </div>
//                 <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm font-medium">
//                   <Calendar className="h-4 w-4 text-white/80" />
//                   {event.date}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="font-sans text-xl font-bold text-[#003366] mb-2 group-hover:text-[#0056b3] transition-colors">
//                   {event.title}
//                 </h3>
//                 <p className="text-slate-600 text-sm leading-relaxed mb-4 min-h-[60px]">
//                   {event.description}
//                 </p>
//                 <Button
//                   variant="link"
//                   className="p-0 h-auto text-[#0056b3] hover:text-[#003366] font-bold group/link"
//                 >
//                   Learn More 
//                   <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Colosseum",
    category: "Technical Fest",
    type: "technical",
    description:
      "Annual technical festival featuring coding competitions, hackathons, robotics challenges, and tech talks by industry experts.",
    image: "/colo2.jpg",
    date: "March 2025",
  },
  {
    title: "Euphoria",
    category: "Cultural Fest",
    type: "cultural",
    description:
      "The biggest cultural extravaganza with music, dance, drama, art exhibitions, and celebrity performances.",
    image: "/hysteria.png",
    date: "February 2025",
  },
  {
    title: "Innovex",
    category: "Project Exhibition",
    type: "technical",
    description:
      "Annual BE project exhibition showcasing innovative student projects to industry professionals and academicians.",
    image: "/innoquest.png",
    date: "April 2025",
  },
  {
    title: "Department Day",
    category: "Academic Event",
    type: "cultural",
    description:
      "Celebrating departmental achievements with technical presentations, alumni talks, and cultural performances.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
    date: "Various",
  },
  {
    title: "Engineer's Day",
    category: "Industry Connect",
    type: "technical",
    description:
      "Special sessions with industry experts, technical workshops, and inspiring talks from successful engineers.",
    image: "/engday.png",
    date: "September 2025",
  },
  {
    title: "Mix and Match",
    category: "Council Event",
    type: "cultural",
    description:
      "Fun-filled event organized by the student council featuring games, competitions, and team building activities.",
    image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=800&auto=format&fit=crop",
    date: "November 2025",
  },
]

const filters = ["all", "technical", "cultural"]

export function Events() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((event) => event.type === activeFilter)

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[3px] bg-[#FFD700] rounded-full"></span>
              <p className="text-[#0056b3] font-bold tracking-[0.2em] uppercase text-xs">
                Campus Activities
              </p>
            </div>
            <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-[#003366] leading-tight">
              EVENTS AT <span className="relative inline-block">
                DBIT
                <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#FFD700]/30 -z-10"></span>
              </span>
            </h2>
            <p className="text-slate-500 max-w-xl text-lg leading-relaxed">
              Experience a vibrant campus life with our diverse range of
              technical and cultural events throughout the year.
            </p>
          </div>

          <div className="flex bg-slate-200/50 p-1.5 rounded-2xl mt-8 md:mt-0 border border-slate-200 backdrop-blur-sm">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-white text-[#003366] shadow-md scale-[1.02]"
                    : "text-slate-500 hover:text-[#003366] hover:bg-white/50"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Horizontal Card Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {filteredEvents.map((event) => (
            <div
              key={event.title}
              className="group flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${event.image}')` }}
                />
              </div>

              {/* Content Container */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <p className="text-[#0056b3] text-[10px] font-black uppercase tracking-widest mb-1">
                    {event.category}
                  </p>
                  <h3 className="font-sans text-2xl font-bold text-[#003366] leading-tight group-hover:text-[#0056b3] transition-colors">
                    {event.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-6">
                  <Calendar className="h-4 w-4 text-[#FFD700]" />
                  {event.date}
                </div>

                <button className="flex items-center gap-2 text-[#003366] font-bold text-sm group/link mt-auto">
                  Learn More 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}