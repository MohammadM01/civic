"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { GamificationSystem } from "@/components/GamificationSystem"
import {
  Camera,
  Bell,
  ThumbsUp,
  Clock,
  Globe,
  Hash,
  Eye,
  Navigation,
  Share2,
  CheckCircle,
  Trophy,
} from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function CitizenInterface() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("report")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [reportStep, setReportStep] = useState(1)
  const [selectedLanguage, setSelectedLanguage] = useState("en")

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "bn", name: "বাংলা" },
    { code: "te", name: "తెలుగు" },
    { code: "ta", name: "தமிழ்" },
    { code: "mr", name: "मराठी" },
  ]

  const categories = [
    { id: "pothole", name: "Potholes", icon: "🕳️", priority: "high" },
    { id: "streetlight", name: "Street Lights", icon: "💡", priority: "medium" },
    { id: "garbage", name: "Garbage", icon: "🗑️", priority: "medium" },
    { id: "water", name: "Water Issues", icon: "💧", priority: "high" },
    { id: "traffic", name: "Traffic", icon: "🚦", priority: "medium" },
    { id: "other", name: "Other", icon: "📝", priority: "low" },
  ]

  const myReports = [
    {
      id: "RPT001",
      title: "Large pothole on Main Street",
      status: "in-progress",
      priority: "high",
      date: "2024-01-15",
      verifications: 12,
      blockchainHash: "0x1a2b3c...",
      department: "Public Works",
    },
    {
      id: "RPT002",
      title: "Broken streetlight near park",
      status: "resolved",
      priority: "medium",
      date: "2024-01-10",
      verifications: 8,
      blockchainHash: "0x4d5e6f...",
      department: "Electrical",
    },
  ]

  return (
    <div className="min-h-screen flex items-start justify-center py-10">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      {/* Phone frame wrapper (simple border only) */}
      <div className="relative w-[390px] h-[780px] rounded-[44px] border-[10px] border-neutral-900 dark:border-cyan-400 bg-transparent shadow-[0_20px_60px_rgba(2,6,23,0.25)]">
        {/* Screen (scrollable) inset */}
        <div className="absolute inset-2 rounded-[34px] overflow-y-auto bg-background border border-neutral-200 dark:border-cyan-400/30">
      <div className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-border/30">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="hover:bg-primary/10">
            ← Back
          </Button>
          <div className="flex items-center gap-3">
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-24 h-10 glass border-border/30">
                <Globe className="w-4 h-4" />
              </SelectTrigger>
              <SelectContent className="glass">
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="ghost" size="sm" className="relative hover:bg-accent/10">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse"></span>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 glass p-2 h-16 neon-glow-blue">
            <TabsTrigger
              value="report"
              className="text-sm flex-col gap-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              <Camera className="w-5 h-5" />
              Report
            </TabsTrigger>
            <TabsTrigger
              value="track"
              className="text-sm flex-col gap-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              <Eye className="w-5 h-5" />
              Track
            </TabsTrigger>
            <TabsTrigger
              value="verify"
              className="text-sm flex-col gap-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              <ThumbsUp className="w-5 h-5" />
              Verify
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="text-sm flex-col gap-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              <Trophy className="w-5 h-5" />
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Report Tab */}
          <TabsContent value="report" className="space-y-4">
            {reportStep === 1 && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Issue Categories</CardTitle>
                    <CardDescription>Select the type of issue you're reporting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          variant={selectedCategory === category.id ? "default" : "outline"}
                          className="h-16 flex-col gap-1"
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <span className="text-lg">{category.icon}</span>
                          <span className="text-xs">{category.name}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Camera className="w-5 h-5 text-primary" />
                      Quick Report
                    </CardTitle>
                    <CardDescription>AI will automatically detect and categorize your issue</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="text-center">
                        <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Tap to capture issue</p>
                        <p className="text-xs text-muted-foreground mt-1">Photo or Video</p>
                      </div>
                    </div>

                    {/* Removed Gallery and Voice buttons as requested */}

                    <Button className="w-full h-12" size="lg" onClick={() => setReportStep(2)}>
                      <Navigation className="w-4 h-4 mr-2" />
                      Capture with GPS Location
                    </Button>
                  </CardContent>
                </Card>
              </>
            )}

            {reportStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Add Details</CardTitle>
                  <CardDescription>Help us understand the issue better</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Issue Title</label>
                    <Input placeholder="Brief description of the issue" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Detailed Description</label>
                    <Textarea placeholder="Provide more details about the issue..." className="min-h-20" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Urgency Level</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="How urgent is this issue?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Can wait</SelectItem>
                        <SelectItem value="medium">Medium - Needs attention</SelectItem>
                        <SelectItem value="high">High - Safety concern</SelectItem>
                        <SelectItem value="critical">Critical - Emergency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setReportStep(1)}>
                      Back
                    </Button>
                    <Button className="flex-1">
                      <Hash className="w-4 h-4 mr-2" />
                      Submit to Blockchain
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Track Tab */}
          <TabsContent value="track" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">My Reports</h2>
              <Badge variant="secondary">{myReports.length} Active</Badge>
            </div>

            {myReports.map((report) => (
              <Card key={report.id} className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={report.status === "resolved" ? "default" : "secondary"}
                      className={report.status === "resolved" ? "bg-accent text-accent-foreground" : ""}
                    >
                      {report.status === "resolved" ? (
                        <CheckCircle className="w-3 h-3 mr-1" />
                      ) : (
                        <Clock className="w-3 h-3 mr-1" />
                      )}
                      {report.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {report.priority}
                    </Badge>
                  </div>
                  <CardTitle className="text-base">{report.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-xs">
                    <span>ID: {report.id}</span>
                    <span>{report.date}</span>
                    <span>{report.department}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm">
                      <ThumbsUp className="w-4 h-4 text-accent" />
                      <span>{report.verifications} verifications</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="bg-muted p-2 rounded text-xs">
                    <div className="flex items-center gap-1 mb-1">
                      <Hash className="w-3 h-3" />
                      <span className="font-mono">Blockchain Hash:</span>
                    </div>
                    <span className="font-mono text-muted-foreground">{report.blockchainHash}</span>
                  </div>

                  {report.status === "in-progress" && (
                    <div className="mt-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Verify Tab */}
          <TabsContent value="verify" className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-lg font-semibold mb-2">Help Your Community</h2>
              <p className="text-sm text-muted-foreground">Verify nearby complaints to increase their priority</p>
            </div>

            <Card className="border-l-4 border-l-destructive">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="destructive">High Priority</Badge>
                  <span className="text-xs text-muted-foreground">0.2 km away</span>
                </div>
                <CardTitle className="text-base">Dangerous pothole blocking traffic</CardTitle>
                <CardDescription>Main Street near City Hospital</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded mb-3 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Photo of pothole</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <ThumbsUp className="w-4 h-4 text-accent" />
                    <span>23 verifications</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      Verify
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4">
            <GamificationSystem userId="current-user" />
          </TabsContent>
        </Tabs>
      </div>
        </div>
      </div>
    </div>
  )
}
