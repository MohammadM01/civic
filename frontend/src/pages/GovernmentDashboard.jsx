"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Shield, Zap, Trophy, CheckCircle, AlertTriangle, Bell } from "lucide-react"

export default function GovernmentDashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedPriority, setSelectedPriority] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [dateRange, setDateRange] = useState("7d")

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "public-works", name: "Public Works" },
    { id: "electrical", name: "Electrical" },
    { id: "sanitation", name: "Sanitation" },
    { id: "water", name: "Water Management" },
    { id: "traffic", name: "Traffic Management" },
  ]

  const complaints = [
    {
      id: "RPT001",
      title: "Large pothole on Main Street",
      description: "Dangerous pothole causing traffic issues near City Hospital",
      status: "in-progress",
      priority: "high",
      category: "pothole",
      department: "Public Works",
      assignedTo: "John Smith",
      location: "Main Street, Sector 15",
      reportedBy: "Citizen #1247",
      date: "2024-01-15",
      verifications: 23,
      blockchainHash: "0x1a2b3c4d5e6f...",
      aiSentiment: "urgent",
      estimatedCost: "₹15,000",
      photos: 2,
    },
    {
      id: "RPT002",
      title: "Broken streetlight near park",
      description: "Streetlight not working at Park Avenue intersection",
      status: "assigned",
      priority: "medium",
      category: "streetlight",
      department: "Electrical",
      assignedTo: "Mike Johnson",
      location: "Park Avenue, Sector 8",
      reportedBy: "Citizen #892",
      date: "2024-01-14",
      verifications: 12,
      blockchainHash: "0x7g8h9i0j1k2l...",
      aiSentiment: "moderate",
      estimatedCost: "₹3,500",
      photos: 1,
    },
  ]

  const topIssues = [
    { category: "Potholes", count: 342, trend: "+12%" },
    { category: "Street Lights", count: 189, trend: "-5%" },
    { category: "Garbage", count: 156, trend: "+8%" },
    { category: "Water Issues", count: 98, trend: "+15%" },
    { category: "Traffic", count: 67, trend: "-2%" },
  ]

  const departmentStats = [
    { name: "Public Works", pending: 45, resolved: 123, avgTime: "4.2d", efficiency: 85 },
    { name: "Electrical", pending: 23, resolved: 89, avgTime: "2.8d", efficiency: 92 },
    { name: "Sanitation", pending: 18, resolved: 67, avgTime: "1.5d", efficiency: 95 },
    { name: "Water Management", pending: 12, resolved: 34, avgTime: "3.1d", efficiency: 88 },
    { name: "Traffic Management", pending: 8, resolved: 23, avgTime: "2.2d", efficiency: 90 },
  ]

  const filteredComplaints = complaints.filter((complaint) => {
    if (selectedDepartment !== "all" && complaint.department.toLowerCase().replace(" ", "-") !== selectedDepartment)
      return false
    if (selectedPriority !== "all" && complaint.priority !== selectedPriority) return false
    if (selectedStatus !== "all" && complaint.status !== selectedStatus) return false
    return true
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate("/")} className="hover:bg-primary/10">
                ← Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Solution Dashboard</h1>
                <p className="text-sm text-muted-foreground">Smart Problem-Solving System</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="neon-glow-blue">
                <Shield className="w-4 h-4 mr-1" />
                Blockchain Verified
              </Badge>
              <Button variant="outline" size="sm" className="hover:bg-primary/10 neon-glow-purple bg-transparent">
                <Bell className="w-4 h-4 mr-2" />
                Alerts
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="complaints">Complaints</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Reports</p>
                      <p className="text-3xl font-bold text-primary">1,247</p>
                      <p className="text-xs text-accent">+12% this week</p>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Resolved</p>
                      <p className="text-3xl font-bold text-accent">892</p>
                      <p className="text-xs text-accent">+8% this week</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Resolution</p>
                      <p className="text-3xl font-bold">4.2d</p>
                      <p className="text-xs text-destructive">+0.3d slower</p>
                    </div>
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Satisfaction</p>
                      <p className="text-3xl font-bold text-accent">94%</p>
                      <p className="text-xs text-accent">+2% this month</p>
                    </div>
                    <Trophy className="w-8 h-8 text-accent" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Heatmap */}
              <Card>
                <CardHeader>
                  <CardTitle>Live Complaint Heatmap</CardTitle>
                  <CardDescription>Real-time visualization of reported issues across the city</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-destructive/20"></div>
                    <div className="relative text-center z-10">
                      <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Interactive map with 247 active reports</p>
                      <div className="flex justify-center gap-4 mt-4">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-destructive rounded-full"></div>
                          <span className="text-xs">High Priority</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-accent rounded-full"></div>
                          <span className="text-xs">Medium Priority</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                          <span className="text-xs">Low Priority</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Insights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    AI Insights & Auto-Routing
                  </CardTitle>
                  <CardDescription>Smart categorization and priority recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                    <div className="flex-1">
                      <p className="font-medium text-destructive">Critical: Pothole near school</p>
                      <p className="text-sm text-muted-foreground">
                        AI detected safety risk - Auto-routed to Public Works
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          AI Priority: 95%
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Sentiment: Urgent
                        </Badge>
                      </div>
                    </div>
                    <Button size="sm" variant="destructive">
                      Assign Now
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="flex-1">
                      <p className="font-medium text-accent">Medium: Streetlight maintenance</p>
                      <p className="text-sm text-muted-foreground">Scheduled for routine maintenance cycle</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          AI Priority: 68%
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Sentiment: Moderate
                        </Badge>
                      </div>
                    </div>
                    <Button size="sm" className="bg-accent text-accent-foreground">
                      Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Issues */}
            <Card>
              <CardHeader>
                <CardTitle>Top 5 Issues in City</CardTitle>
                <CardDescription>Most reported issues with trend analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topIssues.map((issue, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-card rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium">{issue.category}</p>
                          <p className="text-sm text-muted-foreground">{issue.count} reports</p>
                        </div>
                      </div>
                      <Badge variant={issue.trend.startsWith("+") ? "destructive" : "default"}>{issue.trend}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
