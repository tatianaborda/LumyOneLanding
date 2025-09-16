import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe,
  Code,
  Users,
  TrendingUp,
  CheckCircle,
  Play
} from "lucide-react"

export default function LumyOneLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/images/lumy-logo.png" alt="LumyOne Logo" className="w-8 h-8 object-contain" />
              <span className="font-manrope font-bold text-xl text-[#083470]">LumyOne</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#004AAD] transition-colors">
                Features
              </a>
              <a href="#contact" className="text-gray-600 hover:text-[#004AAD] transition-colors">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </nav>

{/* Hero Section */}
<section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="text-center relative">
      {/* Floating geometric shapes */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#004AAD] rounded-full opacity-20 floating-animation"></div>
      <div className="absolute top-20 -right-10 w-16 h-16 bg-[#004AAD] rounded-full opacity-20 floating-animation-delayed"></div>
      <div className="absolute -bottom-10 left-1/4 w-12 h-12 bg-[#004AAD] rounded-full opacity-20 floating-animation"></div>

      <div className="relative z-10">
        <Badge className="mb-6 bg-[#083470] text-white hover:bg-[#083470]/90">Built for Meridian Hackathon</Badge>
        <div className="flex items-center justify-center gap-0 mb-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-manrope font-bold text-balance leading-tight">
            The <span className="gradient-text">B2B Gateway</span><br/>
            to Stellar DeFi
          </h1>
          <img
            src="/images/lumy-sparkly.png"
            alt="Sparkly Lumy"
            className="w-24 h-20 md:w-40 md:h-32 lg:w-52 lg:h-40 object-contain floating-animation -ml-2"
          />
        </div>
        <p className="text-xl md:text-2xl text-gray-600 text-balance mb-8 max-w-4xl mx-auto leading-relaxed">
          Empower your business to offer secure DeFi payments, swaps and real time prices through a simple Telegram bot -
          no blockchain complexity required
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://t.me/LumyOneBot?start=website" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center lumyone-yellow hover:bg-[#E5B524] text-black font-medium text-lg px-8 py-4 rounded-md transition-colors"
          >
            Try LumyOne
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a 
            href="https://youtu.be/6XekziKVWOM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white text-lg px-8 py-4 bg-transparent border rounded-md transition-colors"
          >
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Why Choose LumyOne Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-manrope font-bold text-[#083470] mb-4">
        Why Choose LumyOne
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Eliminate DeFi integration barriers with our simple, powerful solution
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: <TrendingUp className="w-8 h-8 text-[#FACE29]" />,
          title: "No Development Costs",
          description: "Skip expensive blockchain integration - start using and customize our bot",
          problem: "vs. Expensive specialized developers"
        },
        {
          icon: <Code className="w-8 h-8 text-[#0097B2]" />,
          title: "No Smart Contracts",
          description: "Zero smart contract coding required - we handle all blockchain complexity for you",
          problem: "vs. Complex contract development"
        },
        {
          icon: <Users className="w-8 h-8 text-[#004AAD]" />,
          title: "Seamless User Experience",
          description: "Telegram's 800M users can access DeFi instantly - no wallet setup needed",
          problem: "vs. Complex wallet barriers"
        },
        {
          icon: <Zap className="w-8 h-8 text-[#083470]" />,
          title: "Fast & Affordable",
          description: "Leverage Stellar's speed and low costs while we handle the technical complexity",
          problem: "vs. Steep learning curves"
        },
        {
          icon: <Star className="w-8 h-8 text-[#FACE29]" />,
          title: "First B2B Solution",
          description: "Pioneering combination of account abstraction with Stellar DeFi for businesses",
          problem: "vs. Consumer-only solutions"
        },
        {
          icon: <Shield className="w-8 h-8 text-[#0097B2]" />,
          title: "Enterprise Ready",
          description: "Built for business-grade security, scale, and global financial inclusion",
          problem: "vs. Limited scalability"
        },
      ].map((benefit, index) => (
        <Card key={index} className="text-center hover:shadow-lg transition-shadow border-l-4">
          <CardHeader>
            <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-full w-fit">{benefit.icon}</div>
            <CardTitle className="text-lg font-manrope text-[#083470]">{benefit.title}</CardTitle>
            <p className="text-sm text-red-500 font-medium">{benefit.problem}</p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{benefit.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Solution Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-manrope font-bold text-[#083470] mb-4">
              LumyOne: Your Complete B2B DeFi Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to integrate Stellar DeFi into your business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Easy Integration */}
            <Card className="border-[#FACE29] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FACE29] rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-xl font-manrope text-[#083470]">Easy Integration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#0097B2] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">APIs and Stellar Account Abstraction SDK</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#0097B2] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Phone number onboarding creates secure Stellar accounts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#0097B2] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">No private key management for businesses</p>
                </div>
              </CardContent>
            </Card>

            {/* Powerful DeFi Features */}
            <Card className="border-[#0097B2] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#0097B2] rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-manrope text-[#083470]">Powerful DeFi Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#0097B2] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Token swaps via Soroswap API</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#0097B2] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Real-time prices with Reflector Network</p>
                </div>
              </CardContent>
            </Card>

            {/* Invisible Complexity */}
            <Card className="border-[#004AAD] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#004AAD] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-manrope text-[#083470]">Invisible Complexity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#0097B2] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Backend handles trustlines and risk checks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#0097B2] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Businesses focus on users, not blockchain</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


{/* CTA Section */}
<section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FACE29] to-[#0097B2]">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-manrope font-bold text-black mb-6">
      Ready to Revolutionize Your Business Finance?
    </h2>
    <p className="text-xl text-black/80 mb-12 max-w-2xl mx-auto leading-relaxed">
      Join the businesses already building on Stellar with LumyOne
    </p>
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
    <a 
      href="https://t.me/LumyOneBot?start=website" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 bg-transparent border rounded-md transition-colors font-medium"
    >
      Try LumyOne
    </a>
    <a 
      href="https://x.com/lumy_one" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 bg-transparent border rounded-md transition-colors"
    >
      Follow us in X
    </a>
    <a 
      href="https://github.com/mariaelisaaraya/lumyone" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 bg-transparent border rounded-md transition-colors"
    >
      Our Github
      <ArrowRight className="ml-2 w-5 h-5" />
    </a>
    </div>
  </div>
</section>


  {/* Footer */}
    <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-[#083470]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-3 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-br from-[#FACE29] to-[#0097B2] rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-white" />
            </div>
            <span className="font-manrope font-bold text-lg text-white">LumyOne</span>
          </div>
          <div className="flex items-center space-x-6 text-blue-200 mb-3 md:mb-0">
            <a href="#" className="hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm">
              Support
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-blue-800 text-center text-blue-200">
          <p className="text-sm">&copy; 2025 LumyOne. Built for Meridian Hackathon. Empowering businesses with Stellar DeFi.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}
