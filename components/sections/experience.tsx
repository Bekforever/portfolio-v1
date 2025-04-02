"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"
import { experiences } from "@/lib/data"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">
            My professional journey as a Frontend Developer, showcasing my growth and achievements.
          </p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px md:transform md:-translate-x-1/2 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 md:px-8 mb-8 md:mb-0">
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className="hidden md:block absolute top-8 w-4 h-4 rounded-full bg-primary z-10 
                    ${index % 2 === 0 ? 'left-0 -ml-10' : 'right-0 -mr-10'}"
                  ></div>

                  <Card className="border border-border hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Building className="h-4 w-4 mr-1" />
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: experiences.length * 0.2 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Front-End Development</h3>
                <Badge variant="outline">Nov 2022 - May 2023</Badge>
              </div>
              <h4 className="text-muted-foreground mb-4">Texnopos IT Academy</h4>
              <p className="text-sm text-muted-foreground">
                Texnopos - is an educational center that helps students become developers with the help of top-skilled
                mentors from all over Uzbekistan.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

