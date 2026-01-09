"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#292626] text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-4 md:space-y-0">
        {/* Left: site info */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Cycklar i Malmö. All rights reserved.
          </p>
        </div>

        {/* Right: links */}
        <div className="flex space-x-6">
          <Link href="/kopvillkor" className="hover:text-yellow-300 text-sm">
            Köpvillkor
          </Link>
          <Link href="/faq" className="hover:text-yellow-300 text-sm">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-yellow-300 text-sm">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
