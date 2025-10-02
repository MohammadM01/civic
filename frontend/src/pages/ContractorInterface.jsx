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
  ArrowLeft
} from "lucide-react"

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <Hammer className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Contractor Portal</h1>
                  <p className="text-sm text-muted-foreground">Manage tenders, bids, and projects</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
                <Badge variant="destructive" className="ml-2">3</Badge>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">{contractorProfile.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="tenders">Available Tenders</TabsTrigger>
            <TabsTrigger value="bids">My Bids</TabsTrigger>
            <TabsTrigger value="projects">Active Projects</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass neon-glow-orange">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-500">{contractorProfile.totalEarnings}</div>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                    +12% from last month
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Completed Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{contractorProfile.completedProjects}</div>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {contractorProfile.rating} avg rating
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Ongoing Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{contractorProfile.ongoingProjects}</div>
                  <div className="text-sm text-muted-foreground mt-1">Active work</div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Available Tenders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{availableTenders.length}</div>
                  <div className="text-sm text-muted-foreground mt-1">Ready to bid</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-orange-500" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                      <p className="text-sm font-medium">New tender available: Street Light Installation</p>
                      <p className="text-xs text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Work proof submitted for Drainage Cleaning</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-orange-500" />
                    Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
            </div>
          </TabsContent>

          {/* Available Tenders Tab */}
          <TabsContent value="tenders" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <h2 className="text-2xl font-bold">Available Tenders</h2>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by department" />
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

            <div className="grid gap-6">
              {availableTenders.map((tender) => (
                <Card key={tender.id} className="glass border-l-4 border-l-orange-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{tender.title}</CardTitle>
                        <CardDescription className="mt-2">{tender.description}</CardDescription>
                      </div>
                      <Badge 
                        variant={tender.priority === "High" ? "destructive" : tender.priority === "Medium" ? "default" : "secondary"}
                      >
                        {tender.priority} Priority
                      </Badge>
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
                        <p className="font-semibold">{tender.deadline}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Department:</span>
                        <p className="font-semibold">{tender.department}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Bids:</span>
                        <p className="font-semibold">{tender.bidsCount} submitted</p>
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
                      <div className="flex flex-wrap gap-2 mt-1">
                        {tender.requirements.map((req, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Input
                            placeholder="Enter your bid amount (₹)"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                          />
                          <Textarea
                            placeholder="Describe your approach and timeline..."
                            value={bidDescription}
                            onChange={(e) => setBidDescription(e.target.value)}
                            rows={3}
                          />
                        </div>
                        <div className="flex flex-col justify-end">
                          <Button 
                            onClick={() => handleBidSubmit(tender.id)}
                            className="w-full"
                            disabled={!bidAmount || !bidDescription}
                          >
                            <DollarSign className="w-4 h-4 mr-2" />
                            Submit Bid
                          </Button>
                          <Button variant="outline" className="w-full mt-2">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
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
  )
}
