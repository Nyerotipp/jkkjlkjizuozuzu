import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import TipsterDashboardContent from "@/components/tipster-dashboard-content";

export default async function TipsterDashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SubscriptionCheck>
      <main className="min-h-screen bg-black text-white">
        <TipsterDashboardContent user={user} />
      </main>
    </SubscriptionCheck>
  );
}
