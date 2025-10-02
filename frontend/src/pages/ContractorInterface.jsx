"use client"

import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Hammer,
  FileText,
  Clock,
  DollarSign,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Upload,
  Camera,
  MapPin,
  User,
  Star,
  TrendingUp,
  Award,
  Bell,
  Eye,
  MessageSquare,
  ArrowLeft,
  Trophy
} from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function ContractorInterface() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("dashboard")
  
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [bidAmount, setBidAmount] = useState("")
  const [bidDescription, setBidDescription] = useState("")
  const [issueReport, setIssueReport] = useState("")
  const [workProof, setWorkProof] = useState(null)

  // Sample data - ye backend se aayega
  const contractorProfile = {
    name: "Rajesh Construction Co.",
    rating: 4.7,
    completedProjects: 45,
    ongoingProjects: 3,
    totalEarnings: "₹12,50,000",
    department: "Public Works",
    license: "PWD/2023/1247"
  }

  const availableTenders = [
    {
      id: "TND001",
      title: "Road Repair - MG Road",
      department: "Public Works",
      description: "Pothole filling and road resurfacing work on MG Road from Junction A to Junction B",
      budget: "₹2,50,000",
      deadline: "2024-01-15",
      bidsCount: 5,
      location: "MG Road, Sector 15",
      priority: "High",
      postedDate: "2023-12-01",
      requirements: ["PWD License Required", "Minimum 2 years experience", "Own equipment"]
    },
    {
      id: "TND002", 
      title: "Street Light Installation",
      department: "Electrical",
      description: "Installation of 25 LED street lights in residential area",
      budget: "₹1,80,000",
      deadline: "2024-01-20",
      bidsCount: 3,
      location: "Green Valley Society",
      priority: "Medium",
      postedDate: "2023-12-03",
      requirements: ["Electrical License", "LED installation experience"]
    }
  ]

  const myBids = [
    {
      id: "BID001",
      tenderId: "TND001",
      title: "Road Repair - MG Road",
      bidAmount: "₹2,20,000",
      status: "Under Review",
      submittedDate: "2023-12-02",
      department: "Public Works"
    },
    {
      id: "BID002",
      tenderId: "TND003",
      title: "Park Maintenance",
      bidAmount: "₹95,000",
      status: "Won",
      submittedDate: "2023-11-28",
      department: "Parks & Recreation",
      workDeadline: "2024-01-10"
    }
  ]

  const activeProjects = [
    {
      id: "PRJ001",
      title: "Park Maintenance - Central Park",
      department: "Parks & Recreation",
      progress: 75,
      deadline: "2024-01-10",
      amount: "₹95,000",
      status: "In Progress",
      startDate: "2023-12-05",
      location: "Central Park, Sector 12"
    },
    {
      id: "PRJ002",
      title: "Drainage Cleaning - Block A",
      department: "Sanitation",
      progress: 30,
      deadline: "2024-01-25",
      amount: "₹1,20,000",
      status: "In Progress",
      startDate: "2023-12-10",
      location: "Block A, Phase 2"
    }
  ]

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "public-works", name: "Public Works" },
    { id: "electrical", name: "Electrical" },
    { id: "sanitation", name: "Sanitation" },
    { id: "water", name: "Water Management" },
    { id: "parks", name: "Parks & Recreation" }
  ]

  const handleBidSubmit = (tenderId) => {
    // Bid submission logic
    console.log(`Submitting bid for tender ${tenderId}:`, { bidAmount, bidDescription })
    setBidAmount("")
    setBidDescription("")
    alert("Bid submitted successfully!")
  }

  const handleIssueReport = (projectId) => {
    // Issue reporting logic
    console.log(`Reporting issue for project ${projectId}:`, issueReport)
    setIssueReport("")
    alert("Issue reported successfully! Department will review and respond.")
  }

  const handleWorkProofSubmit = (projectId) => {
    // Work proof submission logic
    console.log(`Submitting work proof for project ${projectId}:`, workProof)
    setWorkProof(null)
    alert("Work proof submitted! Engineer will verify and create audit report.")
  }

  return (
    <div className="min-h-screen flex items-start justify-center py-10">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      {/* Phone frame wrapper (simple border only) */}
      <div className="relative w-[390px] h-[780px] rounded-[44px] border-[10px] border-orange-600 dark:border-orange-400 bg-transparent shadow-[0_20px_60px_rgba(249,115,22,0.25)]">
        {/* Screen (scrollable) inset */}
        <div className="absolute inset-2 rounded-[34px] overflow-y-auto bg-background border border-orange-200 dark:border-orange-400/30">
          <div className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-border/30">
            <div className="flex items-center justify-between p-4">
              <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="hover:bg-orange-500/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <Hammer className="w-5 h-5 text-orange-500" />
                </div>
                <Button variant="ghost" size="sm" className="relative hover:bg-orange-500/10">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse"></span>
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto p-4 pb-20">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8 glass p-2 h-16 neon-glow-orange bg-card/50">
                <TabsTrigger
                  value="dashboard"
                  className="text-xs flex-col gap-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white transition-all duration-300 text-foreground"
                >
                  <Trophy className="w-4 h-4" />
                  Home
                </TabsTrigger>
                <TabsTrigger
                  value="tenders"
                  className="text-xs flex-col gap-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white transition-all duration-300 text-foreground"
                >
                  <FileText className="w-4 h-4" />
                  Tenders
                </TabsTrigger>
                <TabsTrigger
                  value="bids"
                  className="text-xs flex-col gap-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white transition-all duration-300 text-foreground"
                >
                  <DollarSign className="w-4 h-4" />
                  My Bids
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className="text-xs flex-col gap-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white transition-all duration-300 text-foreground"
                >
                  <Hammer className="w-4 h-4" />
                  Projects
                </TabsTrigger>
                <TabsTrigger
                  value="profile"
                  className="text-xs flex-col gap-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white transition-all duration-300 text-foreground"
                >
                  <User className="w-4 h-4" />
                  Profile
                </TabsTrigger>
              </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-4">
            {/* Welcome Section */}
            <Card className="glass neon-glow-orange bg-card border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{contractorProfile.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{contractorProfile.department}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-orange-500">{contractorProfile.rating}</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">{contractorProfile.completedProjects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3">
              <Card className="glass bg-card border-border">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{contractorProfile.totalEarnings}</div>
                    <div className="text-xs text-muted-foreground">Total Earnings</div>
                    <div className="flex items-center justify-center text-xs text-green-500 mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +12%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass bg-card border-border">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">{contractorProfile.ongoingProjects}</div>
                    <div className="text-xs text-muted-foreground">Active Projects</div>
                    <div className="text-xs text-orange-500 mt-1">In Progress</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Clock className="w-4 h-4 mr-2 text-orange-500" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Bid won for Park Maintenance</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">New tender: Street Light Installation</p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Work proof submitted</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Award className="w-4 h-4 mr-2 text-orange-500" />
                  Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>On-time Completion</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Quality Rating</span>
                    <span>4.7/5</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Bid Success Rate</span>
                    <span>68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Available Tenders Tab */}
          <TabsContent value="tenders" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Available Tenders</h2>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-32 text-xs">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept.id} value={dept.id}>
                      {dept.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {availableTenders.map((tender) => (
                <Card key={tender.id} className="glass border-l-4 border-l-orange-500">
                  <CardHeader className="pb-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{tender.title}</CardTitle>
                        <Badge 
                          variant={tender.priority === "High" ? "destructive" : tender.priority === "Medium" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {tender.priority}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">{tender.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-muted-foreground text-xs">Budget:</span>
                        <p className="font-semibold text-green-600">{tender.budget}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-xs">Deadline:</span>
                        <p className="font-semibold text-xs">{tender.deadline}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-xs">Department:</span>
                        <p className="font-semibold text-xs">{tender.department}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-xs">Bids:</span>
                        <p className="font-semibold text-xs">{tender.bidsCount} submitted</p>
                      </div>
                    </div>

                    <div>
                      <span className="text-muted-foreground text-xs">Location:</span>
                      <p className="flex items-center text-xs mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {tender.location}
                      </p>
                    </div>

                    <div>
                      <span className="text-muted-foreground text-xs">Requirements:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {tender.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-3 space-y-2">
                      <Input
                        placeholder="Enter your bid amount (₹)"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        className="text-sm"
                      />
                      <Textarea
                        placeholder="Describe your approach..."
                        value={bidDescription}
                        onChange={(e) => setBidDescription(e.target.value)}
                        rows={2}
                        className="text-sm"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <Button 
                          onClick={() => handleBidSubmit(tender.id)}
                          disabled={!bidAmount || !bidDescription}
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          <DollarSign className="w-3 h-3 mr-1" />
                          Submit Bid
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="w-3 h-3 mr-1" />
                          Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Bids Tab */}
          <TabsContent value="bids" className="space-y-6">
            <h2 className="text-2xl font-bold">My Bids</h2>
            
            <div className="grid gap-4">
              {myBids.map((bid) => (
                <Card key={bid.id} className="glass">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{bid.title}</CardTitle>
                      <Badge 
                        variant={
                          bid.status === "Won" ? "default" : 
                          bid.status === "Under Review" ? "secondary" : 
                          "destructive"
                        }
                        className={
                          bid.status === "Won" ? "bg-green-500 text-white" : ""
                        }
                      >
                        {bid.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Bid Amount:</span>
                        <p className="font-semibold text-green-600">{bid.bidAmount}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Submitted:</span>
                        <p className="font-semibold">{bid.submittedDate}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Department:</span>
                        <p className="font-semibold">{bid.department}</p>
                      </div>
                      {bid.workDeadline && (
                        <div>
                          <span className="text-muted-foreground">Work Deadline:</span>
                          <p className="font-semibold text-orange-600">{bid.workDeadline}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Active Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <h2 className="text-2xl font-bold">Active Projects</h2>
            
            <div className="grid gap-6">
              {activeProjects.map((project) => (
                <Card key={project.id} className="glass border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-1">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          {project.location}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{project.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Amount:</span>
                        <p className="font-semibold text-green-600">{project.amount}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Started:</span>
                        <p className="font-semibold">{project.startDate}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Deadline:</span>
                        <p className="font-semibold text-orange-600">{project.deadline}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Department:</span>
                        <p className="font-semibold">{project.department}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-3" />
                    </div>

                    <div className="border-t pt-4 space-y-4">
                      {/* Issue Reporting */}
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
                          Report Issue (if any)
                        </h4>
                        <div className="flex gap-2">
                          <Textarea
                            placeholder="Describe any genuine issues affecting the deadline..."
                            value={issueReport}
                            onChange={(e) => setIssueReport(e.target.value)}
                            rows={2}
                            className="flex-1"
                          />
                          <Button 
                            onClick={() => handleIssueReport(project.id)}
                            disabled={!issueReport}
                            variant="outline"
                          >
                            Report
                          </Button>
                        </div>
                      </div>

                      {/* Work Proof Submission */}
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Camera className="w-4 h-4 mr-2 text-blue-500" />
                          Submit Work Proof
                        </h4>
                        <div className="flex gap-2">
                          <Input
                            type="file"
                            accept="video/*,image/*"
                            onChange={(e) => setWorkProof(e.target.files[0])}
                            className="flex-1"
                          />
                          <Button 
                            onClick={() => handleWorkProofSubmit(project.id)}
                            disabled={!workProof}
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Submit
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Upload video/photo proof of completed work for verification
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-orange-500" />
                  Contractor Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Company Name</label>
                      <Input value={contractorProfile.name} readOnly />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">License Number</label>
                      <Input value={contractorProfile.license} readOnly />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Primary Department</label>
                      <Input value={contractorProfile.department} readOnly />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-500">{contractorProfile.rating}</div>
                        <div className="text-sm text-muted-foreground">Rating</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold">{contractorProfile.completedProjects}</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{contractorProfile.totalEarnings}</div>
                      <div className="text-sm text-muted-foreground">Total Earnings</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
