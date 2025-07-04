"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Star, Palette, Code, Smartphone, Search, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedCounter } from "@/components/animated-counter"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const testimonials = [
    {
      text: "Benevolenet transformed our online presence completely. The new website not only looks amazing but has increased our leads by 300%. Highly recommended!",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      rating: 5,
    },
    {
      text: "Professional, creative, and delivered on time. Our e-commerce site has never performed better. The team really understands modern web design.",
      author: "Mike Chen",
      role: "Founder, StyleHub",
      rating: 5,
    },
    {
      text: "Exceptional service from start to finish. They listened to our needs and created exactly what we envisioned. Our conversion rate doubled!",
      author: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const services = [
    {
      icon: Palette,
      title: "Custom Web Design",
      description: "Unique, tailored designs that reflect your brand and engage your audience",
      color: "blue",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first designs that look perfect on all devices and screen sizes",
      color: "purple",
    },
    {
      icon: Code,
      title: "Development",
      description: "Clean, efficient code using the latest technologies and best practices",
      color: "green",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to help your website rank higher in search results",
      color: "orange",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left px-4 lg:px-0">
              <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-100 text-blue-800 rounded-full text-xs lg:text-sm font-medium mb-4 lg:mb-6 animate-pulse">
                🚀 New: AI-Powered Design Tools Available
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Innovative Tech Solutions
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
                  That Drive Growth
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
                We deliver cutting-edge technology solutions and innovative web experiences that propel your business
                forward. From AI-driven insights to seamless user interfaces, we transform your digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                <Link href="/login">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto group hover:bg-gray-50 transition-all duration-300 bg-transparent"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Play className="mr-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
                  Watch Our Process
                </Button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 transform hover:scale-105 transition-transform duration-500 mx-4 lg:mx-0">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 lg:mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                      <span className="text-white font-bold text-lg lg:text-xl">B</span>
                    </div>
                    <p className="text-gray-600 text-sm lg:text-base">Your Website Preview</p>
                  </div>
                </div>
                <div className="space-y-2 lg:space-y-3">
                  <div className="h-3 lg:h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-3 lg:h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-3 lg:h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <AnimatedCounter end={150} suffix="+" />
              <div className="text-gray-600 group-hover:text-gray-900 transition-colors text-sm lg:text-base">
                Projects Completed
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <AnimatedCounter end={98} suffix="%" />
              <div className="text-gray-600 group-hover:text-gray-900 transition-colors text-sm lg:text-base">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center justify-center">
                <AnimatedCounter end={5} />
                <Star className="w-5 h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400 ml-1" />
              </div>
              <div className="text-gray-600 group-hover:text-gray-900 transition-colors text-sm lg:text-base">
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive web design solutions to help your business succeed online
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-4 lg:p-6">
                  <div
                    className={`w-10 h-10 lg:w-12 lg:h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`w-5 h-5 lg:w-6 lg:h-6 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors text-lg lg:text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm lg:text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 bg-transparent"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>

          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="flex justify-center space-x-1 mb-4 lg:mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg lg:text-xl text-gray-700 italic mb-4 lg:mb-6 text-center leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-base lg:text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-gray-600 text-sm lg:text-base">{testimonials[currentTestimonial].role}</div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center space-x-2 mt-6 lg:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something amazing together. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 bg-transparent"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
