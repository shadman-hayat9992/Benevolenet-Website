"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Github, Chrome, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    newsletter: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    // Redirect to dashboard or verification page
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const getPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const passwordStrength = getPasswordStrength(formData.password)
  const strengthColors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"]
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"]

  return (
    <div className="h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex overflow-hidden">
      {/* Left Side - Design Showcase */}
      <div className="hidden sm:flex md:flex-[0.5] lg:flex-[0.5] bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating Elements */}
        <div className="absolute top-12 left-12 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-24 right-16 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-16 w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-white/10 rounded-3xl -rotate-12 animate-bounce"></div>
        <div className="absolute bottom-16 right-24 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/10 rounded-lg rotate-45 animate-pulse"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-white p-4 md:p-6 lg:p-8 text-center">
          <div className="max-w-sm md:max-w-md lg:max-w-lg">
            <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 animate-pulse">
              <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">B</span>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Start Your Design Journey</h2>
            <p className="text-sm md:text-base lg:text-lg opacity-90 mb-4 md:mb-6 leading-relaxed">
              Join thousands of businesses who trust Benevolenet to create stunning websites.
            </p>

            {/* Benefits */}
            <div className="space-y-3 text-left text-sm">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                <span>Free consultation & planning</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                <span>Premium design resources</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                <span>Priority support</span>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-6 md:mt-8 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <p className="italic mb-2 md:mb-3 text-xs md:text-sm">
                "Benevolenet transformed our business. 300% increase in leads!"
              </p>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-xs md:text-sm">Sarah Johnson</div>
                  <div className="text-xs opacity-80">CEO, TechStart Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 md:flex-[0.5] lg:flex-[0.5] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="max-w-xs w-full space-y-2 my-2">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-2 group mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Benevolenet</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Create Account</h1>
            <p className="text-gray-600 text-sm">Join us and start building amazing websites</p>
          </div>

          {/* Social Signup */}
          <div className="space-y-2">
            <Button
              type="button"
              variant="outline"
              className="w-full h-8 hover:bg-gray-50 transition-all duration-300 hover:scale-105 bg-transparent border-2 text-xs"
            >
              <Github className="w-3.5 h-3.5 mr-2" />
              Sign up with GitHub
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full h-8 hover:bg-gray-50 transition-all duration-300 hover:scale-105 bg-transparent border-2 text-xs"
            >
              <Chrome className="w-3.5 h-3.5 mr-2" />
              Sign up with Google
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-br from-purple-50 via-white to-blue-50 text-gray-500">
                Or create account with email
              </span>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Label htmlFor="firstName" className="text-xs font-medium text-gray-700">
                  First Name
                </Label>
                <div className="relative">
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="pl-7 h-8 text-xs transition-all duration-300 focus:ring-2 focus:ring-purple-500 border-2"
                    placeholder="John"
                    required
                  />
                  <User className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="lastName" className="text-xs font-medium text-gray-700">
                  Last Name
                </Label>
                <div className="relative">
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="pl-7 h-8 text-xs transition-all duration-300 focus:ring-2 focus:ring-purple-500 border-2"
                    placeholder="Doe"
                    required
                  />
                  <User className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="email" className="text-xs font-medium text-gray-700">
                Email Address
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-8 h-8 text-xs transition-all duration-300 focus:ring-2 focus:ring-purple-500 border-2"
                  placeholder="john@example.com"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="password" className="text-xs font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="pl-8 pr-8 h-8 text-xs transition-all duration-300 focus:ring-2 focus:ring-purple-500 border-2"
                  placeholder="••••••••"
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="space-y-1">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          i < passwordStrength ? strengthColors[passwordStrength - 1] : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">{strengthLabels[passwordStrength - 1] || "Very Weak"}</span>
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="confirmPassword" className="text-xs font-medium text-gray-700">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="pl-8 h-8 text-xs transition-all duration-300 focus:ring-2 focus:ring-purple-500 border-2"
                  placeholder="••••••••"
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  required
                  className="mt-0.5"
                />
                <Label htmlFor="agreeToTerms" className="text-xs text-gray-600 leading-tight">
                  I agree to the{" "}
                  <Link href="/terms" className="text-purple-600 hover:text-purple-700">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-purple-600 hover:text-purple-700">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                  className="mt-0.5"
                />
                <Label htmlFor="newsletter" className="text-xs text-gray-600 leading-tight">
                  Subscribe to newsletter for tips
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading || !formData.agreeToTerms}
              className="w-full h-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-xs font-medium"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Creating...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center text-xs">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/login" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
              Sign in
            </Link>
          </div>

          {/* Back to Home */}
          <div className="text-center pt-1">
            <Link
              href="/"
              className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors text-xs"
            >
              <ArrowLeft className="w-3 h-3 mr-1" />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
