"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  AlertTriangle,
  Star,
  MessageSquare,
  Camera,
  FileText,
  User,
  MapPin,
  Calendar,
  Clock,
  Award,
  ThumbsUp,
  ThumbsDown,
  Eye
} from "lucide-react"

export default function AuditSystem() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [engineerFeedback, setEngineerFeedback] = useState("")
  const [qualityRating, setQualityRating] = useState(5)
  const [citizenFeedback, setCitizenFeedback] = useState("")
  const [citizenRating, setCitizenRating] = useState(5)

  // Sample data - ye backend se aayega
  const completedProjects = [
    {
      id: "PRJ001",
      title: "Park Maintenance - Central Park",
      contractor: "Rajesh Construction Co.",
      department: "Parks & Recreation",
      location: "Central Park, Sector 12",
      completedDate: "2024-01-08",
      deadline: "2024-01-10",
      amount: "₹95,000",
      workProof: {
        videos: ["park_before.mp4", "park_after.mp4"],
        images: ["work_progress_1.jpg", "final_result.jpg"],
        submittedDate: "2024-01-08"
      },
      engineerVerification: {
        status: "Verified",
        verifiedBy: "Eng. Priya Sharma",
        verificationDate: "2024-01-09",
        qualityScore: 4.5,
        notes: "Excellent work quality. All landscaping done as per specifications. Equipment maintenance completed satisfactorily."
      },
      citizenFeedback: [
        {
          id: "CF001",
          citizenId: "CIT1247",
          rating: 5,
          comment: "Park looks amazing now! Thank you for the quick work.",
          date: "2024-01-10"
        },
        {
          id: "CF002", 
          citizenId: "CIT892",
          rating: 4,
          comment: "Good work, but some areas could be better maintained.",
          date: "2024-01-11"
        }
      ],
      auditReport: {
        status: "Completed",
        overallRating: 4.7,
        generatedDate: "2024-01-12",
        reportId: "AUD001"
      }
    },
    {
      id: "PRJ002",
      title: "Road Repair - MG Road",
      contractor: "Singh Infrastructure Ltd.",
      department: "Public Works",
      location: "MG Road, Sector 15",
      completedDate: "2024-01-05",
      deadline: "2024-01-15",
      amount: "₹2,20,000",
      workProof: {
        videos: ["road_repair_process.mp4"],
        images: ["before_repair.jpg", "during_work.jpg", "after_completion.jpg"],
        submittedDate: "2024-01-05"
      },
      engineerVerification: {
        status: "Pending",
        assignedTo: "Eng. Amit Kumar",
        scheduledDate: "2024-01-13"
      },
      citizenFeedback: [],
      auditReport: {
        status: "Pending"
      }
    }
  ]

  const handleEngineerVerification = (projectId) => {
    console.log(`Engineer verification for project ${projectId}:`, {
      qualityRating,
      feedback: engineerFeedback
    })
    setEngineerFeedback("")
    setQualityRating(5)
    alert("Engineer verification completed! Audit report will be generated.")
  }

  const handleCitizenFeedback = (projectId) => {
    console.log(`Citizen feedback for project ${projectId}:`, {
      rating: citizenRating,
      comment: citizenFeedback
    })
    setCitizenFeedback("")
    setCitizenRating(5)
    alert("Thank you for your feedback! It has been added to the audit report.")
  }

  const generateAuditReport = (project) => {
    const avgCitizenRating = project.citizenFeedback.length > 0 
      ? project.citizenFeedback.reduce((sum, feedback) => sum + feedback.rating, 0) / project.citizenFeedback.length 
      : 0
    
    const engineerRating = project.engineerVerification?.qualityScore || 0
    const overallRating = project.citizenFeedback.length > 0 
      ? (engineerRating + avgCitizenRating) / 2 
      : engineerRating

    return {
      projectId: project.id,
      projectTitle: project.title,
      contractor: project.contractor,
      department: project.department,
      completedDate: project.completedDate,
      deadline: project.deadline,
      onTime: new Date(project.completedDate) <= new Date(project.deadline),
      engineerRating,
      citizenRating: avgCitizenRating,
      overallRating: overallRating.toFixed(1),
      totalFeedbacks: project.citizenFeedback.length,
      workQuality: engineerRating >= 4 ? "Excellent" : engineerRating >= 3 ? "Good" : "Needs Improvement",
      citizenSatisfaction: avgCitizenRating >= 4 ? "High" : avgCitizenRating >= 3 ? "Medium" : "Low"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Audit & Verification System</h2>
        <Badge variant="secondary" className="bg-blue-500 text-white">
          <Award className="w-4 h-4 mr-2" />
          Quality Assurance
        </Badge>
      </div>

      {/* Completed Projects for Verification */}
      <div className="grid gap-4">
        {completedProjects.map((project) => (
          <Card key={project.id} className="glass border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="mt-1">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {project.location} • Contractor: {project.contractor}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge 
                    variant={project.auditReport.status === "Completed" ? "default" : "secondary"}
                    className={project.auditReport.status === "Completed" ? "bg-green-500 text-white" : ""}
                  >
                    {project.auditReport.status}
                  </Badge>
                  {new Date(project.completedDate) <= new Date(project.deadline) && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      On Time
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Amount:</span>
                  <p className="font-semibold text-green-600">{project.amount}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Completed:</span>
                  <p className="font-semibold">{project.completedDate}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Deadline:</span>
                  <p className="font-semibold">{project.deadline}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Department:</span>
                  <p className="font-semibold">{project.department}</p>
                </div>
              </div>

              {/* Work Proof Section */}
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Camera className="w-4 h-4 mr-2 text-blue-500" />
                  Work Proof Submitted
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Videos:</span>
                    <div className="mt-1">
                      {project.workProof.videos.map((video, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Camera className="w-3 h-3" />
                          <span className="text-blue-600 cursor-pointer hover:underline">{video}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Images:</span>
                    <div className="mt-1">
                      {project.workProof.images.map((image, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Eye className="w-3 h-3" />
                          <span className="text-blue-600 cursor-pointer hover:underline">{image}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Engineer Verification Section */}
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Engineer Verification
                </h4>
                {project.engineerVerification.status === "Verified" ? (
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-green-800">Verified by {project.engineerVerification.verifiedBy}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="font-semibold">{project.engineerVerification.qualityScore}/5</span>
                      </div>
                    </div>
                    <p className="text-sm text-green-700">{project.engineerVerification.notes}</p>
                    <p className="text-xs text-green-600 mt-1">Verified on {project.engineerVerification.verificationDate}</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-sm text-orange-700">
                        Assigned to: {project.engineerVerification.assignedTo}
                      </p>
                      <p className="text-xs text-orange-600">
                        Scheduled: {project.engineerVerification.scheduledDate}
                      </p>
                    </div>
                    
                    {/* Engineer Verification Form */}
                    <div className="border p-3 rounded-lg">
                      <h5 className="font-medium mb-2">Complete Verification</h5>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium">Quality Rating (1-5)</label>
                          <Select value={qualityRating.toString()} onValueChange={(value) => setQualityRating(parseInt(value))}>
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 - Poor</SelectItem>
                              <SelectItem value="2">2 - Below Average</SelectItem>
                              <SelectItem value="3">3 - Average</SelectItem>
                              <SelectItem value="4">4 - Good</SelectItem>
                              <SelectItem value="5">5 - Excellent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Verification Notes</label>
                          <Textarea
                            placeholder="Enter detailed verification notes..."
                            value={engineerFeedback}
                            onChange={(e) => setEngineerFeedback(e.target.value)}
                            rows={2}
                          />
                        </div>
                        <Button 
                          onClick={() => handleEngineerVerification(project.id)}
                          disabled={!engineerFeedback}
                          size="sm"
                          className="bg-green-500 hover:bg-green-600"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Complete Verification
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Citizen Feedback Section */}
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2 text-purple-500" />
                  Citizen Feedback ({project.citizenFeedback.length})
                </h4>
                
                {project.citizenFeedback.length > 0 && (
                  <div className="space-y-2 mb-3">
                    {project.citizenFeedback.map((feedback) => (
                      <div key={feedback.id} className="bg-purple-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Citizen #{feedback.citizenId}</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-semibold">{feedback.rating}/5</span>
                          </div>
                        </div>
                        <p className="text-sm text-purple-700">{feedback.comment}</p>
                        <p className="text-xs text-purple-600 mt-1">{feedback.date}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Citizen Feedback Form */}
                <div className="border p-3 rounded-lg">
                  <h5 className="font-medium mb-2">Add Your Feedback</h5>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Your Rating (1-5)</label>
                      <Select value={citizenRating.toString()} onValueChange={(value) => setCitizenRating(parseInt(value))}>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 - Very Poor</SelectItem>
                          <SelectItem value="2">2 - Poor</SelectItem>
                          <SelectItem value="3">3 - Average</SelectItem>
                          <SelectItem value="4">4 - Good</SelectItem>
                          <SelectItem value="5">5 - Excellent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Your Feedback</label>
                      <Textarea
                        placeholder="Share your experience with this completed work..."
                        value={citizenFeedback}
                        onChange={(e) => setCitizenFeedback(e.target.value)}
                        rows={2}
                      />
                    </div>
                    <Button 
                      onClick={() => handleCitizenFeedback(project.id)}
                      disabled={!citizenFeedback}
                      size="sm"
                      className="bg-purple-500 hover:bg-purple-600"
                    >
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Submit Feedback
                    </Button>
                  </div>
                </div>
              </div>

              {/* Audit Report Section */}
              {project.auditReport.status === "Completed" && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-blue-500" />
                    Final Audit Report
                  </h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    {(() => {
                      const report = generateAuditReport(project)
                      return (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-blue-800">Report ID: {project.auditReport.reportId}</span>
                            <div className="flex items-center">
                              <Star className="w-5 h-5 text-yellow-500 mr-1" />
                              <span className="text-lg font-bold text-blue-800">{report.overallRating}/5</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                            <div>
                              <span className="text-blue-600">Work Quality:</span>
                              <p className="font-semibold">{report.workQuality}</p>
                            </div>
                            <div>
                              <span className="text-blue-600">Citizen Satisfaction:</span>
                              <p className="font-semibold">{report.citizenSatisfaction}</p>
                            </div>
                            <div>
                              <span className="text-blue-600">Delivery:</span>
                              <p className="font-semibold">{report.onTime ? "On Time" : "Delayed"}</p>
                            </div>
                            <div>
                              <span className="text-blue-600">Total Feedbacks:</span>
                              <p className="font-semibold">{report.totalFeedbacks}</p>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <FileText className="w-4 h-4 mr-2" />
                              Download Report
                            </Button>
                            <Button variant="outline" size="sm">
                              <Award className="w-4 h-4 mr-2" />
                              Update Contractor Rating
                            </Button>
                          </div>
                        </div>
                      )
                    })()}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
