import type { Metadata } from "next"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import FloatingParticles from "@/components/floating-particles"

export const metadata: Metadata = {
  title: "Bekpolat Aydarbaev | Frontend Developer",
  description:
    "Portfolio of Bekpolat Aydarbaev, a Frontend Developer with 2+ years of experience building interactive user interfaces",
}

export default async function Home() {
  return (
    <main className="min-h-screen">
      <FloatingParticles />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

