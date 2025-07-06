"use client"

import { useState } from "react"
import { CheckCircle, Users, Award, Clock, Heart, Target, Lightbulb, Rocket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedCounter } from "@/components/animated-counter"

export default function AboutPage() {
  const [activeTeamMember, setActiveTeamMember] = useState(0)

  const teamMembers = [
    {
      name: "Shadman Hayat",
      role: "Creative Director & Founder",
      bio: "With over 8 years in web design, Alex leads our creative vision and ensures every project exceeds expectations.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["UI/UX Design", "Brand Strategy", "Creative Direction"],
    },
    {
      name: "Abdul Rahim",
      role: "Lead Developer",
      bio: "Sarah brings technical excellence to every project, specializing in modern web technologies and performance optimization. Specializing in cloud infrastructure and scalable systems.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["React/Next.js", "Node.js", "Database Design"],
    },
    {
      name: "Zaid Ashraf",
      role: "AI Specialist",
      bio: "Mike ensures our AI models are accurate and efficient, driving innovation and providing cutting-edge solutions.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["AI Strategy", "Machine Learning", "Data Science"],
    },
    {
      name: "Anjali Rathod",
      role: "Project Manager",
      bio: "Emily keeps projects on track and ensures seamless communication between our team and clients throughout the process. Focused on agile methodologies and efficient workflows.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Project Management", "Client Relations", "Quality Assurance"],
    },
    {
      name: "Khushi Majhetia",
      role: "AI Specialist",
      bio: "Mike ensures our AI models are accurate and efficient, driving innovation and providing cutting-edge solutions.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["AI Strategy", "Machine Learning", "Data Science"],
    },
    {
      name: "Sagar Dhara",
      role: "AI Specialist",
      bio: "Mike ensures our AI models are accurate and efficient, driving innovation and providing cutting-edge solutions.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["AI Strategy", "Machine Learning", "Data Science"],
    },
    {
      name: "Awais Ansari",
      role: "AI Specialist",
      bio: "Mike ensures our AI models are accurate and efficient, driving innovation and providing cutting-edge solutions.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["AI Strategy", "Machine Learning", "Data Science"],
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We love what we do and it shows in every pixel, every line of code, and every client interaction.",
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Beautiful design is just the beginning. We create websites that drive real business results.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of trends and technologies to deliver cutting-edge solutions for our clients.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships, not just websites.",
    },
  ]

  const milestones = [
    {
      year: "2022",
      event: "Benevolenet Founded",
      description: "Started with a vision to create innovative tech solutions",
    },
    {
      year: "2023",
      event: "First 5 Projects",
      description: "Reached our first major milestone with happy clients",
    },
    {
      year: "2024",
      event: "10+ Projects",
      description: "Celebrated completing over 10 successful projects",
    },
    {
      year: "2025",
      event: "Award Recognition",
      description: "Received 'Best Tech Innovation' award from Tech Excellence",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Benevolenet
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're a passionate team of technologists and innovators who believe that great technology can transform
                businesses. Since 2019, we've been helping companies create stunning digital experiences that drive real
                results.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">1+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">10+ Projects Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">100% Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <AnimatedCounter end={10} suffix="+" />
              <div className="text-gray-600 mt-2">Happy Clients</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <AnimatedCounter end={5} suffix="+" />
              <div className="text-gray-600 mt-2">Awards Won</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <AnimatedCounter end={1} suffix="+" />
              <div className="text-gray-600 mt-2">Years Experience</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Rocket className="w-8 h-8 text-orange-600" />
              </div>
              <AnimatedCounter end={100} suffix="%" />
              <div className="text-gray-600 mt-2">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind every successful project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeTeamMember === index ? "ring-2 ring-blue-500 shadow-lg" : "hover:-translate-y-2"
                }`}
                onClick={() => setActiveTeamMember(index)}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.slice(0, 2).map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Active Team Member Details */}
          <div className="max-w-3xl mx-auto">
            
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted web design partner
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something amazing together. Join the 10+ businesses that trust Benevolenet.
          </p>
          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Your Project Today
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
