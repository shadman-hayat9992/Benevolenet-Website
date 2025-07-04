"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Github, Filter, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const categories = ["All", "E-commerce", "Corporate", "Portfolio", "Landing Page", "Web App"]

  const projects = [
    {
      id: 1,
      title: "TechStart E-commerce Platform",
      category: "E-commerce",
      description: "Modern e-commerce platform with advanced filtering, payment integration, and inventory management.",
      longDescription:
        "A comprehensive e-commerce solution built for TechStart Inc. featuring advanced product filtering, secure payment processing, real-time inventory management, and a responsive design that increased their conversion rate by 300%.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Next.js", "Stripe", "MongoDB"],
      liveUrl: "https://techstart-demo.com",
      githubUrl: "https://github.com/Benevolent/techstart",
      client: "TechStart Inc.",
      year: "2024",
      results: [
        "300% increase in conversion rate",
        "50% reduction in bounce rate",
        "2x increase in average order value",
      ],
    },
    {
      id: 2,
      title: "StyleHub Fashion Store",
      category: "E-commerce",
      description: "Elegant fashion e-commerce site with virtual try-on features and social shopping integration.",
      longDescription:
        "A cutting-edge fashion e-commerce platform featuring virtual try-on technology, social shopping features, and an intuitive design that perfectly captures the brand's aesthetic while driving sales.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS"],
      liveUrl: "https://stylehub-demo.com",
      githubUrl: "https://github.com/Benevolent/stylehub",
      client: "StyleHub",
      year: "2024",
      results: ["200% increase in online sales", "40% higher user engagement", "25% increase in return customers"],
    },
    {
      id: 3,
      title: "GrowthCo Corporate Website",
      category: "Corporate",
      description: "Professional corporate website with interactive data visualizations and client portal.",
      longDescription:
        "A sophisticated corporate website featuring interactive data visualizations, secure client portal, and modern design that positions GrowthCo as an industry leader.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "D3.js", "Express", "MySQL"],
      liveUrl: "https://growthco-demo.com",
      githubUrl: "https://github.com/Benevolent/growthco",
      client: "GrowthCo",
      year: "2023",
      results: ["150% increase in lead generation", "60% improvement in user engagement", "35% faster page load times"],
    },
    {
      id: 4,
      title: "Creative Designer Portfolio",
      category: "Portfolio",
      description:
        "Stunning portfolio website for a creative designer with smooth animations and interactive galleries.",
      longDescription:
        "An award-winning portfolio website featuring smooth animations, interactive project galleries, and a unique design that perfectly showcases the designer's creative work.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Framer Motion", "Sanity CMS", "Vercel"],
      liveUrl: "https://creative-portfolio-demo.com",
      githubUrl: "https://github.com/Benevolent/creative-portfolio",
      client: "Sarah Creative",
      year: "2023",
      results: ["500% increase in client inquiries", "Featured in design galleries", "90% positive client feedback"],
    },
    {
      id: 5,
      title: "FinTech Landing Page",
      category: "Landing Page",
      description: "High-converting landing page for a fintech startup with interactive demos and lead capture.",
      longDescription:
        "A high-performance landing page designed to convert visitors into customers, featuring interactive product demos, social proof, and optimized conversion funnels.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Analytics"],
      liveUrl: "https://fintech-landing-demo.com",
      githubUrl: "https://github.com/Benevolent/fintech-landing",
      client: "FinTech Startup",
      year: "2024",
      results: ["45% conversion rate", "80% reduction in bounce rate", "3x increase in demo requests"],
    },
    {
      id: 6,
      title: "Project Management Web App",
      category: "Web App",
      description: "Full-featured project management application with real-time collaboration and reporting.",
      longDescription:
        "A comprehensive project management web application featuring real-time collaboration, advanced reporting, task management, and team communication tools.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://projectmanager-demo.com",
      githubUrl: "https://github.com/Benevolent/project-manager",
      client: "ProductivityCo",
      year: "2023",
      results: ["40% improvement in team productivity", "90% user adoption rate", "50% reduction in project delays"],
    },
  ]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const openLightbox = (projectId: number) => {
    setSelectedProject(projectId)
    setIsLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = "unset"
  }

  const navigateProject = (direction: "prev" | "next") => {
    if (selectedProject === null) return

    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1
    } else {
      newIndex = currentIndex < filteredProjects.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedProject(filteredProjects[newIndex].id)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return

      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") navigateProject("prev")
      if (e.key === "ArrowRight") navigateProject("next")
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxOpen, selectedProject])

  const currentProject = selectedProject ? projects.find((p) => p.id === selectedProject) : null

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their online presence with
            stunning, functional websites.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    : "hover:bg-blue-50 hover:border-blue-300"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(project.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">{project.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.client}</span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && currentProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={() => navigateProject("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={() => navigateProject("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <img
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className="bg-blue-600">{currentProject.category}</Badge>
                <span className="text-gray-600">
                  {currentProject.client} • {currentProject.year}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentProject.title}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{currentProject.longDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Results</h3>
                  <ul className="space-y-2">
                    {currentProject.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Site
                </Button>
                <Button variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something amazing together. Join our portfolio of successful projects with Benevolenet. Email
            us at benevolenet436@gmail.com
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
