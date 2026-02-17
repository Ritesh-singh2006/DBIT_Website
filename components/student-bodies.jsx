
// import { Button } from "@/components/ui/button"

// const bodies = [
//   {
//     image: "/studcouncil.jpg", // Replace with your actual paths
//     title: "Student Council",
//     description:
//       "A great way for students to take on leadership roles, promote the voice of the student body, solve problems and impact the community.",
//   },
//   {
//     image: "/techbodies.webp",
//     title: "Technical Bodies",
//     description:
//       "CSI, IEEE, ACM chapters creating opportunities for students to network and learn about developments in technology and applied engineering.",
//   },
//   {
//     image: "culturalbodies.jpg",
//     title: "Cultural Bodies",
//     description:
//       "Cultural clubs striving to bring out the hidden talent of students in music, dance, drama, art, and other creative pursuits.",
//   },
// ]

// export function StudentBodies() {
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p className="text-[#0056b3] font-semibold tracking-wider uppercase mb-2">
//             Get Involved
//           </p>
//           <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#003366] mb-4">
//             {"Student Bodies & Clubs"}
//           </h2>
//           <p className="text-slate-600 max-w-2xl mx-auto">
//             Join our vibrant student organizations to develop leadership skills,
//             pursue your passions, and make lasting connections.
//           </p>
//         </div>

//         {/* Bodies Grid */}
//         <div className="grid gap-8 md:grid-cols-3">
//           {bodies.map((body) => {
//             return (
//               <div
//                 key={body.title}
//                 className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all duration-300"
//               >
//                 {/* Image Container */}
//                 <div className="relative h-52 w-full overflow-hidden">
//                   <img
//                     src={body.image}
//                     alt={body.title}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   {/* Overlay for depth */}
//                   <div className="absolute inset-0 bg-[#003366]/10 group-hover:bg-transparent transition-colors duration-300" />
//                 </div>

//                 <div className="p-8 text-center flex-1 flex flex-col">
//                   <h3 className="font-sans text-2xl font-bold text-[#003366] mb-4 group-hover:text-[#0056b3] transition-colors">
//                     {body.title}
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed mb-8 flex-1">
//                     {body.description}
//                   </p>
//                   <Button
//                     variant="outline"
//                     className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white transition-colors"
//                   >
//                     Learn More
//                   </Button>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

import { Button } from "@/components/ui/button"

const bodies = [
  {
    image: "/studcouncil.jpg", 
    title: "Student Council",
    description:
      "A great way for students to take on leadership roles, promote the voice of the student body, solve problems and impact the community.",
  },
  {
    image: "/techbodies.webp",
    title: "Technical Bodies",
    description:
      "CSI, IEEE, ACM chapters creating opportunities for students to network and learn about developments in technology and applied engineering.",
  },
  {
    image: "culturalbodies.jpg",
    title: "Cultural Bodies",
    description:
      "Cultural clubs striving to bring out the hidden talent of students in music, dance, drama, art, and other creative pursuits.",
  },
]

export function StudentBodies() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- IMPROVED SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#0056b3] font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Get Involved
          </p>
          
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003366] tracking-tight leading-tight uppercase">
            Student Bodies <span className="text-[#0056b3]">&</span> Clubs
          </h2>

          {/* Yellow Underline Anchor: 6px height, rounded, matching your theme */}


          <p className="mt-8 text-slate-600 text-lg leading-relaxed font-medium">
            Join our vibrant student organizations to develop leadership skills,
            pursue your passions, and make lasting connections.
          </p>
        </div>

        {/* Bodies Grid: Kept exactly as provided */}
        <div className="grid gap-8 md:grid-cols-3">
          {bodies.map((body) => {
            return (
              <div
                key={body.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={body.image}
                    alt={body.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#003366]/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                <div className="p-8 text-center flex-1 flex flex-col">
                  <h3 className="font-sans text-2xl font-bold text-[#003366] mb-4 group-hover:text-[#0056b3] transition-colors">
                    {body.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                    {body.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white transition-colors"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}