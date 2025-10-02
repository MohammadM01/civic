"use client"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Camera, Users, Shield, Zap, Trophy, CheckCircle, Hammer } from "lucide-react"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-4 px-6 py-3 glass neon-glow-blue text-base font-semibold float-animation bg-white/90 text-primary border-primary/20"
            >
              <Shield className="w-5 h-5 mr-2" />
              Blockchain-Powered Transparency
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 text-balance slide-in-left">
              Solve Civic Problems with{" "}
              <span className="text-blue-600 font-bold">
                Smart Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty font-medium slide-in-right">
              Report issues instantly, track solutions transparently, and build stronger communities through AI-powered
              problem-solving and blockchain accountability.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="text-xl px-12 py-8 gradient-primary text-primary-foreground neon-glow-primary hover:scale-105 transition-all duration-300 scale-on-hover font-semibold shadow-lg"
                onClick={() => navigate("/citizen")}
              >
                <Camera className="w-6 h-6 mr-3" />
                Citizens Mobile App
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-xl px-12 py-8 glass border-primary/20 text-foreground hover:bg-primary/10 hover:scale-105 transition-all duration-300 font-semibold bg-white/50 scale-on-hover neon-glow-blue backdrop-blur-md"
                onClick={() => navigate("/government")}
              >
                <Users className="w-6 h-6 mr-3" />
                Government Portal
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-xl px-12 py-8 glass border-orange-500/20 text-foreground hover:bg-orange-500/10 hover:scale-105 transition-all duration-300 font-semibold bg-white/50 scale-on-hover neon-glow-orange backdrop-blur-md"
                onClick={() => navigate("/contractor")}
              >
                <Hammer className="w-6 h-6 mr-3" />
                Contractors Portal
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Problem-Solving Innovation</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Advanced technology that transforms civic challenges into actionable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-10 h-10 text-primary" />}
              title="Blockchain Transparency"
              description="Every complaint gets a tamper-proof hash. Complete audit trail that builds trust between citizens and government."
              badge="🔥 Big USP"
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10 text-secondary" />}
              title="AI-Powered Solutions"
              description="Smart categorization, priority ranking, and sentiment analysis. AI detects urgency and routes problems automatically."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10 text-chart-3" />}
              title="Crowdsourced Verification"
              description="Citizens verify problems with one tap. More verifications = higher priority. Reduces spam and fake reports."
            />
            <FeatureCard
              icon={<MapPin className="w-10 h-10 text-secondary" />}
              title="Smart Geofencing"
              description="Detects duplicate problems in the same area. Future IoT integration for automatic issue detection."
            />
            <FeatureCard
              icon={<Trophy className="w-10 h-10 text-primary" />}
              title="Gamified Engagement"
              description="Reward system with points, badges, and leaderboards. Keeps citizens motivated to solve civic problems."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10 text-chart-3" />}
              title="Automated Proof of Work"
              description="Officers upload before-after photos. Smart contracts auto-close verified solutions on blockchain."
            />
          </div>
        </div>
      </div>

      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl float-animation"></div>
          <div
            className="absolute bottom-10 right-10 w-48 h-48 bg-blue-100/40 rounded-full blur-2xl float-animation"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 slide-in-left">Solving Problems at Scale</h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto slide-in-right">
            Real impact through technology-driven civic engagement
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="glass neon-glow-blue p-8 rounded-2xl scale-on-hover">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15,247</div>
              <div className="text-muted-foreground text-lg">Problems Solved</div>
            </div>
            <div className="glass neon-glow-teal p-8 rounded-2xl scale-on-hover">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2.3 Days</div>
              <div className="text-muted-foreground text-lg">Avg Resolution Time</div>
            </div>
            <div className="glass neon-glow-purple p-8 rounded-2xl scale-on-hover">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">94%</div>
              <div className="text-muted-foreground text-lg">Citizen Satisfaction</div>
            </div>
            <div className="glass neon-glow-blue p-8 rounded-2xl scale-on-hover">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">₹2.1Cr</div>
              <div className="text-muted-foreground text-lg">Budget Optimized</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-primary/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Ready to Transform Your City?</h2>
          <p className="text-2xl text-muted-foreground mb-12">
            Join the future of civic engagement with blockchain transparency and AI insights
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-xl px-12 py-8 gradient-primary neon-glow-primary hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => navigate("/citizen")}
            >
              Start Reporting Issues
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-12 py-8 glass border-primary/20 hover:bg-primary/10 hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-md"
              onClick={() => navigate("/government")}
            >
              Access Government Dashboard
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-12 py-8 glass border-orange-500/20 hover:bg-orange-500/10 hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-md"
              onClick={() => navigate("/contractor")}
            >
              Join as Contractor
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description, badge }) {
  return (
    <Card className="relative overflow-hidden glass border-border/20 hover:border-primary/30 transition-all duration-300 card-hover neon-glow-blue group float-animation bg-white/80">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 group-hover:from-primary/25 group-hover:to-accent/25 transition-all duration-300 shadow-sm">
            {icon}
          </div>
          {badge && (
            <Badge
              variant="secondary"
              className="text-sm px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold border border-primary/20"
            >
              {badge}
            </Badge>
          )}
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg leading-relaxed text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
