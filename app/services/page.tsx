"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Palette, Code, Smartphone, Search, Globe, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: Palette,
      title: "Custom Web Design",
      description: "Innovative designs that reflect your brand and engage your audience through cutting-edge tech.",
      features: [
        "Custom UI/UX Design",
        "Brand Integration",
        "User Experience Optimization",
        "Visual Hierarchy Planning",
        "Color Psychology Application",
        "Typography Selection",
      ],
      color: "blue",
    },
    {
      icon: Smartphone,
      title: "Responsive Development",
      description: "Mobile-first designs that look perfect on all devices, leveraging the latest tech for optimal UX.",
      features: [
        "Mobile-First Approach",
        "Cross-Browser Compatibility",
        "Touch-Friendly Interfaces",
        "Progressive Web App Features",
        "Performance Optimization",
        "Accessibility Standards",
      ],
      color: "purple",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Complete web applications built with modern technologies and innovative coding practices.",
      features: [
        "React/Next.js Development",
        "Database Integration",
        "API Development",
        "Authentication Systems",
        "Payment Integration",
        "Content Management",
      ],
      color: "green",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to help your website rank higher using innovative strategies.",
      features: [
        "Technical SEO Audit",
        "Keyword Research",
        "On-Page Optimization",
        "Site Speed Optimization",
        "Schema Markup",
        "Analytics Setup",
      ],
      color: "orange",
    },
    {
      icon: Globe,
      title: "E-Commerce Solutions",
      description:
        "Complete online stores with payment processing and inventory management, powered by innovative tech.",
      features: [
        "Shopping Cart Integration",
        "Payment Gateway Setup",
        "Inventory Management",
        "Order Processing",
        "Customer Accounts",
        "Analytics & Reporting",
      ],
      color: "red",
    },
    {
      icon: Headphones,
      title: "Maintenance & Support",
      description: "Ongoing website maintenance, updates, and technical support with innovative solutions.",
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Backup Management",
        "Performance Monitoring",
        "Content Updates",
        "Technical Support",
      ],
      color: "indigo",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From custom web design to full-stack development, we offer comprehensive solutions to bring your digital
            vision to life. Contact us at benevolenet436@gmail.com to get started.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-blue-200"
                onClick={() => setActiveService(index)}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-blue-600 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's bring your vision to life with our expert web design and development services. Get started today!
          </p>
          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Consultation
            </Button>
            <div className="text-sm opacity-90">
              📧 benevolenet436@gmail.com | 📞 +91 90754 51056 | 📞 +91 93567 24951
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
