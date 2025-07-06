"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const handleNavClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }, 100)
  }

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/benevolenet",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/benevolenet",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/benevolenet",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/benevolenet",
      color: "hover:text-blue-600",
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-lg font-bold">Benevolenet</span>
            </div>
            <p className="text-gray-500 text-xs mb-2 italic">Transforming Ideas into Digital Reality</p>
            <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
              <span>🏆 10+ Projects</span>
              <span>⭐ 5.0 Rating</span>
            </div>
            <p className="text-gray-500 text-xs mb-1">Est. 2023 • Based in India</p>
            <p className="text-gray-400 text-sm mb-3">Innovative tech solutions and web design.</p>
            <div className="text-gray-400 text-xs space-y-1">
              <p>📞 +91 90754 51056</p>
              <p>📧 benevolenet436@gmail.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Services</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              {["Web Design", "Development", "SEO", "Maintenance"].map((service) => (
                <li key={service}>
                  <Link href="/services" onClick={handleNavClick} className="hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Company</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={handleNavClick} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Business Hours</h4>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Mon-Fri: 9AM - 6PM</p>
              <p>Sat: 10AM - 4PM</p>
              <p>Email: Within 24hrs</p>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-800">
              <p className="text-gray-500 text-xs mb-1">Languages: English, Hindi</p>
              <p className="text-gray-500 text-xs">Timezone: IST (GMT+5:30)</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="text-center space-y-4">
            {/* Social Media */}
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-xs">Proudly serving clients worldwide with innovative solutions</p>
            <p className="text-gray-400 text-sm">&copy; 2024 Benevolenet. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
