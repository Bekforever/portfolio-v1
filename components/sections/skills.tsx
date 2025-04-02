"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { skills } from "@/lib/data"
import {
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  FileJson,
  Braces,
  Database,
  Layers,
  Wifi,
  Wind,
  PaintBucket,
  Layout,
  Component,
  Palette,
  GitBranch,
  Code,
  Server,
  LayoutGrid,
} from "lucide-react"

// Map of skill names to icons
const getIconForSkill = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    html5: <Html5 className="h-6 w-6" />,
    css3: <Css3 className="h-6 w-6" />,
    javascript: <FileJson className="h-6 w-6" />,
    typescript: <Braces className="h-6 w-6" />,
    react: <Code className="h-6 w-6" />,
    nextjs: <LayoutGrid className="h-6 w-6" />,
    nodejs: <Server className="h-6 w-6" />,
    express: <Server className="h-6 w-6" />,
    redux: <Component className="h-6 w-6" />,
    database: <Database className="h-6 w-6" />,
    layers: <Layers className="h-6 w-6" />,
    wifi: <Wifi className="h-6 w-6" />,
    wind: <Wind className="h-6 w-6" />,
    paintbrush: <PaintBucket className="h-6 w-6" />,
    layout: <Layout className="h-6 w-6" />,
    component: <Component className="h-6 w-6" />,
    palette: <Palette className="h-6 w-6" />,
    "git-branch": <GitBranch className="h-6 w-6" />,
  }

  return iconMap[iconName] || <Code className="h-6 w-6" />
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">
            A comprehensive overview of my technical skills and technologies I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex flex-col items-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow interactive-hover"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 text-primary">
                {getIconForSkill(skill.icon)}
              </div>
              <h3 className="font-medium text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-6">My Development Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border interactive-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">01</span>
              </div>
              <h4 className="font-medium mb-2">Responsive Design</h4>
              <p className="text-sm text-muted-foreground">
                Creating interfaces that work flawlessly across all devices and screen sizes.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border interactive-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">02</span>
              </div>
              <h4 className="font-medium mb-2">Performance Optimization</h4>
              <p className="text-sm text-muted-foreground">
                Building applications with speed and efficiency as top priorities.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border interactive-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">03</span>
              </div>
              <h4 className="font-medium mb-2">Clean Code</h4>
              <p className="text-sm text-muted-foreground">Writing maintainable, scalable, and well-documented code.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

