"use client";

import "./globals.css";
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LeftSidePanel from "./components/LeftSidePanel";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const togglePanel = () => setIsPanelOpen((prev) => !prev);

  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-800 min-h-screen flex flex-col">

        {/* Top wrapper: left panel + main content */}
        <div className="flex flex-1 w-full">

          {/* Left panel */}
          <div
            className={`transition-all duration-300 flex-shrink-0`}
            style={{ width: isPanelOpen ? "18rem" : "0" }}
          >
            <LeftSidePanel isOpen={isPanelOpen} onToggle={togglePanel} />
          </div>

          {/* Main content column */}
          <div className="flex flex-col flex-1 min-w-0 w-full">

            {/* Header */}
            <Header />

            {/* Navbar */}
            <Navbar onTogglePanel={togglePanel} />

            {/* Page content */}
            <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10">
              {children}
            </main>

          </div>
        </div>

        {/* Footer always at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
