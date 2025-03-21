import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Tipstr</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-green-500"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/tipster-dashboard"
                  className="text-gray-400 hover:text-green-500"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Become a Tipster
                </Link>
              </li>
            </ul>
          </div>

          {/* Sports Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Sports</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Football
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Basketball
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Tennis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  MMA/UFC
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Betting Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Responsible Gambling
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-500">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Tipstr. All rights reserved. 🏆
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-green-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-500">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-500">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
