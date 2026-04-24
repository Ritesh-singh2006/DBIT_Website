import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Infrastructure } from "@/components/infrastructure"

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Infrastructure />
      </div>
      <Footer />
    </main>
  )
}
