import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/40 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bekpolat Aydarbaev</h3>
            <p className="text-muted-foreground mb-4">
              Frontend Developer with 2+ years of experience building highly interactive user interfaces with low
              latency performance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+998901301302" className="text-muted-foreground hover:text-primary transition-colors">
                  +99890 130 1302
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:aydarbaevb@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  aydarbaevb@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <a
                  href="https://linkedin.com/in/bekforever13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/bekforever13
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 text-primary" />
                <a
                  href="https://github.com/bekforever13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/bekforever13
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Bekpolat Aydarbaev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

