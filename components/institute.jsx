import React from "react"
import Link from "next/link"

export function Institute() {
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
            <span className="uppercase text-gray-400">The Institute</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <p className="text-[#3B82F6] font-bold tracking-[0.2em] uppercase text-xs mb-3">
            About DBIT
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase text-[#003366] mb-6">
            The Institute
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-gray-700 leading-loose text-lg space-y-8">
          <p>
            <strong className="text-gray-900">Fr. Tony D'Souza</strong>, the Provincial of the Mumbai province of the Salesians of Don Bosco entrusted the task of building the Don Bosco Institute of Technology (DBIT) to <strong>Fr. Mario Vaz</strong>, now its Director and his team comprising <strong>Fr. Jeffrey Fernandes</strong> the Principal of S.J.I.T.I and <strong>Fr. Anthony Santarita</strong> the then administrator.
          </p>
          
          <p>
            In the mind of the Salesians, DBIT would have to be an engineering college with a difference and so right from the start emphasis was laid on good infrastructure and well qualified staff that would cultivate and nurture every entrant into the portals of DBIT and inspire them to excellence. This meant setting up policies and processes that would ensure this objective.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-gray-700">
                We are fortunate in having <strong className="text-[#003366]">Dr. B. S. Bhatt</strong>, former principal of VJTI as our advisor who guides us every step of the way.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-gray-700">
                <strong className="text-[#003366]">Mr. Albert D'souza</strong>, a friend of the Salesians was instrumental in ensuring that every requirement for the engineering college was met.
              </p>
            </div>
          </div>

          <p>
            In <strong className="text-gray-900">Dr. S.Krishnamoorthy</strong>, the Salesians found a man not only highly qualified and experienced but also a person with sound values and pedagogical principles that were akin to the philosophy of Don Bosco's system of education.
          </p>

          <div className="bg-blue-50/50 p-8 rounded-2xl mt-8 text-center border border-blue-100">
            <p className="text-xl font-serif text-[#003366] italic mb-0">
              "Innovation, quality systems and processes that focus on development and growth for both faculty and students, are goals that are constantly being pursued. It is our cherished hope that every student who passes out of DBIT will be self-reliant and a socially conscious engineer."
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
