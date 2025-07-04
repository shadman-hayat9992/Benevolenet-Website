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
      price: "Starting at $2,500",
      timeline: "2-3 weeks",
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
      price: "Starting at $3,000",
      timeline: "3-4 weeks",
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
      price: "Starting at $5,000",
      timeline: "4-6 weeks",
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
      price: "Starting at $1,500",
      timeline: "2-3 weeks",
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
      price: "Starting at $4,000",
      timeline: "4-5 weeks",
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
      price: "Starting at $200/month",
      timeline: "Ongoing",
      color: "indigo",
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Custom design",
        "Mobile optimization",
        "Basic SEO setup",
        "Contact form",
        "1 month support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$5,999",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Custom design & branding",
        "Advanced SEO optimization",
        "Content management system",
        "E-commerce ready",
        "3 months support",
        "Analytics setup",
        "Social media integration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$12,999",
      description: "For large businesses with complex needs",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced functionality",
        "Database integration",
        "API development",
        "6 months support",
        "Training included",
        "Priority support",
      ],
      popular: false,
    },
  ]

  const ActiveServiceIcon = services[activeService].icon
  const ActiveServiceColor = services[activeService].color

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
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="font-semibold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-600">{service.timeline}</div>
                    </div>
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

      {/* Service Details Modal/Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div
                  className={`w-16 h-16 bg-${ActiveServiceColor}-100 rounded-xl flex items-center justify-center mr-4`}
                >
                  <ActiveServiceIcon className={`w-8 h-8 text-blue-600`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{services[activeService].title}</h3>
                  <p className="text-gray-600">{services[activeService].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <div className="space-y-3">
                    {services[activeService].features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-gray-900">{services[activeService].price}</div>
                      <div className="text-gray-600">Timeline: {services[activeService].timeline}</div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect package for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.name}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? "border-2 border-blue-500 scale-105" : "hover:-translate-y-2"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-gray-900 my-4">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        : ""
                    }`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Choose {pkg.name}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
