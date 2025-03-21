import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trophy, TrendingUp, ArrowUp, ArrowDown, Minus } from "lucide-react";

export default function TipsterLeaderboard() {
  const tipsters = [
    {
      rank: 1,
      name: "BettingPro",
      profit: 342.5,
      winRate: 68,
      tips: 412,
      change: "up",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BettingPro",
      isPrizeWinner: true,
    },
    {
      rank: 2,
      name: "SportsMaster",
      profit: 287.3,
      winRate: 64,
      tips: 356,
      change: "up",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SportsMaster",
    },
    {
      rank: 3,
      name: "OddsWizard",
      profit: 231.8,
      winRate: 61,
      tips: 298,
      change: "down",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=OddsWizard",
    },
    {
      rank: 4,
      name: "BetHunter",
      profit: 198.2,
      winRate: 59,
      tips: 325,
      change: "same",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BetHunter",
    },
    {
      rank: 5,
      name: "ValueFinder",
      profit: 176.9,
      winRate: 57,
      tips: 287,
      change: "up",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ValueFinder",
    },
    {
      rank: 6,
      name: "StatsGuru",
      profit: 154.3,
      winRate: 56,
      tips: 312,
      change: "down",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=StatsGuru",
    },
    {
      rank: 7,
      name: "LineBreaker",
      profit: 142.7,
      winRate: 55,
      tips: 276,
      change: "down",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LineBreaker",
    },
    {
      rank: 8,
      name: "BetInsider",
      profit: 124.5,
      winRate: 54,
      tips: 245,
      change: "up",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BetInsider",
    },
    {
      rank: 9,
      name: "ProPicker",
      profit: 112.8,
      winRate: 53,
      tips: 231,
      change: "same",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ProPicker",
    },
    {
      rank: 10,
      name: "SharpBettor",
      profit: 98.4,
      winRate: 52,
      tips: 218,
      change: "up",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SharpBettor",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900/80 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
            Monthly Prize Winners 🏆
          </CardTitle>
          <CardDescription className="text-gray-400">
            Top performing tipsters who won cash prizes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-900/40 to-green-600/20 rounded-lg border border-green-800/50">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=BettingPro"
                    alt="Winner"
                    className="w-12 h-12 rounded-full bg-gray-800"
                  />
                  <div className="absolute -top-1 -right-1 bg-yellow-500 text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">BettingPro</h3>
                  <p className="text-sm text-gray-400">April 2023 Winner</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-500">+342.5</p>
                <p className="text-sm text-gray-400">units profit</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=SportsMaster"
                      alt="Winner"
                      className="w-10 h-10 rounded-full bg-gray-700"
                    />
                    <div className="absolute -top-1 -right-1 bg-gray-300 text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">SportsMaster</h3>
                    <p className="text-xs text-gray-400">March 2023</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-500">+287.3</p>
                  <p className="text-xs text-gray-400">units</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=OddsWizard"
                      alt="Winner"
                      className="w-10 h-10 rounded-full bg-gray-700"
                    />
                    <div className="absolute -top-1 -right-1 bg-amber-700 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">OddsWizard</h3>
                    <p className="text-xs text-gray-400">February 2023</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-500">+231.8</p>
                  <p className="text-xs text-gray-400">units</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900/80 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
            Tipster Leaderboard 📈
          </CardTitle>
          <CardDescription className="text-gray-400">
            Ranked by total profit in units
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-2 text-xs font-medium text-gray-400">
                    RANK
                  </th>
                  <th className="text-left py-3 px-2 text-xs font-medium text-gray-400">
                    TIPSTER
                  </th>
                  <th className="text-right py-3 px-2 text-xs font-medium text-gray-400">
                    PROFIT
                  </th>
                  <th className="text-right py-3 px-2 text-xs font-medium text-gray-400">
                    WIN RATE
                  </th>
                  <th className="text-right py-3 px-2 text-xs font-medium text-gray-400">
                    TIPS
                  </th>
                  <th className="text-right py-3 px-2 text-xs font-medium text-gray-400">
                    TREND
                  </th>
                </tr>
              </thead>
              <tbody>
                {tipsters.map((tipster) => (
                  <tr
                    key={tipster.rank}
                    className="border-b border-gray-800 hover:bg-gray-800/50"
                  >
                    <td className="py-3 px-2">
                      <div className="flex items-center">
                        {tipster.rank === 1 ? (
                          <span className="w-6 h-6 rounded-full bg-yellow-500 text-black flex items-center justify-center text-xs font-bold">
                            {tipster.rank}
                          </span>
                        ) : tipster.rank === 2 ? (
                          <span className="w-6 h-6 rounded-full bg-gray-300 text-black flex items-center justify-center text-xs font-bold">
                            {tipster.rank}
                          </span>
                        ) : tipster.rank === 3 ? (
                          <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold">
                            {tipster.rank}
                          </span>
                        ) : (
                          <span className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs font-bold">
                            {tipster.rank}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center space-x-3">
                        <img
                          src={tipster.avatar}
                          alt={tipster.name}
                          className="w-8 h-8 rounded-full bg-gray-700"
                        />
                        <span className="font-medium">{tipster.name}</span>
                        {tipster.isPrizeWinner && (
                          <span className="bg-yellow-500/20 text-yellow-500 text-xs px-2 py-0.5 rounded">
                            🏆 Winner
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <span className="font-bold text-green-500">
                        +{tipster.profit}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <span>{tipster.winRate}%</span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <span>{tipster.tips}</span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      {tipster.change === "up" ? (
                        <div className="flex items-center justify-end">
                          <ArrowUp className="h-4 w-4 text-green-500" />
                        </div>
                      ) : tipster.change === "down" ? (
                        <div className="flex items-center justify-end">
                          <ArrowDown className="h-4 w-4 text-red-500" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-end">
                          <Minus className="h-4 w-4 text-gray-500" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
