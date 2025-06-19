// src/pages/DashboardPage.jsx
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  useEffect(() => {
    document.body.classList.add("bg-zinc-950", "text-white");
    return () => {
      document.body.classList.remove("bg-zinc-950", "text-white");
    };
  }, []);

  return (
    <div className="min-h-screen px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📊 Your Dashboard</h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {/* Клиенты */}
        <section className="bg-zinc-900 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">👥 Clients</h2>
          <p className="opacity-70 mb-4">No clients yet. Start a chat and they’ll show up here.</p>
          <Button variant="secondary">Add Client</Button>
        </section>

        {/* Последние сообщения */}
        <section className="bg-zinc-900 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">💬 Recent Messages</h2>
          <p className="opacity-70">No messages to display yet.</p>
        </section>

        {/* Статистика */}
        <section className="bg-zinc-900 p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">📈 Stats</h2>
          <ul className="space-y-2">
            <li>🟢 New clients this week: <strong>0</strong></li>
            <li>📬 Messages today: <strong>0</strong></li>
            <li>⏱️ Average response time: <strong>–</strong></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
