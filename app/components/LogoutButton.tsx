"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    document.cookie = "nocobase_token=; path=/; max-age=0";
    localStorage.removeItem("token");
    router.push("/");
  }

  return (
    <button onClick={handleLogout} className="bg-red-600 py-2 px-4 rounded-lg text-white">
      Logout
    </button>
  );
}
