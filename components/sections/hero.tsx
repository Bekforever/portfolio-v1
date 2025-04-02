"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Hi, I'm</span>
              <span className="text-primary">Bekpolat Aydarbaev</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">Frontend Developer</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              2+ years of experience in building highly interactive and scalable user interfaces with low latency
              performance. Passionate about creating exceptional web experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/bekpolat_aydarbaev.pdf" download="Bekpolat_Aydarbaev_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/bekforever13" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/bekforever13"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:aydarbaevb@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Bekpolat Aydarbaev"
                  className="rounded-full w-64 h-64 object-cover border-4 border-background shadow-xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 right-10 w-12 h-12 bg-primary/30 rounded-full blur-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}

