"use client"; // This tells Next.js only this small button is client-side

import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react"; // Assuming you're using Lucide

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-secondary text-foreground p-3 rounded-full shadow-lg border border-foreground/10 hover:scale-110 transition-transform z-50"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <MoonStar size={20} /> : <Sun size={20} />}
    </button>
  );
}
