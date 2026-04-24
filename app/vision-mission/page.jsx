import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VisionMission } from "@/components/vision-mission"

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <VisionMission />
      </div>
      <Footer />
    </main>
  )
}
