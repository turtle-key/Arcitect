import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Zap, Eye, Download, Github, Sparkles, Brush, Monitor, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import InteractiveDemo from "@/components/interactive-demo"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Arcitect</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="#download" className="text-gray-600 hover:text-gray-900 transition-colors">
                Download
              </Link>
              <Link href="#support" className="text-gray-600 hover:text-gray-900 transition-colors">
                Support
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <Github className="w-4 h-4 mr-2" />
                <Link href="https://github.com/turtle-key/Arcitect">GitHub</Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
            <Sparkles className="w-3 h-3 mr-1" />
            Now in Beta
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Arc Experience
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A powerful custom theme editor for Arc Browser. Create, customize, and share beautiful themes that make your
            browsing experience uniquely yours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Mac
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              View on GitHub
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <p className="text-sm text-gray-500">Compatible with Arc Browser • macOS 12.0+ • Free & Open Source</p>
        </div>

        {/* Interactive Demo */}
        <div className="mt-16 max-w-5xl mx-auto">
          <InteractiveDemo />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to customize Arc</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools and intuitive design make theme creation effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Brush className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Theme Editor</h3>
                <p className="text-gray-600">
                  Intuitive drag-and-drop interface with real-time preview. See your changes instantly as you design.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Color Harmony</h3>
                <p className="text-gray-600">
                  Advanced color picker with harmony suggestions, gradients, and accessibility checks built-in.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Preview</h3>
                <p className="text-gray-600">
                  See exactly how your theme looks in Arc Browser with our integrated preview system.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">One-Click Apply</h3>
                <p className="text-gray-600">
                  Export and apply themes to Arc Browser instantly. No complex setup or configuration required.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Theme Library</h3>
                <p className="text-gray-600">
                  Browse and download themes from the community. Share your creations with other Arc users.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Platform</h3>
                <p className="text-gray-600">
                  Native macOS app with plans for Windows and Linux support. Built with modern technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to transform your Arc Browser?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of users who have already customized their browsing experience with Arcitect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3 bg-white text-purple-600 hover:bg-gray-100"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for macOS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                <Github className="w-5 h-5 mr-2" />
                <Link href="https://github.com/turtle-key/Arcitect">View Source Code</Link>
              </Button>
            </div>

            <p className="text-purple-200 text-sm mt-6">
              Free and open source • No account required • Works with Arc Browser 1.0+
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Arcitect</span>
              </div>
              <p className="text-gray-400">
                The ultimate theme editor for Arc Browser. Create, customize, and share beautiful themes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="https://github.com/turtle-key/Arcitect" className="hover:text-white transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Theme Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Bug Reports
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Arcitect. All rights reserved. Built with ❤️ for the Arc community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
