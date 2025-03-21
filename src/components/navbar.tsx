import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { Trophy, UserCircle } from "lucide-react";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full border-b border-gray-800 bg-black py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          prefetch
          className="text-xl font-bold text-green-500 flex items-center"
        >
          <Trophy className="mr-2 h-5 w-5" />
          Tipstr
        </Link>
        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link
                href="/tipster-dashboard"
                className="px-4 py-2 text-sm font-medium text-white hover:text-green-500"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Dashboard
                </Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-black bg-green-500 rounded-md hover:bg-green-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
