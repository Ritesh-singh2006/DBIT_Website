import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Salesian } from "@/components/salesian"

export default function SalesianPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Salesian />
      </div>
      <Footer />
    </main>
  )
}
