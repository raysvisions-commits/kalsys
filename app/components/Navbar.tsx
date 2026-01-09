"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../config/navLinks";
import { usePathname } from "next/navigation";

export default function Navbar({ onTogglePanel }: { onTogglePanel: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Reset mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ===== FIXED-HEIGHT NAVBAR ===== */}
      <nav
        className="w-full shadow-md relative z-20 bg-[#292626] text-white"
        style={{ height: "64px" }} // uniform height
      >
        <div className="h-full max-w-7xl mx-auto flex justify-between items-center px-6">

 

          {/* Desktop links */}
          <ul className="hidden md:flex space-x-6 text-white font-medium h-full items-center">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label} className="relative group">
                  <span className="cursor-pointer">{link.label}</span>

                  {/* Desktop dropdown */}
                  <ul className="absolute left-0 top-full mt-2 bg-blue-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.children.map((child) => (
                      <li
                        key={child.label}
                        className="px-4 py-2 hover:bg-blue-800"
                      >
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.label}>
                  <Link href={link.href!}>{link.label}</Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-white"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 md:hidden">
          <div
            className="absolute top-0 left-0 w-full pt-20 pb-6 bg-[#292626] text-white flex flex-col items-center space-y-4"
          >
            {navLinks.map((link) =>
              link.children ? (
                link.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
