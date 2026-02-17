

// // "use client"

// // import React from "react"

// // const recruiters = [
// //   { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
// //   { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
// //   { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
// //   { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Deloitte.svg" },
// //   { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
// //   { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
// //   { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
// //   { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
// //   { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
// //   { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_2017_logo.svg" },
// //   { name: "Tata Motors", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg" },
// //   { name: "Reliance", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png" },
// // ]

// // export function Recruiters() {
// //   return (
// //     /* Background set to the DBIT Indigo (#3e3fb0) */
// //     <section className="py-12 bg-[#3e3fb0] relative overflow-hidden">
// //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
// //         {/* Section Header */}
// //         <div className="text-center mb-8">
// //           <p className="text-white font-bold tracking-[0.2em] uppercase text-xs mb-1 opacity-90">
// //             Career Opportunities
// //           </p>
// //           <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-3">
// //             OUR  RECRUITING  PARTNERS
// //           </h2>
// //           <p className="text-blue-50 max-w-2xl mx-auto text-sm opacity-90">
// //             Top companies across industries trust DBIT graduates for their
// //             technical expertise and professional readiness.
// //           </p>
// //         </div>

// //         {/* Marquee - Layout and design kept exactly the same */}
// //         <div className="relative overflow-hidden py-2">
// //           <div className="flex animate-scroll items-center">
// //             {[...recruiters, ...recruiters].map((recruiter, index) => (
// //               <div
// //                 key={`${recruiter.name}-${index}`}
// //                 className="flex-shrink-0 mx-4 flex items-center justify-center h-20 w-40 rounded-xl bg-white shadow-md p-4 transition-transform hover:scale-105"
// //               >
// //                 <img 
// //                   src={recruiter.logo} 
// //                   alt={recruiter.name} 
// //                   className="max-h-full max-w-full object-contain" 
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Stats Grid */}
// //         <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
// //           {[
// //             { number: "200+", label: "COMPANIES" },
// //             { number: "25 L", label: "HIGHEST PACKAGE" },
// //             { number: "5 L", label: "AVERAGE PACKAGE" },
// //             { number: "250+", label: "PLACEMENTS" },
// //           ].map((stat) => (
// //             <div
// //               key={stat.label}
// //               /* Glassmorphism adjusted to look sharp against #3e3fb0 */
// //               className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center"
// //             >
// //               <p className="text-2xl sm:text-3xl font-black text-white">
// //                 {stat.number}
// //               </p>
// //               <p className="text-blue-100 text-[10px] font-bold tracking-widest uppercase mt-1">
// //                 {stat.label}
// //               </p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Footer Note */}
// //         <div className="mt-8 text-center border-t border-white/10 pt-6">
// //            {/* <p className="text-white/80 text-xs italic mb-1">
// //              "The T&P Cell ensures all students opting for placements get a minimum of 5 job opportunities."
// //            </p> */}
// //            <p className="text-white/90 text-xs font-semibold">
// //              Total 5000+ students placed since inception.
// //            </p>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         @keyframes scroll {
// //           0% { transform: translateX(0); }
// //           100% { transform: translateX(-50%); }
// //         }
// //         .animate-scroll {
// //           animation: scroll 30s linear infinite;
// //         }
// //       `}</style>
// //     </section>
// //   )
// // }


// "use client"

// import React from "react"

// const recruiters = [
//   { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
//   { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
//   { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
//   { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Deloitte.svg" },
//   { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
//   { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
//   { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
//   { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
//   { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
//   { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_2017_logo.svg" },
//   { name: "Tata Motors", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg" },
//   { name: "Reliance", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png" },
// ]

// export function Recruiters() {
//   return (
//     /* Background updated to match the DBIT Deep Navy (#313E5A) from the screenshot */
//     <section className="py-16 bg-[#313E5A] relative overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center mb-10">
//           <p className="text-[#FFC107] font-bold tracking-[0.25em] uppercase text-xs mb-3">
//             Career Opportunities
//           </p>
//           <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 uppercase">
//             Our <span className="text-[#FFC107]">Recruiting</span> Partners
//           </h2>
//           <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed opacity-90">
//             Top companies across industries trust DBIT graduates for their
//             technical expertise and professional readiness.
//           </p>
//         </div>

//         {/* Infinite Marquee */}
//         <div className="relative overflow-hidden py-4">
//           <div className="flex animate-scroll items-center">
//             {[...recruiters, ...recruiters].map((recruiter, index) => (
//               <div
//                 key={`${recruiter.name}-${index}`}
//                 className="flex-shrink-0 mx-4 flex items-center justify-center h-20 w-44 rounded-xl bg-white shadow-lg p-5 transition-transform hover:scale-105"
//               >
//                 <img 
//                   src={recruiter.logo} 
//                   alt={recruiter.name} 
//                   className="max-h-full max-w-full object-contain" 
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { number: "200", suffix: "+", label: "COMPANIES" },
//             { number: "25", suffix: "L", label: "HIGHEST PACKAGE" },
//             { number: "5.8", suffix: "L", label: "AVERAGE PACKAGE" },
//             { number: "5000", suffix: "+", label: "STUDENTS PLACED" },
//           ].map((stat) => (
//             <div
//               key={stat.label}
//               className="p-6 rounded-2xl bg-[#ffffff0a] border border-[#ffffff1a] text-center backdrop-blur-sm"
//             >
//               <div className="text-3xl sm:text-4xl font-black text-white mb-2">
//                 <span>{stat.number}</span>
//                 <span className="text-[#FFC107]">{stat.suffix}</span>
//               </div>
//               <p className="text-gray-300 text-[11px] font-bold tracking-[0.15em] uppercase">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Footer Note */}
//         <div className="mt-12 text-center border-t border-white/10 pt-8">
//            <p className="text-gray-300 text-sm font-semibold">
//              Join the community that <span className="text-[#FFC107]">nurtures talent</span> and prepares you for a successful career.
//            </p>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 40s linear infinite;
//         }
//       `}</style>
//     </section>
//   )
// }

"use client"

import React from "react"
import { GraduationCap, Award, BookOpen, Heart } from "lucide-react"

const recruiters = [
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Deloitte.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_2017_logo.svg" },
  { name: "Tata Motors", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg" },
  { name: "Reliance", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png" },
]

export function Recruiters() {
  return (
    <>
      {/* --- RECRUITERS SECTION --- */}
      <section className="py-16 bg-[#313E5A] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <p className="text-[#FFC107] font-bold tracking-[0.25em] uppercase text-xs mb-3">Career Opportunities</p>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 uppercase">
              Our <span className="text-[#FFC107]">Recruiting</span> Partners
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed opacity-90">
              Top companies across industries trust DBIT graduates for their technical expertise and professional readiness.
            </p>
          </div>

          <div className="relative overflow-hidden py-4">
            <div className="flex animate-scroll items-center">
              {[...recruiters, ...recruiters].map((recruiter, index) => (
                <div key={index} className="flex-shrink-0 mx-4 flex items-center justify-center h-20 w-44 rounded-xl bg-white shadow-lg p-5 transition-transform hover:scale-105">
                  <img src={recruiter.logo} alt={recruiter.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "200", suffix: "+", label: "COMPANIES" },
              { number: "25", suffix: "L", label: "HIGHEST PACKAGE" },
              { number: "5.8", suffix: "L", label: "AVERAGE PACKAGE" },
              { number: "5000", suffix: "+", label: "STUDENTS PLACED" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-[#ffffff0a] border border-[#ffffff1a] text-center backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-black text-white mb-2">
                  <span>{stat.number}</span>
                  <span className="text-[#FFC107]">{stat.suffix}</span>
                </div>
                <p className="text-gray-300 text-[11px] font-bold tracking-[0.15em] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-scroll { animation: scroll 40s linear infinite; }
        `}</style>
      </section>

      {/* --- LEADERSHIP SECTION (Relocated and Modernized) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* New Heading Style for Leadership */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#3B82F6] font-bold tracking-[0.2em] uppercase text-xs mb-3">
              Governance & Vision
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase">
              <span className="text-[#003366]">GUIDED BY VISIONARY LEADERS</span>
            </h2>
            <div className="h-1.5 w-20 bg-[#FFD700] mx-auto mt-6 rounded-full shadow-sm" />
            <p className="mt-8 text-slate-500 text-lg leading-relaxed font-medium">
              Rooted in Salesian values and driven by academic excellence, our leadership ensures a holistic learning environment for every student.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Director Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group hover:border-[#3B82F6]/30 transition-colors">
              <div className="relative w-full md:w-52 h-64 shrink-0 rounded-2xl overflow-hidden">
                <img src="/father.jpg" alt="Fr. Anthony Pinto" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-[#3B82F6] text-white text-[10px] font-black px-3 py-1 uppercase">Director</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900">Fr. Anthony Pinto</h3>
                <p className="text-slate-500 text-sm mb-4">Director, DBIT Mumbai</p>
                <div className="relative mb-6">
                  <span className="text-[#3B82F6] text-4xl font-sans absolute -left-2 -top-2 opacity-20">"</span>
                  <p className="text-slate-600 italic leading-relaxed text-sm pl-4 border-l-2 border-[#3B82F6]/30">
                    Committed to fostering a holistic learning environment rooted in Salesian values, nurturing the young to become honest citizens.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
                    <BookOpen className="w-3 h-3 text-[#3B82F6]" /> Salesian Society
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
                    <Heart className="w-3 h-3 text-[#3B82F6]" /> Don Bosco Mission
                  </div>
                </div>
              </div>
            </div>

            {/* Principal Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group hover:border-[#3B82F6]/30 transition-colors">
              <div className="relative w-full md:w-52 h-64 shrink-0 rounded-2xl overflow-hidden">
                <img src="/principalnew.png" alt="Dr. Sudhakar Mande" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-[#3B82F6] text-white text-[10px] font-black px-3 py-1 uppercase">Principal</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900">Dr. Sudhakar Mande</h3>
                <p className="text-slate-500 text-sm mb-3">Principal, DBIT Mumbai</p>
                <div className="bg-[#FFF9E6] border border-[#FFD966]/30 rounded-lg p-2 mb-4 flex items-center gap-2">
                   <GraduationCap className="w-4 h-4 text-amber-600" />
                   <span className="text-xs font-bold text-amber-900">IIT Bombay Alumnus (M.Tech & PhD)</span>
                </div>
                <div className="relative mb-6">
                  <span className="text-[#3B82F6] text-4xl font-sans absolute -left-2 -top-2 opacity-20">"</span>
                  <p className="text-slate-600 italic leading-relaxed text-sm pl-4 border-l-2 border-[#3B82F6]/30">
                    Empowering students with technical excellence and critical thinking for Industry 4.0 — preparing engineers who make a difference.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
                    <Award className="w-3 h-3 text-[#3B82F6]" /> IIT Bombay
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
                    <GraduationCap className="w-3 h-3 text-[#3B82F6]" /> Research Leader
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}