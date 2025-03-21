import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ThumbsUp,
  MessageSquare,
  UserPlus,
  Share2,
  CheckCircle,
  XCircle,
  Filter,
} from "lucide-react";

export default function TipsterFeed() {
  const tips = [
    {
      id: 1,
      tipster: "BettingPro",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BettingPro",
      event: "Lakers vs Warriors",
      selection: "Lakers -4.5",
      odds: "-110",
      analysis:
        "The Lakers have been dominant at home, winning their last 7 games by an average margin of 9.2 points. Warriors are struggling on the road and will be without Draymond Green. Expect LeBron and AD to control the paint and cover this spread easily.",
      time: "2 hours ago",
      likes: 124,
      comments: 18,
      result: "win",
      profit: "+9.1",
      sport: "basketball",
    },
    {
      id: 2,
      tipster: "SportsMaster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SportsMaster",
      event: "Arsenal vs Manchester United",
      selection: "Both Teams to Score",
      odds: "-120",
      analysis:
        "Both teams have scored in 8 of their last 10 meetings. Arsenal's defense has been leaky lately, conceding in 6 straight games. United always pose a threat on the counter with Rashford and Fernandes. Expect goals from both sides in this classic rivalry.",
      time: "5 hours ago",
      likes: 98,
      comments: 12,
      result: "win",
      profit: "+8.3",
      sport: "football",
    },
    {
      id: 3,
      tipster: "OddsWizard",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=OddsWizard",
      event: "McGregor vs Poirier",
      selection: "Fight doesn't go the distance",
      odds: "-150",
      analysis:
        "Both fighters are known for their finishing abilities. McGregor has 20 of his 22 wins by KO, while Poirier has 20 finishes in 27 wins. Their previous meeting ended in a 2nd round TKO. The bad blood between them will lead to an aggressive fight that's unlikely to reach the final bell.",
      time: "12 hours ago",
      likes: 156,
      comments: 24,
      result: "win",
      profit: "+6.7",
      sport: "mma",
    },
    {
      id: 4,
      tipster: "ValueFinder",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ValueFinder",
      event: "Celtics vs Bucks",
      selection: "Over 224.5",
      odds: "-105",
      analysis:
        "Both teams rank in the top 5 in offensive efficiency. The Celtics have gone over this total in 7 of their last 8 games, while the Bucks are averaging 118 points per game. With both Tatum and Giannis playing at MVP levels, expect a high-scoring affair.",
      time: "1 day ago",
      likes: 87,
      comments: 9,
      result: "loss",
      profit: "-10",
      sport: "basketball",
    },
    {
      id: 5,
      tipster: "BetHunter",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BetHunter",
      event: "Djokovic vs Alcaraz",
      selection: "Alcaraz ML",
      odds: "+120",
      analysis:
        "Alcaraz has beaten Djokovic in 2 of their last 3 meetings. The young Spaniard's power and speed match up well against Novak on clay. Djokovic has shown some inconsistency lately, while Alcaraz is in peak form after winning Barcelona. Great value on the underdog here.",
      time: "2 days ago",
      likes: 112,
      comments: 15,
      result: "win",
      profit: "+12.0",
      sport: "tennis",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Tabs defaultValue="all" className="w-full max-w-md">
          <TabsList className="bg-gray-900/80">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-green-600"
            >
              All Tips 📊
            </TabsTrigger>
            <TabsTrigger
              value="following"
              className="data-[state=active]:bg-green-600"
            >
              Following 👥
            </TabsTrigger>
            <TabsTrigger
              value="trending"
              className="data-[state=active]:bg-green-600"
            >
              Trending 🔥
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Button
          variant="outline"
          className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="space-y-6">
        {tips.map((tip) => (
          <Card key={tip.id} className="bg-gray-900/80 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <img
                    src={tip.avatar}
                    alt={tip.tipster}
                    className="w-10 h-10 rounded-full bg-gray-800"
                  />
                  <div>
                    <CardTitle className="text-base font-medium">
                      {tip.tipster}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {tip.time}
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-green-500 hover:text-green-400 hover:bg-green-900/20"
                >
                  <UserPlus className="h-4 w-4 mr-1" />
                  Follow
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium">{tip.event}</h3>
                    <p className="text-sm text-gray-400">
                      {tip.selection} ({tip.odds})
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`flex items-center px-2 py-1 rounded ${tip.result === "win" ? "bg-green-900/30 text-green-500" : "bg-red-900/30 text-red-500"}`}
                    >
                      {tip.result === "win" ? (
                        <>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          <span className="text-xs font-medium">
                            {tip.profit} units
                          </span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-3 w-3 mr-1" />
                          <span className="text-xs font-medium">
                            {tip.profit} units
                          </span>
                        </>
                      )}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-300">{tip.analysis}</p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white hover:bg-gray-800"
                  >
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {tip.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white hover:bg-gray-800"
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {tip.comments}
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>

              {tip.id === 2 && (
                <div className="pt-2 border-t border-gray-800">
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1"
                      alt="User"
                      className="w-8 h-8 rounded-full bg-gray-800 mt-1"
                    />
                    <div className="bg-gray-800 rounded-lg p-3 flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-sm">FootballFan</span>
                        <span className="text-xs text-gray-500">
                          1 hour ago
                        </span>
                      </div>
                      <p className="text-sm text-gray-300">
                        Great analysis! I've been watching Arsenal's defense
                        closely too. Tailing this bet 👍
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
