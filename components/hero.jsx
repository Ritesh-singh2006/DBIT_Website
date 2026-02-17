// "use client"

// import { useState } from "react"
// import { Play, X } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export function Hero() {
//   const [showVideo, setShowVideo] = useState(false)

//   return (
//     <section className="relative min-h-[90vh] flex items-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url('https://www.dbit.in/images/navbar/cover-photo-dbit.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-primary/80" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
//         <div className="max-w-3xl">
//           <p className="text-secondary font-semibold tracking-wider uppercase mb-4">
//             Welcome to DBIT Mumbai
//           </p>
//           <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
//             Shape Your Future with{" "}
//             <span className="text-secondary">Excellence</span>
//           </h1>
//           <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
//             Don Bosco Institute of Technology is committed to providing quality
//             education, fostering innovation, and preparing students for
//             successful careers in engineering and technology.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button
//               size="lg"
//               className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8"
//             >
//               Explore Programs
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 bg-transparent"
//               onClick={() => setShowVideo(true)}
//             >
//               <Play className="mr-2 h-5 w-5" />
//               Take a Virtual Tour
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
//             {[
//               { number: "4", label: "Engineering Branches" },
//               { number: "1000+", label: "Students" },
//               { number: "95%", label: "Placement Rate" },
//               { number: "50+", label: "Recruiters" },
//             ].map((stat) => (
//               <div key={stat.label} className="text-center sm:text-left">
//                 <p className="text-3xl sm:text-4xl font-bold text-secondary">
//                   {stat.number}
//                 </p>
//                 <p className="text-white/80 text-sm mt-1">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Video Modal */}
//       {showVideo && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
//           <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
//             <button
//               onClick={() => setShowVideo(false)}
//               className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
//             >
//               <X className="h-8 w-8" />
//             </button>
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
//               title="DBIT Campus Tour"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   )
// }

"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden bg-gray-900">
      {/* Background Image with optimized dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/6gDhJwopAShXoqjaGjxTvqG8BfI.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Technology <br />
            <span className="text-[#3B82F6]">for the young</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light">
            Empowering responsible problem solvers through holistic education 
            and industry-ready engineering excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button
              size="lg"
              className="bg-[#3B82F6] hover:bg-blue-700 text-white font-bold text-lg px-10 h-16 shadow-lg shadow-blue-500/20"
            >
              Explore Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-black font-bold text-lg px-10 h-16 bg-white/10 backdrop-blur-md"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              Take a Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}