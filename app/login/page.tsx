"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github, Chrome, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    // Redirect to dashboard or home
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex overflow-hidden">
      {/* Left Side - Login Form */}
      <div className="flex-1 md:flex-[0.5] lg:flex-[0.5] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-xs w-full space-y-3">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-2 group mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Benevolenet</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back</h1>
            <p className="text-sm text-gray-600">Sign in to your account to continue</p>
          </div>

          {/* Social Login */}
          <div className="space-y-2">
            <Button
              type="button"
              variant="outline"
              className="w-full h-9 hover:bg-gray-50 transition-all duration-300 hover:scale-105 bg-transparent border-2 text-sm"
            >
              <Github className="w-4 h-4 mr-2" />
              Continue with GitHub
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full h-9 hover:bg-gray-50 transition-all duration-300 hover:scale-105 bg-transparent border-2 text-sm"
            >
              <Chrome className="w-4 h-4 mr-2" />
              Continue with Google
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-500">
                Or sign in with email
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-9 h-9 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 border-2"
                  placeholder="john@example.com"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="pl-9 pr-9 h-9 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 border-2"
                  placeholder="••••••••"
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                />
                <Label htmlFor="rememberMe" className="text-gray-600">
                  Remember me
                </Label>
              </div>
              <Link href="/forgot-password" className="text-blue-600 hover:text-blue-700 transition-colors">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-9 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Don't have an account? </span>
            <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Sign up for free
            </Link>
          </div>

          {/* Back to Home */}
          <div className="text-center pt-1">
            <Link
              href="/"
              className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors text-sm"
            >
              <ArrowLeft className="w-3 h-3 mr-1" />
              Back to home
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Design Showcase */}
      <div className="hidden sm:flex md:flex-[0.5] lg:flex-[0.5] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating Elements */}
        <div className="absolute top-16 left-16 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-3xl rotate-12 animate-float"></div>
        <div className="absolute top-32 right-24 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-2xl -rotate-12 animate-float-delayed"></div>
        <div className="absolute bottom-32 left-24 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/10 rounded-lg rotate-45 animate-pulse"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-white p-4 md:p-6 lg:p-8 text-center">
          <div className="max-w-sm md:max-w-md lg:max-w-lg">
            <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 animate-pulse">
              <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">B</span>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Innovate with Benevolenet Tech</h2>
            <p className="text-sm md:text-base lg:text-lg opacity-90 mb-4 md:mb-6 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions and expert support.
            </p>

            {/* Features */}
            <div className="space-y-3 text-left text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>AI-powered solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Scalable cloud infrastructure</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Dedicated customer success</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-xs opacity-80">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-xs opacity-80">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5★</div>
                <div className="text-xs opacity-80">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
