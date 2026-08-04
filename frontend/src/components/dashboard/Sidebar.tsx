"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    {
      name: "Dashboard",
      icon: "🏠",
      href: "/dashboard",
    },
    {
      name: "Roadmap",
      icon: "🧠",
      href: "/dashboard/roadmap",
    },
    {
      name: "Study Groups",
      icon: "👥",
      href: "/dashboard/groups",
    },
    {
      name: "AI Mentor",
      icon: "🤖",
      href: "/dashboard/mentor",
    },
    {
      name: "Sessions",
      icon: "📅",
      href: "/dashboard/sessions",
    },
    {
      name: "Settings",
      icon: "⚙️",
      href: "/dashboard/settings",
    },
  ];

  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-gray-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="border-b border-gray-200 p-8">
        <Link
          href="/"
          className="text-3xl font-bold text-gray-900 transition hover:text-blue-600"
        >
          PeerLearn AI
        </Link>

        <p className="mt-2 text-sm text-gray-500">
          Collaborative Learning Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-2 px-4">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-200 ${
              pathname === item.href
                ? "bg-blue-100 font-semibold text-blue-700"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* User Profile */}
      <div className="mt-auto border-t border-gray-200 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
            O
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Ouissal
            </h3>

            <p className="text-sm text-gray-500">
              Cloud Learner
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}