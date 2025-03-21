"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Trophy,
  TrendingUp,
  Users,
  Star,
  Calendar,
  CheckCircle,
  XCircle,
} from "lucide-react";
import TipsterNavbar from "@/components/tipster-navbar";
import TipsterLeaderboard from "@/components/tipster-leaderboard";
import TipsterFeed from "@/components/tipster-feed";

interface TipsterDashboardContentProps {
  user: any;
}

export default function TipsterDashboardContent({
  user,
}: TipsterDashboardContentProps) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <TipsterNavbar user={user} />

      <div className="container mx-auto px-4 py-6">
        <Tabs
          defaultValue="dashboard"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-3 mb-8 bg-gray-900/80">
            <TabsTrigger
              value="dashboard"
              className="data-[state=active]:bg-green-600"
            >
              <Trophy className="mr-2 h-4 w-4" />
              Dashboard 🏆
            </TabsTrigger>
            <TabsTrigger
              value="feed"
              className="data-[state=active]:bg-green-600"
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Feed 📈
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="data-[state=active]:bg-green-600"
            >
              <Users className="mr-2 h-4 w-4" />
              Leaderboard 🏅
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-900/80 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-white">
                    Total Profit
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    All time performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-green-500">
                    +124.5
                  </div>
                  <p className="text-sm text-gray-400 mt-1">units</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-white">
                    Win Rate
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Success percentage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-green-500">62%</div>
                  <p className="text-sm text-gray-400 mt-1">from 215 tips</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-white">
                    Followers
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    People following you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white">347</div>
                  <p className="text-sm text-gray-400 mt-1">+24 this week</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Star className="mr-2 h-5 w-5 text-green-500" />
                  Submit New Tip 🌟
                </CardTitle>
                <CardDescription className="text-gray-400">
                  All tips use the standard 10-unit system for fair comparison
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sport" className="text-gray-200">
                        Sport
                      </Label>
                      <Select defaultValue="football">
                        <SelectTrigger className="bg-gray-800 border-gray-700">
                          <SelectValue placeholder="Select sport" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="football">Football</SelectItem>
                          <SelectItem value="basketball">Basketball</SelectItem>
                          <SelectItem value="baseball">Baseball</SelectItem>
                          <SelectItem value="hockey">Hockey</SelectItem>
                          <SelectItem value="tennis">Tennis</SelectItem>
                          <SelectItem value="mma">MMA/UFC</SelectItem>
                          <SelectItem value="boxing">Boxing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="event" className="text-gray-200">
                        Event/Match
                      </Label>
                      <Input
                        id="event"
                        placeholder="e.g. Lakers vs Warriors"
                        className="placeholder:text-gray-400"
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bet-type" className="text-gray-200">
                        Bet Type
                      </Label>
                      <Select defaultValue="moneyline">
                        <SelectTrigger className="bg-gray-800 border-gray-700">
                          <SelectValue placeholder="Select bet type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="moneyline">Moneyline</SelectItem>
                          <SelectItem value="spread">Spread</SelectItem>
                          <SelectItem value="total">Over/Under</SelectItem>
                          <SelectItem value="prop">Prop Bet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="odds" className="text-gray-200">
                        Odds
                      </Label>
                      <Input
                        id="odds"
                        placeholder="e.g. -110, +240"
                        className="placeholder:text-gray-400"
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="selection" className="text-gray-200">
                      Your Selection
                    </Label>
                    <Input
                      id="selection"
                      placeholder="e.g. Lakers to win, Over 220.5 points"
                      className="placeholder:text-gray-400"
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="analysis" className="text-gray-200">
                      Analysis/Reasoning
                    </Label>
                    <Textarea
                      id="analysis"
                      placeholder="Share your analysis and why you think this bet will win..."
                      className="placeholder:text-gray-400"
                      className="bg-gray-800 border-gray-700 min-h-[100px]"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center">
                      <div className="bg-green-600/30 text-green-400 px-3 py-1 rounded-md flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Standard 10-unit stake 🎲</span>
                      </div>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">
                      Submit Tip 🎯
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Recent Tips 📊</CardTitle>
                <CardDescription className="text-gray-400">
                  Your last 5 submitted tips
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      event: "Lakers vs Warriors",
                      selection: "Lakers -4.5",
                      odds: "-110",
                      result: "win",
                      profit: "+9.1",
                      date: "2 days ago",
                    },
                    {
                      event: "Celtics vs Bucks",
                      selection: "Over 224.5",
                      odds: "-105",
                      result: "loss",
                      profit: "-10",
                      date: "3 days ago",
                    },
                    {
                      event: "Chiefs vs Ravens",
                      selection: "Chiefs ML",
                      odds: "+135",
                      result: "win",
                      profit: "+13.5",
                      date: "5 days ago",
                    },
                    {
                      event: "McGregor vs Poirier",
                      selection: "Fight doesn't go the distance",
                      odds: "-150",
                      result: "win",
                      profit: "+6.7",
                      date: "1 week ago",
                    },
                    {
                      event: "Djokovic vs Alcaraz",
                      selection: "Alcaraz ML",
                      odds: "+120",
                      result: "win",
                      profit: "+12.0",
                      date: "1 week ago",
                    },
                  ].map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        {tip.result === "win" ? (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        )}
                        <div>
                          <p className="font-medium">{tip.event}</p>
                          <p className="text-sm text-gray-400">
                            {tip.selection} ({tip.odds})
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-bold ${tip.result === "win" ? "text-green-500" : "text-red-500"}`}
                        >
                          {tip.profit} units
                        </p>
                        <p className="text-xs text-gray-400">{tip.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feed">
            <TipsterFeed />
          </TabsContent>

          <TabsContent value="leaderboard">
            <TipsterLeaderboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
