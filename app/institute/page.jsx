import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Institute } from "@/components/institute"

export default function InstitutePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Institute />
      </div>
      <Footer />
    </main>
  )
}
