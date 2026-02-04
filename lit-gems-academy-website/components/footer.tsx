import Link from "next/link"
import { GemIcon, Mail, Phone, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#subjects", label: "Subjects" },
    { href: "#pricing", label: "Pricing" },
    { href: "#booking", label: "Book a Session" },
  ]

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand Column */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-purple rounded-lg flex items-center justify-center">
                  <GemIcon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="font-[family-name:var(--font-heading)] font-bold text-xl text-white">
                    LitGems Academy
                  </span>
                  <p className="text-white/60 text-xs">Online Tutoring</p>
                </div>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                Helping young minds shine through personalized one-on-one online tutoring. 
                Building confidence and strong academic foundations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-white mb-4">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-white mb-4">
                Get in Touch
              </h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/+2347082261064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+2347082261064"
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-5 h-5" />
                  <span>+234 708 226 1064</span>
                </a>
                <a
                  href="mailto:litgemsacademy@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-5 h-5" />
                  <span>litgemsacademy@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-sm">
                © {currentYear} LitGems Academy. All rights reserved.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://wa.me/+2347082261064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
