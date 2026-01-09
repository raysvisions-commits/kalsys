"use client";

import Link from "next/link";
import { panelLinks } from "../config/LeftPanelLinks";

export default function LeftSidePanel({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative h-full">
      {/* Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 text-gray-300 flex flex-col transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "var(--panel-bg)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-start p-5 border-b border-white/10">
          <span className="text-xl font-bold">Sidomeny</span>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-6 space-y-5 text-lg">
          {panelLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}

              onClick={onToggle} // closes panel when clickF
              className="text-gray-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Floating toggle button */}
      <button
        onClick={onToggle}
        className={`fixed top-0 left-0 w-10 h-10 text-gray-300 text-xl font-bold flex items-center justify-center border-none cursor-pointer transition-transform duration-300 z-50 rounded-r-md ${
          isOpen ? "translate-x-72" : "translate-x-0"
        }`}
        style={{ backgroundColor: "var(--panel-bg)" }}
      >
        {isOpen ? "«" : "»"}
      </button>
    </div>
  );
}
