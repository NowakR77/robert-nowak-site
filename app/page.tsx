import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/sections/hero"
import { Fitness } from "@/components/sections/fitness"
import { AIProjects } from "@/components/sections/ai-projects"
import { CFOTools } from "@/components/sections/cfo-tools"
import { Market } from "@/components/sections/market"
import { House } from "@/components/sections/house"
import { Dogs } from "@/components/sections/dogs"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Fitness />
      <AIProjects />
      <CFOTools />
      <Market />
      <House />
      <Dogs />
      <Footer />
    </main>
  )
}
