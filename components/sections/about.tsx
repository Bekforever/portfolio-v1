"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl -rotate-6 transform"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-background rounded-2xl rotate-3 transform"></div>
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Bekpolat Aydarbaev"
                className="object-cover h-full w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Frontend Developer with a passion for creating exceptional user experiences
            </h3>
            <p className="text-muted-foreground mb-6">
              With over 2 years of experience in Front-End Development, I specialize in building highly interactive user
              interfaces with low latency performance. I'm experienced in front-end architecture, UI/UX optimization,
              and have led small development teams.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines technical expertise with creative problem-solving to deliver solutions that not only
              meet but exceed client expectations. I'm constantly learning and adapting to new technologies to stay at
              the forefront of web development.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-medium mb-2">Name:</h4>
                <p className="text-muted-foreground">Bekpolat Aydarbaev</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Email:</h4>
                <p className="text-muted-foreground">aydarbaevb@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Phone:</h4>
                <p className="text-muted-foreground">+99890 130 1302</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Location:</h4>
                <p className="text-muted-foreground">Nukus, Uzbekistan</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-2">Languages:</h4>
              <div className="flex flex-wrap gap-2">
                {["English", "Russian", "Kazakh", "Karakalpak", "Uzbek"].map((language) => (
                  <span key={language} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <Button asChild variant="outline">
              <a href="/resume.pdf" download="Bekpolat_Aydarbaev_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Full Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

