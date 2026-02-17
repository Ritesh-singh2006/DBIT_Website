// import Link from "next/link"
// import {
//   GraduationCap,
//   MapPin,
//   Phone,
//   Mail,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Youtube,
// } from "lucide-react"

// const footerLinks = {
//   academics: [
//     { name: "Computer Engineering", href: "#" },
//     { name: "Information Technology", href: "#" },
//     { name: "EXTC Engineering", href: "#" },
//     { name: "Mechanical Engineering", href: "#" },
//     { name: "Academic Calendar", href: "#" },
//   ],
//   admissions: [
//     { name: "How to Apply", href: "#" },
//     { name: "Fee Structure", href: "#" },
//     { name: "Scholarships", href: "#" },
//     { name: "Campus Tour", href: "#" },
//     { name: "FAQs", href: "#" },
//   ],
//   campus: [
//     { name: "Library", href: "#" },
//     { name: "Laboratories", href: "#" },
//     { name: "Sports", href: "#" },
//     { name: "Hostels", href: "#" },
//     { name: "Student Clubs", href: "#" },
//   ],
//   quick: [
//     { name: "NAAC", href: "#" },
//     { name: "NIRF", href: "#" },
//     { name: "Alumni", href: "#" },
//     { name: "Placements", href: "#" },
//     { name: "Contact Us", href: "#" },
//   ],
// }

// const socialLinks = [
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Instagram, href: "#", label: "Instagram" },
//   { icon: Linkedin, href: "#", label: "LinkedIn" },
//   { icon: Youtube, href: "#", label: "YouTube" },
// ]

// export function Footer() {
//   return (
//     <footer className="bg-primary text-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Main Footer */}
//         <div className="py-16 grid gap-12 lg:grid-cols-5">
//           {/* Logo & Info */}
//           <div className="lg:col-span-2">
//             <Link href="#" className="flex items-center gap-3 mb-6">
//               <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
//                 <GraduationCap className="h-8 w-8" />
//               </div>
//               <div>
//                 <h2 className="font-serif text-2xl font-bold">DBIT</h2>
//                 <p className="text-white/70 text-sm">
//                   Don Bosco Institute of Technology
//                 </p>
//               </div>
//             </Link>
//             <p className="text-white/80 leading-relaxed mb-6 max-w-sm">
//               Committed to excellence in engineering education, fostering
//               innovation, and preparing students for successful careers since
//               establishment.
//             </p>

//             {/* Contact Info */}
//             <div className="space-y-3">
//               <div className="flex items-start gap-3">
//                 <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
//                 <p className="text-white/80 text-sm">
//                   Premier Automobiles Rd, Kurla West,
//                   <br />
//                   Mumbai, Maharashtra 400070
//                 </p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Phone className="h-5 w-5 text-secondary" />
//                 <a
//                   href="tel:+912228461465"
//                   className="text-white/80 text-sm hover:text-secondary transition-colors"
//                 >
//                   +91 22 2846 1465
//                 </a>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Mail className="h-5 w-5 text-secondary" />
//                 <a
//                   href="mailto:info@dbit.in"
//                   className="text-white/80 text-sm hover:text-secondary transition-colors"
//                 >
//                   info@dbit.in
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Links */}
//           <div>
//             <h3 className="font-semibold text-lg mb-4">Academics</h3>
//             <ul className="space-y-2">
//               {footerLinks.academics.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-white/70 hover:text-secondary transition-colors text-sm"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-4">Admissions</h3>
//             <ul className="space-y-2">
//               {footerLinks.admissions.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-white/70 hover:text-secondary transition-colors text-sm"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {footerLinks.quick.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-white/70 hover:text-secondary transition-colors text-sm"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-white/60 text-sm">
//             {`\u00A9 ${new Date().getFullYear()} Don Bosco Institute of Technology. All rights reserved.`}
//           </p>

//           {/* Social Links */}
//           <div className="flex items-center gap-4">
//             {socialLinks.map((social) => {
//               const SocialIcon = social.icon
//               return (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-secondary hover:text-secondary-foreground transition-colors"
//                   aria-label={social.label}
//                 >
//                   <SocialIcon className="h-5 w-5" />
//                 </a>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
} from "lucide-react"

const footerLinks = {
  aboutUs: [
    { name: "Salesian of Don Bosco", href: "#" },
    { name: "Institute", href: "#" },
    { name: "Management", href: "#" },
    { name: "Vision & Mission", href: "#" },
    { name: "Website Contributors", href: "#" },
  ],
  quickLinks: [
    { name: "Admission", href: "#" },
    { name: "Exam Notices", href: "#" },
    { name: "Faculty", href: "#" },
    { name: "Student Chapters", href: "#" },
    { name: "Placement", href: "#" },
    { name: "News", href: "#" },
    { name: "Institute Blogs", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-[#222222] text-[#999999] pt-16 pb-8 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          {/* Brand and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               {/* Replace with your local logo path */}
              <img 
                src="/dbitlogo.webp" 
                alt="DBIT Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="leading-relaxed">
              Don Bosco Institute of Technology offers high-quality education to students in the field of engineering. 
              With our help, you can master any sphere you prefer, from computer engineering to mechanical engineering.
            </p>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="text-white font-bold text-base uppercase mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#3b82f6]">
              About Us
            </h3>
            <ul className="space-y-4">
              {footerLinks.aboutUs.map((link) => (
                <li key={link.name} className="flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-2 text-[#3b82f6]" />
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold text-base uppercase mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#3b82f6]">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name} className="flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-2 text-[#3b82f6]" />
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-base uppercase mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#3b82f6]">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-[#3b82f6] shrink-0" />
                <p>Kurla (West) Mumbai - 400070</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-[#3b82f6] shrink-0" />
                <p>022 68878700</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-[#3b82f6] shrink-0" />
                <a href="mailto:dbit@dbit.in" className="hover:text-white">dbit@dbit.in</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-white font-bold text-base uppercase mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#3b82f6]">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a key={social.label} href={social.href} className="text-[#999999] hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>Copyright 2026 © All rights reserved by Don Bosco Institute of Technology, Mumbai</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}