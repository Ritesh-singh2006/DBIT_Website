  // const facilities = [
  //   {
  //     title: "Library",
  //     description:
  //       "Rich collection of 34,794+ texts and reference books in various domains, keeping students updated with the latest knowledge.",
  //     image: "/library.webp",
  //   },
  //   {
  //     title: "Technical Laboratories",
  //     description:
  //       "State-of-the-art computer labs, electronics labs, mechanical workshops, and specialized robotics and ML computation labs.",
  //     image: "/techlabs.webp",
  //   },
  //   {
  //     title: "Sports Facilities",
  //     description:
  //       "Large football ground, basketball court, and facilities for various sports activities promoting leadership and team spirit.",
  //     image: "/sports.jpg",
  //   },
  //   {
  //     title: "Entrepreneurship Cell",
  //     description:
  //       "E-Cell dedicated to promoting entrepreneurship spirit and encouraging students to start their own enterprises.",
  //     image: "/Ecell.webp",
  //   },
  //   {
  //     title: "National Service Scheme",
  //     description:
  //       "Active NSS unit conducting blood donation camps, tree plantations, water harvesting, and community service activities.",
  //     image: "/nss.jpg",
  //   },
  //   {
  //     title: "Digital Learning",
  //     description:
  //       "Moodle-based e-learning platform for sharing materials, conducting tests, and managing assignment submissions.",
  //     image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
  //   },
  // ]

  // export function Facilities() {
  //   return (
  //     <section className="py-20 bg-background">
  //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  //         {/* Section Header */}
  //         <div className="text-center mb-16">
  //           <p className="text-[#0056b3] font-semibold tracking-wider uppercase mb-2">
  //             Campus Amenities
  //           </p>
  //           <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#003366] mb-4">
  //             WORLD-CLASS FACILITIES
  //           </h2>
  //           <p className="text-muted-foreground max-w-2xl mx-auto">
  //             Experience a conducive learning environment with modern
  //             infrastructure and facilities designed to support your academic
  //             journey.
  //           </p>
  //         </div>

  //         {/* Facilities Grid */}
  //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  //           {facilities.map((facility) => {
  //             return (
  //               <div
  //                 key={facility.title}
  //                 className="group relative overflow-hidden rounded-2xl bg-[#003366] aspect-[4/3] cursor-pointer"
  //               >
  //                 {/* Background Image */}
  //                 <div
  //                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
  //                   style={{ backgroundImage: `url('${facility.image}')` }}
  //                 />

  //                 {/* Gradient Overlay: Darker at the bottom to ensure title visibility */}
  //                 <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#003366]/20 to-transparent opacity-90 transition-opacity duration-300" />

  //                 {/* Content Container: Fixed to the bottom */}
  //                 <div className="absolute bottom-0 left-0 w-full p-8 text-white">
  //                   {/* The Title: Sits at the very bottom initially */}
  //                   <h3 className="font-sans text-2xl font-bold transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
  //                     {facility.title}
  //                   </h3>
                    
  //                   {/* The Description: Hidden below the card, slides up into view */}
  //                   <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
  //                     <div className="overflow-hidden">
  //                       <p className="text-white/90 text-sm pt-4 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
  //                         {facility.description}
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             )
  //           })}
  //         </div>
  //       </div>
  //     </section>
  //   )
  // }

  "use client"

import React from "react"

const facilities = [
  {
    title: "Library",
    description:
      "Rich collection of 34,794+ texts and reference books in various domains, keeping students updated with the latest knowledge.",
    image: "/library.webp",
  },
  {
    title: "Technical Laboratories",
    description:
      "State-of-the-art computer labs, electronics labs, mechanical workshops, and specialized robotics and ML computation labs.",
    image: "/techlabs.webp",
  },
  {
    title: "Sports Facilities",
    description:
      "Large football ground, basketball court, and facilities for various sports activities promoting leadership and team spirit.",
    image: "/sports.jpg",
  },
  {
    title: "Entrepreneurship Cell",
    description:
      "E-Cell dedicated to promoting entrepreneurship spirit and encouraging students to start their own enterprises.",
    image: "/Ecell.webp",
  },
  {
    title: "National Service Scheme",
    description:
      "Active NSS unit conducting blood donation camps, tree plantations, water harvesting, and community service activities.",
    image: "/nss.jpg",
  },
  {
    title: "Digital Learning",
    description:
      "Moodle-based e-learning platform for sharing materials, conducting tests, and managing assignment submissions.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
  },
]

export function Facilities() {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- REFINED HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#3B82F6] font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Campus Amenities
          </p>
          
          {/* Weight reduced to font-bold. 
              Colors: #3B82F6 for "WORLD-CLASS" and #003366 for "FACILITIES" 
          */}
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase">
            <span className="text-[#3B82F6]"></span>{" "}
            <span className="text-[#003366]">WORLD-CLASS FACILITIES</span>
          </h2>
          
         
          <p className="mt-6 text-slate-500 text-lg leading-relaxed font-medium">
            Experience a conducive learning environment with modern
            infrastructure and state-of-the-art facilities designed to support 
            your academic and personal growth.
          </p>
        </div>

        {/* Facilities Grid: Kept exactly as provided */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => {
            return (
              <div
                key={facility.title}
                className="group relative overflow-hidden rounded-2xl bg-[#003366] aspect-[4/3] cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${facility.image}')` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#003366]/20 to-transparent opacity-90 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                  <h3 className="font-sans text-2xl font-bold transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                    {facility.title}
                  </h3>
                  
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-white/90 text-sm pt-4 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}