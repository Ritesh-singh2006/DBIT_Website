import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Management } from "@/components/management"

export default function ManagementPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Management />
      </div>
      <Footer />
    </main>
  )
}
