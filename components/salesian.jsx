import React from "react"
import Link from "next/link"

export function Salesian() {
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
            <span className="uppercase text-gray-400">The Salesian of Don Bosco</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <p className="text-[#3B82F6] font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Our Founder
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase text-[#003366] mb-6">
            The Salesian of Don Bosco
          </h2>
          <p className="text-slate-600 text-xl italic font-medium">
            "A man with a vision and a mission."
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-gray-700 leading-loose text-lg space-y-8">
          <p>
            <strong className="text-gray-900">John Bosco</strong> was ordained a priest at the age of twenty-six. He was now called Don (Father) Bosco. He immediately began his work with orphans. He opened a hospice for boys where his mother served as the housekeeper. He not only fed the homeless boys whom he took in but also provided them with opportunities for livelihood skills. He spent long hours teaching them to read and write; he also taught them tailoring and shoemaking and quickly set up a printing press. Above all, he created a family atmosphere of trust and caring. Those who helped him were amazed at the transformation in several youngsters.
          </p>
          
          <p>
            Soon those associated with Don Bosco and his work began to accept him as their father and guide. Some expressed their desire to become like him. And so, the Salesian Society consisting of priests and lay brothers was born. (The word 'Salesian' was derived from St Francis de Sales, a saintly bishop noted for his gentle kindness and holiness. Don Bosco chose him as his personal model and later as the patron of his society.)
          </p>

          <p>
            The greatest gift that Don Bosco has left posterity is his unique way of educating, a method that was inspired by his one magnificent obsession: <span className="italic">"It is enough to know that you are young and abandoned for me to love you very much."</span> More than a century after the death of Don Bosco, thousands of people have dedicated themselves to the continuation of his apostolic love for young people all over the world. Their mission is to be "signs and bearers of God's love to the young."
          </p>

          <div className="bg-[#f8fbff] border-l-4 border-[#3B82F6] p-6 rounded-r-xl mt-8">
            <p className="text-gray-800">
              The <strong>"Salesians of Don Bosco"</strong> is an international society founded by Don Bosco. Catholic priests and Brothers who are members of the Society work for the development and education of the young especially those most at risk. Through its 3000 Schools, Colleges, Technical schools and youth centers in 125 countries, the Salesians of Don Bosco serve all young people irrespective of religious differences or social inequalities.
            </p>
            <p className="mt-4 text-gray-800">
              In India, Don Bosco Educational institutions are spread all over the country and are in great demand. The style of education consists in involving young people, their parents or guardians and the educators in a family atmosphere. The method adopted is one that was lived and handed down by Don Bosco himself - <strong>"The Preventive System"</strong> based on Reason, Faith in God and Loving Kindness. The goal is Integral Education. This embraces developing physical and aesthetic talents, training in occupational skills, fostering intellectual skills and competence, furthering cultural development and integration with others, including moral uprightness.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
