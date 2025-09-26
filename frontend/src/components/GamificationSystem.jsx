"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Award, Crown, ThumbsUp, Camera, CheckCircle, Flame } from "lucide-react"

export function GamificationSystem({ userId }) {
  const [userStats, setUserStats] = useState(null)
  const [achievements, setAchievements] = useState([])
  const [leaderboard, setLeaderboard] = useState([])
  const [challenges, setChallenges] = useState([])
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadGamificationData = async () => {
      setIsLoading(true)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user stats
      const mockUserStats = {
        totalPoints: 1247,
        level: 8,
        levelName: "Civic Champion",
        nextLevelPoints: 1500,
        reportsSubmitted: 23,
        reportsResolved: 18,
        verificationsGiven: 45,
        streak: 7,
        rank: 12,
        totalUsers: 2847,
      }

      // Mock achievements
      const mockAchievements = [
        {
          id: "first-report",
          name: "First Steps",
          description: "Submit your first complaint report",
          icon: "🚀",
          category: "reporting",
          points: 50,
          earned: true,
          earnedDate: "2024-01-10",
          rarity: "common",
        },
        {
          id: "community-hero",
          name: "Community Hero",
          description: "Verify 25 complaints from other citizens",
          icon: "⭐",
          category: "verification",
          points: 200,
          earned: true,
          earnedDate: "2024-01-18",
          rarity: "rare",
        },
        {
          id: "streak-master",
          name: "Streak Master",
          description: "Maintain a 7-day activity streak",
          icon: "🔥",
          category: "community",
          points: 150,
          earned: true,
          earnedDate: "2024-01-20",
          rarity: "rare",
        },
        {
          id: "photo-journalist",
          name: "Photo Journalist",
          description: "Submit 15 reports with high-quality photos",
          icon: "📸",
          category: "reporting",
          points: 100,
          earned: true,
          earnedDate: "2024-01-15",
          rarity: "common",
        },
        {
          id: "civic-legend",
          name: "Civic Legend",
          description: "Reach 2000 total points",
          icon: "👑",
          category: "special",
          points: 500,
          earned: false,
          progress: 1247,
          maxProgress: 2000,
          rarity: "legendary",
        },
        {
          id: "neighborhood-guardian",
          name: "Neighborhood Guardian",
          description: "Report 50 issues in your area",
          icon: "🛡️",
          category: "reporting",
          points: 300,
          earned: false,
          progress: 23,
          maxProgress: 50,
          rarity: "epic",
        },
      ]

      // Mock leaderboard
      const mockLeaderboard = [
        {
          rank: 1,
          userId: "user1",
          username: "CivicMaster2024",
          points: 3247,
          level: 15,
          levelName: "Civic Legend",
          reportsCount: 89,
          avatar: "CM",
          badge: "👑",
        },
        {
          rank: 2,
          userId: "user2",
          username: "CommunityHero",
          points: 2891,
          level: 13,
          levelName: "City Guardian",
          reportsCount: 67,
          avatar: "CH",
          badge: "🏆",
        },
        {
          rank: 12,
          userId: userId,
          username: "You",
          points: 1247,
          level: 8,
          levelName: "Civic Champion",
          reportsCount: 23,
          avatar: "YU",
          isCurrentUser: true,
        },
      ]

      // Mock challenges
      const mockChallenges = [
        {
          id: "daily-reporter",
          title: "Daily Reporter",
          description: "Submit 1 complaint report today",
          type: "daily",
          progress: 0,
          maxProgress: 1,
          reward: 25,
          expiresAt: "2024-01-21T23:59:59Z",
          completed: false,
        },
        {
          id: "weekly-verifier",
          title: "Weekly Verifier",
          description: "Verify 10 complaints this week",
          type: "weekly",
          progress: 6,
          maxProgress: 10,
          reward: 100,
          expiresAt: "2024-01-28T23:59:59Z",
          completed: false,
        },
      ]

      setUserStats(mockUserStats)
      setAchievements(mockAchievements)
      setLeaderboard(mockLeaderboard)
      setChallenges(mockChallenges)
      setIsLoading(false)
    }

    loadGamificationData()
  }, [userId])

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "common":
        return "text-gray-600 border-gray-200"
      case "rare":
        return "text-blue-600 border-blue-200"
      case "epic":
        return "text-purple-600 border-purple-200"
      case "legendary":
        return "text-yellow-600 border-yellow-200"
      default:
        return "text-gray-600 border-gray-200"
    }
  }

  const getRarityBg = (rarity) => {
    switch (rarity) {
      case "common":
        return "bg-gray-50"
      case "rare":
        return "bg-blue-50"
      case "epic":
        return "bg-purple-50"
      case "legendary":
        return "bg-yellow-50"
      default:
        return "bg-gray-50"
    }
  }

  const getChallengeTypeColor = (type) => {
    switch (type) {
      case "daily":
        return "bg-green-100 text-green-800"
      case "weekly":
        return "bg-blue-100 text-blue-800"
      case "monthly":
        return "bg-purple-100 text-purple-800"
      case "special":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (isLoading || !userStats) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary animate-pulse" />
            Loading Gamification Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded animate-pulse"></div>
            <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* User Level Card */}
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-3xl text-primary-foreground font-bold">{userStats.level}</span>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Crown className="w-4 h-4 text-accent-foreground" />
                </div>
              </div>
              <CardTitle className="text-2xl">{userStats.levelName}</CardTitle>
              <CardDescription>
                Level {userStats.level} • Rank #{userStats.rank} of {userStats.totalUsers.toLocaleString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{userStats.totalPoints.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Points Earned</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress to Level {userStats.level + 1}</span>
                    <span>
                      {userStats.totalPoints}/{userStats.nextLevelPoints}
                    </span>
                  </div>
                  <Progress value={(userStats.totalPoints / userStats.nextLevelPoints) * 100} className="h-3" />
                  <div className="text-xs text-muted-foreground text-center">
                    {userStats.nextLevelPoints - userStats.totalPoints} points to next level
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{userStats.reportsSubmitted}</div>
                <div className="text-sm text-muted-foreground">Reports Submitted</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">{userStats.reportsResolved}</div>
                <div className="text-sm text-muted-foreground">Issues Resolved</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <ThumbsUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-500">{userStats.verificationsGiven}</div>
                <div className="text-sm text-muted-foreground">Verifications Given</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-500">{userStats.streak}</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Recent Achievements
              </CardTitle>
              <CardDescription>Your latest accomplishments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements
                  .filter((a) => a.earned)
                  .slice(0, 3)
                  .map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg border border-accent/20"
                    >
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium">{achievement.name}</div>
                        <div className="text-sm text-muted-foreground">{achievement.description}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-accent">+{achievement.points} pts</div>
                        <div className="text-xs text-muted-foreground">{achievement.earnedDate}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
