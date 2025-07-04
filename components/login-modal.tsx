"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Eye, EyeOff, Mail, Lock, User, ArrowRight, Github, Chrome } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    rememberMe: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    onClose()
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] sm:min-h-[600px]">
          {/* Left Side - Design Showcase */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center text-white relative overflow-hidden order-2 lg:order-1">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 animate-pulse">
                <span className="text-white font-bold text-2xl lg:text-3xl">B</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
                {isLogin ? "Welcome Back!" : "Join Benevolenet"}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-6 lg:mb-8 max-w-sm">
                {isLogin
                  ? "Sign in to access your dashboard and manage your projects with our premium web design tools."
                  : "Create your account and start building amazing websites with our professional design platform."}
              </p>

              {/* Floating Design Elements - Hidden on mobile */}
              <div className="hidden sm:block absolute top-10 left-10 w-12 h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full animate-bounce"></div>
              <div className="hidden sm:block absolute bottom-20 right-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-lg rotate-45 animate-pulse"></div>
              <div className="hidden sm:block absolute top-1/2 left-5 w-6 h-6 lg:w-8 lg:h-8 bg-white/10 rounded-full animate-ping"></div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 lg:mt-8">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">150+</div>
                  <div className="text-xs sm:text-sm opacity-80">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">98%</div>
                  <div className="text-xs sm:text-sm opacity-80">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">5★</div>
                  <div className="text-xs sm:text-sm opacity-80">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center relative order-1 lg:order-2">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="max-w-sm mx-auto w-full">
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {isLogin ? "Sign In" : "Create Account"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {isLogin ? "Enter your credentials to access your account" : "Fill in your details to get started"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                {!isLogin && (
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    <div className="space-y-1 lg:space-y-2">
                      <Label htmlFor="firstName" className="text-sm">
                        First Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="pl-8 lg:pl-10 h-9 lg:h-10 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                          placeholder="John"
                          required
                        />
                        <User className="absolute left-2.5 lg:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="space-y-1 lg:space-y-2">
                      <Label htmlFor="lastName" className="text-sm">
                        Last Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="pl-8 lg:pl-10 h-9 lg:h-10 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                          placeholder="Doe"
                          required
                        />
                        <User className="absolute left-2.5 lg:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-1 lg:space-y-2">
                  <Label htmlFor="email" className="text-sm">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-8 lg:pl-10 h-9 lg:h-10 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                      required
                    />
                    <Mail className="absolute left-2.5 lg:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-1 lg:space-y-2">
                  <Label htmlFor="password" className="text-sm">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-8 lg:pl-10 pr-8 lg:pr-10 h-9 lg:h-10 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                      placeholder="••••••••"
                      required
                    />
                    <Lock className="absolute left-2.5 lg:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 lg:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      ) : (
                        <Eye className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="space-y-1 lg:space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-8 lg:pl-10 h-9 lg:h-10 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                        placeholder="••••••••"
                        required
                      />
                      <Lock className="absolute left-2.5 lg:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-400" />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                    />
                    <Label htmlFor="rememberMe" className="text-xs sm:text-sm text-gray-600">
                      {isLogin ? "Remember me" : "I agree to Terms"}
                    </Label>
                  </div>
                  {isLogin && (
                    <button
                      type="button"
                      className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-9 lg:h-10 text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-3 h-3 lg:w-4 lg:h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      {isLogin ? "Signing In..." : "Creating Account..."}
                    </>
                  ) : (
                    <>
                      {isLogin ? "Sign In" : "Create Account"}
                      <ArrowRight className="ml-2 w-3 h-3 lg:w-4 lg:h-4" />
                    </>
                  )}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-xs sm:text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-9 lg:h-10 text-xs sm:text-sm hover:bg-gray-50 transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    <Github className="w-3 h-3 lg:w-4 lg:h-4 mr-1.5 lg:mr-2" />
                    GitHub
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-9 lg:h-10 text-xs sm:text-sm hover:bg-gray-50 transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    <Chrome className="w-3 h-3 lg:w-4 lg:h-4 mr-1.5 lg:mr-2" />
                    Google
                  </Button>
                </div>

                <div className="text-center text-xs sm:text-sm">
                  <span className="text-gray-600">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
