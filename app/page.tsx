"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";

export default function Home() {
  // const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=3");
  // const data = await response.json();
  // console.log(data.jokes);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    // Save it so the script in layout.js sees it on refresh!
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-background ">
      <button
        className="fixed bottom-4 right-4 bg-white dark:bg-zinc-800 p-2 rounded-full shadow-lg"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
      <Header />
      <div className="flex flex-1 bg-pink-500 transition-all duration-500">
        <div className="w-1/2 bg-background flex flex-col justify-center items-center p-12 gap-2">
          <h1 className="text-foreground font-bold text-5xl">WELCOME</h1>
          <h1 className="text-foreground font-bold text-2xl">
            to Meor Asset Registration Center
          </h1>
          <p className="text-foreground text-sm text-center font-normal w-3/4">
            Please ensure that the Asset Name Registration are in accordance to
            the following PETMEO UPSTREAM NAMING STANDARD for Malaysia.
            <br />
            For further operations -
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-500 cursor-pointer hover:underline"
              target="_blank"
            >
              View here
            </a>
          </p>
        </div>
        <div className="w-1/2 bg-background text-foreground grid grid-cols-2 text-3xl font-bold group">
          <div className=" bg-purple-500/50 p-12 text-center items-center flex justify-center group-hover:text-4xl duration-100 hover:text-black rounded-3xl m-2">
            <a href="/basin/list" className="text-white hover:text-black">
              BASIN
            </a>
          </div>
          <div className=" bg-pink-500/50 p-12 text-center items-center flex justify-center group-hover:text-4xl duration-200 hover:text-black rounded-3xl m-2">
            <a href="/block/list" className="text-white hover:text-black">
              BLOCK
            </a>
          </div>
          <div className=" bg-blue-500/50 p-12 text-center items-center flex justify-center group-hover:text-4xl duration-300 hover:text-black rounded-3xl m-2">
            <a href="/prospect/list" className="text-white hover:text-black">
              PROSPECT
            </a>
          </div>
          <div className=" bg-yellow-500/50 p-12 text-center items-center flex justify-center group-hover:text-4xl duration-400 hover:text-black rounded-3xl m-2">
            <a href="/well/list" className="text-white hover:text-black">
              WELL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
