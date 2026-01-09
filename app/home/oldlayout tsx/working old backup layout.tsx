"use client";

import "./globals.css";
import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LeftSidePanel from "../components/LeftSidePanel";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => setIsPanelOpen((prev) => !prev);

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Panel */}
      <div
        className={`transition-all duration-300 flex-shrink-0`}
        style={{ width: isPanelOpen ? "18rem" : "0" }}
      >
        <LeftSidePanel isOpen={isPanelOpen} onToggle={togglePanel} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 transition-all duration-300">
        <Header />
        <Navbar onTogglePanel={togglePanel} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
