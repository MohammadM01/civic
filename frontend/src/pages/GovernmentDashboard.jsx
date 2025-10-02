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
import { MapPin, Shield, Zap, Trophy, CheckCircle, AlertTriangle, Bell, FileText, Plus, Calendar, DollarSign, Users, Eye, Hammer } from "lucide-react"
import AuditSystem from "@/components/AuditSystem"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function GovernmentDashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedPriority, setSelectedPriority] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [dateRange, setDateRange] = useState("7d")
  
  // Tender Management States
  const [showCreateTender, setShowCreateTender] = useState(false)
  const [tenderTitle, setTenderTitle] = useState("")
  const [tenderDescription, setTenderDescription] = useState("")
  const [tenderBudget, setTenderBudget] = useState("")
  const [tenderDeadline, setTenderDeadline] = useState("")
  const [tenderDepartment, setTenderDepartment] = useState("")
  const [tenderLocation, setTenderLocation] = useState("")
  const [tenderPriority, setTenderPriority] = useState("medium")
  const [tenderRequirements, setTenderRequirements] = useState("")

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

  const tenders = [
    {
      id: "TND001",
      title: "Road Repair - MG Road",
      description: "Pothole filling and road resurfacing work on MG Road from Junction A to Junction B",
      department: "Public Works",
      budget: "₹2,50,000",
      deadline: "2024-01-15",
      location: "MG Road, Sector 15",
      priority: "High",
      status: "Active",
      postedDate: "2023-12-01",
      bidsReceived: 5,
      requirements: "PWD License Required, Minimum 2 years experience, Own equipment"
    },
    {
      id: "TND002",
      title: "Street Light Installation",
      description: "Installation of 25 LED street lights in residential area",
      department: "Electrical",
      budget: "₹1,80,000",
      deadline: "2024-01-20",
      location: "Green Valley Society",
      priority: "Medium",
      status: "Active",
      postedDate: "2023-12-03",
      bidsReceived: 3,
      requirements: "Electrical License, LED installation experience"
    },
    {
      id: "TND003",
      title: "Park Maintenance",
      description: "Complete maintenance of Central Park including landscaping and equipment repair",
      department: "Parks & Recreation",
      budget: "₹95,000",
      deadline: "2024-01-10",
      location: "Central Park, Sector 12",
      priority: "Low",
      status: "Awarded",
      postedDate: "2023-11-25",
      bidsReceived: 7,
      requirements: "Landscaping experience, Equipment maintenance skills",
      awardedTo: "Rajesh Construction Co."
    }
  ]

  const filteredComplaints = complaints.filter((complaint) => {
    if (selectedDepartment !== "all" && complaint.department.toLowerCase().replace(" ", "-") !== selectedDepartment)
      return false
    if (selectedPriority !== "all" && complaint.priority !== selectedPriority) return false
    if (selectedStatus !== "all" && complaint.status !== selectedStatus) return false
    return true
  })

  const handleCreateTender = () => {
    // Tender creation logic
    const newTender = {
      id: `TND${String(tenders.length + 1).padStart(3, '0')}`,
      title: tenderTitle,
      description: tenderDescription,
      department: tenderDepartment,
      budget: tenderBudget,
      deadline: tenderDeadline,
      location: tenderLocation,
      priority: tenderPriority,
      status: "Active",
      postedDate: new Date().toISOString().split('T')[0],
      bidsReceived: 0,
      requirements: tenderRequirements
    }
    
    console.log("Creating tender:", newTender)
    
    // Reset form
    setTenderTitle("")
    setTenderDescription("")
    setTenderBudget("")
    setTenderDeadline("")
    setTenderDepartment("")
    setTenderLocation("")
    setTenderPriority("medium")
    setTenderRequirements("")
    setShowCreateTender(false)
    
    alert("Tender created successfully! Only contractors from the selected department can see this tender.")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
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
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="complaints">Complaints</TabsTrigger>
            <TabsTrigger value="tenders">Tenders</TabsTrigger>
            <TabsTrigger value="audit">Audit System</TabsTrigger>
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

          {/* Tenders Tab */}
          <TabsContent value="tenders" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Tender Management</h2>
              <Button onClick={() => setShowCreateTender(true)} className="bg-orange-500 hover:bg-orange-600">
                <Plus className="w-4 h-4 mr-2" />
                Create New Tender
              </Button>
            </div>

            {/* Create Tender Form */}
            {showCreateTender && (
              <Card className="glass border-orange-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-orange-500" />
                    Create New Tender
                  </CardTitle>
                  <CardDescription>
                    Create a tender that will be visible only to contractors from the selected department
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Tender Title</label>
                      <Input
                        placeholder="Enter tender title..."
                        value={tenderTitle}
                        onChange={(e) => setTenderTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Department</label>
                      <Select value={tenderDepartment} onValueChange={setTenderDepartment}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Public Works">Public Works</SelectItem>
                          <SelectItem value="Electrical">Electrical</SelectItem>
                          <SelectItem value="Sanitation">Sanitation</SelectItem>
                          <SelectItem value="Water Management">Water Management</SelectItem>
                          <SelectItem value="Parks & Recreation">Parks & Recreation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <Textarea
                      placeholder="Detailed description of the work required..."
                      value={tenderDescription}
                      onChange={(e) => setTenderDescription(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Budget (₹)</label>
                      <Input
                        placeholder="Enter budget amount..."
                        value={tenderBudget}
                        onChange={(e) => setTenderBudget(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Deadline</label>
                      <Input
                        type="date"
                        value={tenderDeadline}
                        onChange={(e) => setTenderDeadline(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Priority</label>
                      <Select value={tenderPriority} onValueChange={setTenderPriority}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Input
                      placeholder="Enter work location..."
                      value={tenderLocation}
                      onChange={(e) => setTenderLocation(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Requirements</label>
                    <Textarea
                      placeholder="List contractor requirements (licenses, experience, equipment, etc.)..."
                      value={tenderRequirements}
                      onChange={(e) => setTenderRequirements(e.target.value)}
                      rows={2}
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      onClick={handleCreateTender}
                      disabled={!tenderTitle || !tenderDescription || !tenderDepartment || !tenderBudget || !tenderDeadline}
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Create Tender
                    </Button>
                    <Button variant="outline" onClick={() => setShowCreateTender(false)}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Existing Tenders */}
            <div className="grid gap-4">
              {tenders.map((tender) => (
                <Card key={tender.id} className="glass border-l-4 border-l-orange-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{tender.title}</CardTitle>
                        <CardDescription className="mt-2">{tender.description}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge 
                          variant={
                            tender.status === "Active" ? "default" : 
                            tender.status === "Awarded" ? "secondary" : 
                            "destructive"
                          }
                          className={
                            tender.status === "Active" ? "bg-green-500 text-white" :
                            tender.status === "Awarded" ? "bg-blue-500 text-white" : ""
                          }
                        >
                          {tender.status}
                        </Badge>
                        <Badge 
                          variant={
                            tender.priority === "High" ? "destructive" : 
                            tender.priority === "Medium" ? "default" : 
                            "secondary"
                          }
                        >
                          {tender.priority} Priority
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <p className="font-semibold text-green-600">{tender.budget}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Deadline:</span>
                        <p className="font-semibold text-orange-600">{tender.deadline}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Department:</span>
                        <p className="font-semibold">{tender.department}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Bids Received:</span>
                        <p className="font-semibold">{tender.bidsReceived}</p>
                      </div>
                    </div>

                    <div>
                      <span className="text-muted-foreground text-sm">Location:</span>
                      <p className="flex items-center text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {tender.location}
                      </p>
                    </div>

                    <div>
                      <span className="text-muted-foreground text-sm">Requirements:</span>
                      <p className="text-sm mt-1">{tender.requirements}</p>
                    </div>

                    {tender.awardedTo && (
                      <div>
                        <span className="text-muted-foreground text-sm">Awarded To:</span>
                        <p className="text-sm mt-1 font-semibold text-blue-600">{tender.awardedTo}</p>
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Bids
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="w-4 h-4 mr-2" />
                        Manage Contractors
                      </Button>
                      {tender.status === "Active" && (
                        <Button variant="outline" size="sm" className="text-orange-600 border-orange-600">
                          <Hammer className="w-4 h-4 mr-2" />
                          Award Contract
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Audit System Tab */}
          <TabsContent value="audit">
            <AuditSystem />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
