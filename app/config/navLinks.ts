export type NavLink = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

// This is the single source of truth
export const navLinks: NavLink[] = [
  { label: "Start", href: "/" },
  { label: "Om oss", href: "/about" },
 /* {
    label: "My Tools",
    children: [
      { label: "AI Automation Tools", href: "/tools/ai" },
      { label: "Other Tool", href: "/tools/other" },
    ],
  },
  { label: "Tools App", href: "/tools-app" },
*/
];
