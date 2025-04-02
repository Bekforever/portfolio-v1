"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/data"

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.tags.includes(filter))

  const uniqueTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">A showcase of my recent work, personal projects, and contributions.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className="rounded-full"
          >
            All
          </Button>
          {uniqueTags.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col border-border hover:shadow-lg transition-shadow interactive-hover">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

