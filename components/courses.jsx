// // "use client"

// // import React, { useState, useEffect, useCallback } from "react"
// // import { Button } from "@/components/ui/button"
// // import useEmblaCarousel from "embla-carousel-react"
// // import { GraduationCap, Award, BookOpen, Heart } from "lucide-react"

// // // --- DATA ---
// // const courses = [
// //   {
// //     title: "Computer Engineering",
// //     description: "Equipped with state-of-the-art software and highly qualified faculty members, our Computer Engineering department is one of the best in the city.",
// //     image: "/COMPSdept.png", 
// //   },
// //   {
// //     title: "Information Technology",
// //     description: "Our IT department houses faculty members who are experts in fields like Blockchain, deep learning, AI and cryptography.",
// //     image: "/ITdepartment.png",
// //   },
// //   {
// //     title: "Electronics & Telecommunication",
// //     description: "Our EXTC department houses fully-functional electronics labs with the latest equipment. Experience hands-on learning.",
// //     image: "/EXTCdept.png",
// //   },
// //   {
// //     title: "Mechanical Engineering",
// //     description: "The department marries technical prowess to state-of-the-art laboratories. Gain hands-on experience in physical engineering.",
// //     image: "/MECHdept.png",
// //   },
// // ]

// // // --- SUB-COMPONENT: LEADERSHIP SECTION ---
// // export function LeadershipSection() {
// //   return (
// //     <section className="w-full bg-white py-20">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <span className="bg-slate-100 text-slate-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
// //             Our Leadership
// //           </span>
// //           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
// //             Guided by <span className="text-[#3B82F6]">Visionary Leaders</span>
// //           </h2>
// //           <p className="text-slate-500 mt-4 text-lg">
// //             Rooted in Salesian values, driven by academic excellence
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //           <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
// //             <div className="relative w-full md:w-52 h-64 shrink-0 rounded-2xl overflow-hidden">
// //               <img src="/father.jpg" alt="Fr. Anthony Pinto" className="w-full h-full object-cover" />
// //               <div className="absolute bottom-0 left-0 bg-[#3B82F6] text-white text-[10px] font-black px-3 py-1 uppercase">Director</div>
// //             </div>
// //             <div className="flex-1">
// //               <h3 className="text-2xl font-bold text-slate-900">Fr. Anthony Pinto</h3>
// //               <p className="text-slate-500 text-sm mb-4">Director, DBIT Mumbai</p>
// //               <div className="relative mb-6">
// //                 <span className="text-[#3B82F6] text-4xl font-sans absolute -left-2 -top-2 opacity-20">"</span>
// //                 <p className="text-slate-600 italic leading-relaxed text-sm pl-4 border-l-2 border-[#3B82F6]/30">
// //                   Committed to fostering a holistic learning environment rooted in Salesian values, nurturing the young to become honest citizens and good Christians.
// //                 </p>
// //               </div>
// //               <div className="flex flex-wrap gap-3">
// //                 <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
// //                   <BookOpen className="w-3 h-3 text-[#3B82F6]" /> Salesian Society
// //                 </div>
// //                 <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
// //                   <Heart className="w-3 h-3 text-[#3B82F6]" /> Don Bosco Mission
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
// //             <div className="relative w-full md:w-52 h-64 shrink-0 rounded-2xl overflow-hidden">
// //               <img src="/principalnew.png" alt="Dr. Sudhakar Mande" className="w-full h-full object-cover" />
// //               <div className="absolute bottom-0 left-0 bg-[#3B82F6] text-white text-[10px] font-black px-3 py-1 uppercase">Principal</div>
// //             </div>
// //             <div className="flex-1">
// //               <h3 className="text-2xl font-bold text-slate-900">Dr. Sudhakar Mande</h3>
// //               <p className="text-slate-500 text-sm mb-3">Principal, DBIT Mumbai</p>
// //               <div className="bg-[#FFF9E6] border border-[#FFD966]/30 rounded-lg p-2 mb-4 flex items-center gap-2">
// //                  <GraduationCap className="w-4 h-4 text-amber-600" />
// //                  <span className="text-xs font-bold text-amber-900">IIT Bombay Alumnus (M.Tech & PhD)</span>
// //               </div>
// //               <div className="relative mb-6">
// //                 <span className="text-[#3B82F6] text-4xl font-sans absolute -left-2 -top-2 opacity-20">"</span>
// //                 <p className="text-slate-600 italic leading-relaxed text-sm pl-4 border-l-2 border-[#3B82F6]/30">
// //                   Empowering students with technical excellence and critical thinking for Industry 4.0 — preparing engineers who make a difference.
// //                 </p>
// //               </div>
// //               <div className="flex flex-wrap gap-3">
// //                 <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
// //                   <Award className="w-3 h-3 text-[#3B82F6]" /> IIT Bombay
// //                 </div>
// //                 <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
// //                   <GraduationCap className="w-3 h-3 text-[#3B82F6]" /> Research Leader
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // --- MAIN COMPONENT ---
// // export function Courses() {
// //   const [emblaRef, emblaApi] = useEmblaCarousel({ 
// //     loop: true, 
// //     align: "start",
// //     slidesToScroll: 1 
// //   })
  
// //   const [selectedIndex, setSelectedIndex] = useState(0)
// //   const [scrollSnaps, setScrollSnaps] = useState([])
// //   const [isHovered, setIsHovered] = useState(false)

// //   const onSelect = useCallback(() => {
// //     if (!emblaApi) return
// //     setSelectedIndex(emblaApi.selectedScrollSnap())
// //   }, [emblaApi])

// //   // Fixed Autoplay logic
// //   useEffect(() => {
// //     if (!emblaApi) return

// //     const autoplay = setInterval(() => {
// //       if (!isHovered) {
// //         if (emblaApi.canScrollNext()) {
// //           emblaApi.scrollNext()
// //         } else {
// //           emblaApi.scrollTo(0)
// //         }
// //       }
// //     }, 2000) 

// //     return () => clearInterval(autoplay)
// //   }, [emblaApi, isHovered])

// //   useEffect(() => {
// //     if (!emblaApi) return
    
// //     // Sync snaps and events
// //     onSelect()
// //     setScrollSnaps(emblaApi.scrollSnapList())
// //     emblaApi.on("select", onSelect)
// //     emblaApi.on("reInit", onSelect)
    
// //     // Force a re-init so Embla calculates dimensions correctly after mount
// //     emblaApi.reInit()
// //   }, [emblaApi, onSelect])

// //   const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

// //   return (
// //     <>
// //       <LeadershipSection />

// //       <section className="py-20 bg-[#F8FAFC] overflow-hidden">
// //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-16">
// //             <p className="text-[#3B82F6] font-semibold tracking-wider uppercase mb-2">Academic Programs</p>
// //             <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">Courses Offered at DBIT</h2>
// //           </div>

// //           <div 
// //             className="relative"
// //             onMouseEnter={() => setIsHovered(true)}
// //             onMouseLeave={() => setIsHovered(false)}
// //           >
// //             <div className="overflow-hidden mb-10" ref={emblaRef}>
// //               <div className="flex -ml-6">
// //                 {courses.map((course, index) => (
// //                   <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] pl-6">
// //                     <div className="relative h-[480px] w-full rounded-3xl overflow-hidden group cursor-pointer shadow-md">
// //                       <img
// //                         src={course.image}
// //                         alt={course.title}
// //                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

// //                       <div className="absolute inset-0 flex items-end p-8 transition-opacity duration-300 group-hover:opacity-0">
// //                         <h3 className="text-white text-xl font-bold">{course.title}</h3>
// //                       </div>

// //                       <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-slate-950/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-8 flex flex-col justify-center">
// //                         <h3 className="text-white text-lg font-bold mb-2">{course.title}</h3>
// //                         <div className="w-12 h-1 bg-[#3B82F6] mb-4" />
// //                         <p className="text-slate-300 text-sm leading-relaxed mb-6">
// //                           {course.description}
// //                         </p>
// //                         <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white w-fit font-bold px-8 py-4 rounded-xl tracking-widest text-[10px]">
// //                           KNOW MORE
// //                         </Button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           <div className="flex justify-center gap-3">
// //             {scrollSnaps.map((_, index) => (
// //               <button
// //                 key={index}
// //                 onClick={() => scrollTo(index)}
// //                 className={`h-2 transition-all duration-300 rounded-full ${
// //                   index === selectedIndex ? "w-8 bg-[#3B82F6]" : "w-2 bg-slate-300 hover:bg-slate-400"
// //                 }`}
// //                 aria-label={`Go to slide ${index + 1}`}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   )
// // }

// "use client"

// import React, { useState, useEffect, useCallback } from "react"
// import { Button } from "@/components/ui/button"
// import useEmblaCarousel from "embla-carousel-react"
// import { GraduationCap, Award, BookOpen, Heart } from "lucide-react"

// // --- DATA ---
// const courses = [
//   {
//     title: "Computer Engineering",
//     description: "Equipped with state-of-the-art software and highly qualified faculty members, our Computer Engineering department is one of the best in the city.",
//     image: "/COMPSdept.png", 
//   },
//   {
//     title: "Information Technology",
//     description: "Our IT department houses faculty members who are experts in fields like Blockchain, deep learning, AI and cryptography.",
//     image: "/ITdepartment.png",
//   },
//   {
//     title: "Electronics & Telecommunication",
//     description: "Our EXTC department houses fully-functional electronics labs with the latest equipment. Experience hands-on learning.",
//     image: "/EXTCdept.png",
//   },
//   {
//     title: "Mechanical Engineering",
//     description: "The department marries technical prowess to state-of-the-art laboratories. Gain hands-on experience in physical engineering.",
//     image: "/MECHdept.png",
//   },
// ]

// // --- SUB-COMPONENT: LEADERSHIP SECTION ---
// export function LeadershipSection() {
//   return (
//     <section className="w-full bg-white py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="bg-slate-100 text-slate-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
//             Our Leadership
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
//             Guided by <span className="text-[#3B82F6]">Visionary Leaders</span>
//           </h2>
//           <p className="text-slate-500 mt-4 text-lg">
//             Rooted in Salesian values, driven by academic excellence
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
//             <div className="relative w-full md:w-52 h-64 shrink-0 rounded-2xl overflow-hidden">
//               <img src="/father.jpg" alt="Fr. Anthony Pinto" className="w-full h-full object-cover" />
//               <div className="absolute bottom-0 left-0 bg-[#3B82F6] text-white text-[10px] font-black px-3 py-1 uppercase">Director</div>
//             </div>
//             <div className="flex-1">
//               <h3 className="text-2xl font-bold text-slate-900">Fr. Anthony Pinto</h3>
//               <p className="text-slate-500 text-sm mb-4">Director, DBIT Mumbai</p>
//               <div className="relative mb-6">
//                 <span className="text-[#3B82F6] text-4xl font-sans absolute -left-2 -top-2 opacity-20">"</span>
//                 <p className="text-slate-600 italic leading-relaxed text-sm pl-4 border-l-2 border-[#3B82F6]/30">
//                   Committed to fostering a holistic learning environment rooted in Salesian values, nurturing the young to become honest citizens and good Christians.
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
//                   <BookOpen className="w-3 h-3 text-[#3B82F6]" /> Salesian Society
//                 </div>
//                 <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
//                   <Heart className="w-3 h-3 text-[#3B82F6]" /> Don Bosco Mission
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
//             <div className="relative w-full md:w-52 h-64 shrink-0 rounded-2xl overflow-hidden">
//               <img src="/principalnew.png" alt="Dr. Sudhakar Mande" className="w-full h-full object-cover" />
//               <div className="absolute bottom-0 left-0 bg-[#3B82F6] text-white text-[10px] font-black px-3 py-1 uppercase">Principal</div>
//             </div>
//             <div className="flex-1">
//               <h3 className="text-2xl font-bold text-slate-900">Dr. Sudhakar Mande</h3>
//               <p className="text-slate-500 text-sm mb-3">Principal, DBIT Mumbai</p>
//               <div className="bg-[#FFF9E6] border border-[#FFD966]/30 rounded-lg p-2 mb-4 flex items-center gap-2">
//                  <GraduationCap className="w-4 h-4 text-amber-600" />
//                  <span className="text-xs font-bold text-amber-900">IIT Bombay Alumnus (M.Tech & PhD)</span>
//               </div>
//               <div className="relative mb-6">
//                 <span className="text-[#3B82F6] text-4xl font-sans absolute -left-2 -top-2 opacity-20">"</span>
//                 <p className="text-slate-600 italic leading-relaxed text-sm pl-4 border-l-2 border-[#3B82F6]/30">
//                   Empowering students with technical excellence and critical thinking for Industry 4.0 — preparing engineers who make a difference.
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
//                   <Award className="w-3 h-3 text-[#3B82F6]" /> IIT Bombay
//                 </div>
//                 <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
//                   <GraduationCap className="w-3 h-3 text-[#3B82F6]" /> Research Leader
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // --- MAIN COMPONENT ---
// export function Courses() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ 
//     loop: true, 
//     align: "start",
//     slidesToScroll: 1 
//   })
  
//   const [selectedIndex, setSelectedIndex] = useState(0)
//   const [scrollSnaps, setScrollSnaps] = useState([])
//   const [isHovered, setIsHovered] = useState(false)

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return
//     setSelectedIndex(emblaApi.selectedScrollSnap())
//   }, [emblaApi])

//   useEffect(() => {
//     if (!emblaApi) return

//     const autoplay = setInterval(() => {
//       if (!isHovered) {
//         if (emblaApi.canScrollNext()) {
//           emblaApi.scrollNext()
//         } else {
//           emblaApi.scrollTo(0)
//         }
//       }
//     }, 2000) 

//     return () => clearInterval(autoplay)
//   }, [emblaApi, isHovered])

//   useEffect(() => {
//     if (!emblaApi) return
    
//     onSelect()
//     setScrollSnaps(emblaApi.scrollSnapList())
//     emblaApi.on("select", onSelect)
//     emblaApi.on("reInit", onSelect)
    
//     emblaApi.reInit()
//   }, [emblaApi, onSelect])

//   const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

//   return (
//     <>
//       <LeadershipSection />

//       <section className="py-24 bg-[#F8FAFC] overflow-hidden">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
//           {/* --- TRANSFORMED HEADING --- */}
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <p className="text-[#3B82F6] font-bold tracking-[0.2em] uppercase text-xs mb-3">
//               Academic Excellence
//             </p>
//             <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
//               <span className="text-[#3B82F6]">COURSES</span> <span className="text-[#313E5A]">OFFERED</span> <span className="text-[#313E5A]">AT DBIT</span>
//             </h2>
            
//             {/* Visual Anchor: Thicker, rounded yellow bar */}
//             <div className="h-1.5 w-20 bg-[#FFD700] mx-auto mt-6 rounded-full shadow-sm" />
            
//             <p className="mt-8 text-slate-500 text-lg leading-relaxed font-medium">
//               Explore our diverse range of engineering programs designed to foster 
//               innovation, technical mastery, and professional growth in a 
//               values-driven environment.
//             </p>
//           </div>

//           <div 
//             className="relative"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <div className="overflow-hidden mb-10" ref={emblaRef}>
//               <div className="flex -ml-6">
//                 {courses.map((course, index) => (
//                   <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] pl-6 py-2">
//                     {/* --- SLIM BORDERED CARD --- */}
//                     <div className="relative h-[480px] w-full rounded-3xl overflow-hidden group cursor-pointer shadow-md border border-slate-200/60">
//                       <img
//                         src={course.image}
//                         alt={course.title}
//                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

//                       <div className="absolute inset-0 flex items-end p-8 transition-opacity duration-300 group-hover:opacity-0">
//                         <h3 className="text-white text-xl font-bold">{course.title}</h3>
//                       </div>

//                       <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-slate-950/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-8 flex flex-col justify-center">
//                         <h3 className="text-white text-lg font-bold mb-2">{course.title}</h3>
//                         <div className="w-12 h-1 bg-[#3B82F6] mb-4" />
//                         <p className="text-slate-300 text-sm leading-relaxed mb-6">
//                           {course.description}
//                         </p>
//                         <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white w-fit font-bold px-8 py-4 rounded-xl tracking-widest text-[10px]">
//                           KNOW MORE
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center gap-3">
//             {scrollSnaps.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => scrollTo(index)}
//                 className={`h-2 transition-all duration-300 rounded-full ${
//                   index === selectedIndex ? "w-8 bg-[#3B82F6]" : "w-2 bg-slate-300 hover:bg-slate-400"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

"use client"

import React, { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"

const courses = [
  {
    title: "Computer Engineering",
    description: "Equipped with state-of-the-art software and highly qualified faculty members, our Computer Engineering department is one of the best in the city.",
    image: "/COMPSdept.png", 
  },
  {
    title: "Information Technology",
    description: "Our IT department houses faculty members who are experts in fields like Blockchain, deep learning, AI and cryptography.",
    image: "/ITdepartment.png",
  },
  {
    title: "Electronics & Telecommunication",
    description: "Our EXTC department houses fully-functional electronics labs with the latest equipment. Experience hands-on learning.",
    image: "/EXTCdept.png",
  },
  {
    title: "Mechanical Engineering",
    description: "The department marries technical prowess to state-of-the-art laboratories. Gain hands-on experience in physical engineering.",
    image: "/MECHdept.png",
  },
]

export function Courses() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1 
  })
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [isHovered, setIsHovered] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const autoplay = setInterval(() => {
      if (!isHovered) {
        if (emblaApi.canScrollNext()) emblaApi.scrollNext()
        else emblaApi.scrollTo(0)
      }
    }, 2000) 
    return () => clearInterval(autoplay)
  }, [emblaApi, isHovered])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    emblaApi.reInit()
  }, [emblaApi, onSelect])

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Modernized Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#3B82F6] font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Academic Excellence
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase">
            <span className="text-[#3B82F6]"></span> <span className="text-[#313E5A]"> COURSES OFFERED</span> <span className="text-[#313E5A]">AT DBIT</span>
          </h2>
          <p className="mt-8 text-slate-500 text-lg leading-relaxed font-medium">
            Explore our diverse range of engineering programs designed to foster 
            innovation, technical mastery, and professional growth.
          </p>
        </div>

        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="overflow-hidden mb-10" ref={emblaRef}>
            <div className="flex -ml-6">
              {courses.map((course, index) => (
                <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] pl-6 py-2">
                  <div className="relative h-[480px] w-full rounded-3xl overflow-hidden group cursor-pointer shadow-md border border-slate-200/60">
                    <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-end p-8 transition-opacity duration-300 group-hover:opacity-0">
                      <h3 className="text-white text-xl font-bold">{course.title}</h3>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-slate-950/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-8 flex flex-col justify-center">
                      <h3 className="text-white text-lg font-bold mb-2">{course.title}</h3>
                      <div className="w-12 h-1 bg-[#3B82F6] mb-4" />
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">{course.description}</p>
                      <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white w-fit font-bold px-8 py-4 rounded-xl tracking-widest text-[10px]">
                        KNOW MORE
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {scrollSnaps.map((_, index) => (
            <button key={index} onClick={() => scrollTo(index)} className={`h-2 transition-all duration-300 rounded-full ${index === selectedIndex ? "w-8 bg-[#3B82F6]" : "w-2 bg-slate-300 hover:bg-slate-400"}`} />
          ))}
        </div>
      </div>
    </section>
  )
}