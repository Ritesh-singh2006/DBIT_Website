import React from "react"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Management() {
  const leaders = [
    {
      name: "Fr. Anthony Pinto, sdb",
      role: "Director",
      image: "/father.jpg",
      phone: "022-68878700",
      ext: "120",
      email: "director@dbit.in",
      message: "The Don Bosco Institute of Technology (DBIT) will be known to have an innovative, enjoyable and holistic learning environment that transforms individuals into socially conscious citizens the Don Bosco Way, and will lead in research and entrepreneurship in the area of sustainable technologies."
    },
    {
      name: "Fr. Mylin Noronha, sdb",
      role: "Administrator",
      image: "/NoronhaMylin.jpg",
      phone: "022-68878700",
      ext: "110",
      email: "administrator@dbit.in",
      message: "Welcome to a world of future young minds who work with honesty & integrity and excel in the use of technology, living in a holistic environment focussed towards social change enthused by the Salesian Charism of Don Bosco."
    },
    {
      name: "Fr. Charles Anthony, sdb",
      role: "Asst. Director",
      image: "/Fr. Charles Anthony, sdb.jpeg",
      phone: "022-68878700",
      ext: "510",
      email: "asst.director@dbit.in",
      message: [
        "When Don Bosco Institute of Technology (DBIT) was established, it was our hope and endeavour that every young person we engage with at DBIT would walk away with dignity, confident that he or she has the requisite competencies to be an innovative contributor to the professional world. But that is not all. Every DBITian would also be that kind of a Human Being that recognizes his or her responsibility to add value and goodness to Life and the world we live in. This would not only make India proud but would also enable our graduate to be on the world stage.",
        "So In keeping with the tradition of Don Bosco, DBIT creates an environment that fosters in depth learning. Striving for excellence is nurtured and supported with mentors and opportunities to charter one’s own path to life’s ambitions. This is enabled through innovative teaching learning methodologies partnering with industry experts, international agencies and research. All this with the feeling that you are among friends.",
        "DBIT is an institution that works in harmony with all stakeholders. Given the infrastructure, the well-equipped labs, spacious playgrounds, the kind of cultural and technical events ably organized by the different clubs, cells and chapters, each one’s expertise and talents are welcomed, enhanced and recognized. This results in higher self-worth, promotes cooperation, fuels aspirations and helps students discover themselves.",
        "We live in a Technology driven world but we cannot forget that the earth sustains us and we have a responsibility to care for it. So while grappling with the challenges of Industry 4.0 and racing to keep abreast of it we remind ourselves that we must contribute to a sustainable world. That is why at DBIT there is a thrust to work with and for the local community as well as the underprivileged and those on the fringes of society. Technology must be at the service of the poorest and the remotest. Only then will our education be inclusive and truly life enriching."
      ]
    },
    {
      name: "Dr. Sudhakar Mande",
      role: "Principal",
      image: "/principalnew.png",
      phone: "022-68878700",
      ext: null,
      email: "principal@dbit.in",
      message: [
        "As Principal of DBIT, it gives me immense pleasure to welcome you to our institute’s website which has been designed by our faculty and student team. As a Salesian Institute, DBIT has established practices for the holistic development of the student and faculty. As you browse through the contents you will come across various initiatives taken by us to not only enhance the technical skills of the student but to also enhance their ability to solve problems that are complex and multi-faceted. Community engagement is an important aspect of life on DBIT campus in addition to sports, cultural and technical activities. The importance of giving back to society is taught to the students through competitions, assignments, projects and so on.",
        "The Student Council and the student chapters of various professional institutions like IEEE, CSI, IETE, ACM, ISHRAE engage the students in activities beyond the curriculum to make them ready to take on the challenges of the real world. I would welcome your feedback on the contents and your suggestions to improve the look and feel of the website. Please write to me at principal@dbit.in"
      ]
    }
  ]

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
            <span className="uppercase text-gray-400">Management</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#3B82F6] font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Our Leadership
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase text-[#003366] mb-6">
            The Management
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            Meet the visionaries who guide DBIT towards academic excellence and holistic student development.
          </p>
        </div>

        <div className="space-y-12">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row gap-8 lg:gap-12 group hover:shadow-lg transition-shadow">
              
              {/* Profile & Contact Info */}
              <div className="w-full md:w-1/3 flex-shrink-0 flex flex-col items-center md:items-start">
                
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden mb-6 border-4 border-white shadow-md">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="mb-6 text-center md:text-left">
                  <h3 className="text-2xl font-black text-[#003366] mb-2">{leader.name}</h3>
                  <p className="text-[#3B82F6] font-bold text-sm tracking-widest uppercase">{leader.role}</p>
                </div>

                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <Phone className="w-4 h-4 text-[#003366]" />
                    <span>
                      {leader.phone}
                      {leader.ext && <span className="text-gray-400 ml-2">Ext: {leader.ext}</span>}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <Mail className="w-4 h-4 text-[#003366]" />
                    <a href={`mailto:${leader.email}`} className="hover:text-[#3B82F6] transition-colors">{leader.email}</a>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="w-full md:w-2/3">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                  From the Desk of the {leader.role}
                </h4>
                <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                  {Array.isArray(leader.message) ? (
                    leader.message.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))
                  ) : (
                    <p className="italic font-medium">"{leader.message}"</p>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>
    </div>
  )
}
