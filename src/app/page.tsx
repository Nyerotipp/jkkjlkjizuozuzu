import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { createClient } from "../../supabase/server";
import {
  ArrowUpRight,
  CheckCircle2,
  Trophy,
  TrendingUp,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-black opacity-70" />

        <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 tracking-tight">
                Bet{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                  Smarter
                </span>{" "}
                with Tipstr 🏆
              </h1>

              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Connect with verified tipsters and elevate your sports betting
                game with our standardized 10-unit system and competitive
                leaderboards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/tipster-dashboard"
                  className="inline-flex items-center px-8 py-4 text-black bg-green-500 rounded-lg hover:bg-green-600 transition-colors text-lg font-medium"
                >
                  Start Winning Today
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  href="#features"
                  className="inline-flex items-center px-8 py-4 text-gray-300 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-lg font-medium"
                >
                  Learn More
                </Link>
              </div>

              <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Verified tipsters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Standardized 10-unit system</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Real cash prizes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-gray-900" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Why Choose Tipstr
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're revolutionizing sports betting with our innovative platform
              and transparent approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Trophy className="w-6 h-6" />,
                title: "Verified Tipsters",
                description: "Only the best tipsters with proven track records",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Unit Profit System",
                description: "Fair comparison with our 10-unit standard",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community Insights",
                description: "Learn from successful bettors",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Monthly Prizes",
                description: "Top tipsters win real cash rewards",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all border border-gray-700"
              >
                <div className="text-green-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Verified Tipsters</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50K+</div>
              <div className="text-green-100">Monthly Prizes</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              How Tipstr Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our platform makes it easy to find winning tips and track
              performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Sign Up</h3>
              <p className="text-gray-400">
                Create your free account to access verified tipsters and their
                insights
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Follow Tipsters</h3>
              <p className="text-gray-400">
                Browse the leaderboard and follow tipsters with proven track
                records
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Win Together</h3>
              <p className="text-gray-400">
                Use their tips to inform your bets and track your own
                performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Start Winning?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of bettors who are already improving their results
            with Tipstr.
          </p>
          <Link href="/tipster-dashboard">
            <Button className="px-8 py-6 text-lg bg-green-600 hover:bg-green-700">
              Get Started Now
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
