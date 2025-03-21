"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { UserCircle, Home, Bell, Settings, LogOut, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";

interface TipsterNavbarProps {
  user: any;
}

export default function TipsterNavbar({ user }: TipsterNavbarProps) {
  const supabase = createClient();
  const router = useRouter();

  return (
    <nav className="w-full border-b border-gray-800 bg-black py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            prefetch
            className="text-xl font-bold text-green-500 flex items-center"
          >
            Tipstr <Trophy className="ml-1 h-5 w-5" />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
          >
            <Bell className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <UserCircle className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-gray-900 border-gray-800"
            >
              <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800">
                <UserCircle className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-gray-300 hover:text-white hover:bg-gray-800"
                onClick={async () => {
                  await supabase.auth.signOut();
                  router.push("/");
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
