"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

// --- MEGA MENU DATA STRUCTURES ---

const aboutUsMenu = [
  {
    title: "College Links",
    links: [
      { name: "The Salesian of Don Bosco", href: "#" },
      { name: "Management", href: "#" },
      { name: "The Institute", href: "#" },
      { name: "Vision & Mission", href: "#" },
      { name: "Mandatory Disclosure", href: "#" },
      { name: "Infrastructure", href: "#" },
    ],
  },
  {
    title: "Certificates & Rankings",
    links: [
      { name: "UGC / AICTE", href: "#" },
      { name: "NAAC Accreditation", href: "#" },
      { name: "NIRF / ARIIA", href: "#" },
      { name: "ISO Certification", href: "#" },
      { name: "IQAC", href: "#" },
    ],
  },
  {
    title: "Autonomy & Disclosure",
    highlight: true,
    links: [
      { name: "Autonomy Documents", href: "#", bold: true },
      { name: "Self Disclosure", href: "#", bold: true },
      { name: "Internal Complaints Committee", href: "#" },
      { name: "Fee Refund Policy", href: "#" },
    ],
  },
]

const admissionMenu = [
  {
    title: "Engineering Admission",
    links: [
      { name: "Admission Enquiry Form", href: "#" },
      { name: "Procedure & Eligibility", href: "#" },
      { name: "Fees Details", href: "#" },
      { name: "Cutoff Marks", href: "#" },
      { name: "Frequently Asked Questions", href: "#" },
    ],
  },
  {
    title: "Scholarships",
    links: [
      { name: "Minority Scholarships", href: "#" },
      { name: "EBC Scholarship", href: "#" },
      { name: "Reserved Student Category", href: "#" },
    ],
  },
  {
    title: "Contact Details",
    highlight: true,
    links: [
      { name: "87790-75420", href: "tel:+918779075420" },
      { name: "dbitadm@gmail.com", href: "mailto:dbitadm@gmail.com" },
      { name: "FRA Fees Structure", href: "#", bold: true },
    ],
  },
]

const academicsMenu = [
  {
    title: "Departments",
    links: [
      { name: "Computer Engineering", href: "#" },
      { name: "Information Technology", href: "#" },
      { name: "EXTC Engineering", href: "#" },
      { name: "Mechanical Engineering", href: "#" },
      { name: "Basic Science & Humanities", href: "#" },
    ],
  },
  {
    title: "Faculty & Links",
    links: [
      { name: "Faculty Profile", href: "#" },
      { name: "Academic Calendar", href: "#" },
      { name: "Library & Moodle", href: "#" },
      { name: "Research & Mentors", href: "#" },
    ],
  },
  {
    title: "Examination & Services",
    highlight: true,
    links: [
      { name: "Exam Results", href: "#", bold: true },
      { name: "Time Tables", href: "#" },
      { name: "Exam Hall Ticket", href: "#" },
      { name: "Procurement of Documents", href: "#" },
    ],
  },
]

const campusLifeMenu = [
  {
    title: "Events & Fests",
    links: [
      { name: "Colosseum (Technical)", href: "#" },
      { name: "Hysteria (Cultural)", href: "#" },
      { name: "Innovex", href: "#" },
      { name: "Engineer's Day", href: "#" },
    ],
  },
  {
    title: "Student Bodies",
    links: [
      { name: "Student Council", href: "#" },
      { name: "Technical Clubs", href: "#" },
      { name: "Cultural Clubs", href: "#" },
      { name: "NSS Unit", href: "#" },
    ],
  },
  {
    title: "Media & News",
    highlight: true,
    links: [
      { name: "Latest News", href: "#", bold: true },
      { name: "Institute Blogs", href: "#" },
      { name: "DBIT Premium Newsletter", href: "#" },
      { name: "Photo Gallery", href: "#" },
    ],
  },
]

// --- COMPONENT LOGIC ---

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Reusable helper to render 3-column Mega Menu panels
  const renderMegaMenu = (data) => (
    <div className="grid grid-cols-3 gap-8 p-8 w-[850px] bg-white shadow-2xl border border-gray-100 rounded-b-xl">
      {data.map((section) => (
        <div key={section.title} className={section.highlight ? "bg-blue-50/60 p-5 rounded-lg border border-blue-100/50" : "p-2"}>
          <h4 className="font-bold text-gray-900 mb-5 text-xs uppercase tracking-widest border-b border-gray-100 pb-2">
            {section.title}
          </h4>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={`text-[14px] block transition-colors hover:text-[#3B82F6] ${
                    link.bold ? "text-[#3B82F6] font-bold" : "text-gray-600 font-normal"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
            <img 
              src="/dbit_logo_header.png" 
              alt="Don Bosco Institute of Technology" 
              className="h-16 w-auto" 
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                
                <NavigationMenuItem>
                  
                    <NavigationMenuLink className="px-4 py-2 hover:text-[#3B82F6] font-medium transition-colors text-gray-700">
                      Home
                    </NavigationMenuLink>
                  
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#3B82F6] font-medium transition-colors">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {renderMegaMenu(aboutUsMenu)}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#3B82F6] font-medium transition-colors">
                    Admission
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {renderMegaMenu(admissionMenu)}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#3B82F6] font-medium transition-colors">
                    Academics
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {renderMegaMenu(academicsMenu)}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className="px-4 py-2 hover:text-[#3B82F6] font-medium transition-colors text-gray-700">
                      Placements
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#3B82F6] font-medium transition-colors">
                    Campus Life
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {renderMegaMenu(campusLifeMenu)}
                  </NavigationMenuContent>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      
      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
           {["Home", "About Us", "Admission", "Academics", "Placements", "Campus Life"].map((item) => (
             <Link 
               key={item} 
               href="#" 
               className="block text-xl font-semibold text-gray-800 hover:text-[#3B82F6] transition-colors border-b border-gray-50 pb-2"
               onClick={() => setMobileMenuOpen(false)}
             >
               {item}
             </Link>
           ))}
        </div>
      )}
    </header>
  )
}