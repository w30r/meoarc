"use client";

import { useState } from "react";
import Card from "./Card";
import { Joke } from "../types/joke";

export default function JokeList({ initialJokes }: { initialJokes: Joke[] }) {
  const [jokes, setJokes] = useState<Joke[]>(initialJokes);
  const [loading, setLoading] = useState(false);

  const refreshJokes = async () => {
    setLoading(true);
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=3");
    const data = await response.json();
    setJokes(data.jokes);
    setLoading(false);
  };

  return (
    <div className="flex-1 bg-pink-300/30 p-8 gap-4 flex flex-col items-center">
      <button
        onClick={refreshJokes}
        disabled={loading}
        className="mb-6 px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
      >
        {loading ? "Fetching..." : "🔄 Get New Jokes"}
      </button>

      {jokes.map((joke: Joke) => (
        <Card
          key={joke.id}
          title={joke.type === "single" ? "😄" : joke.setup}
          description={joke.type === "single" ? joke.joke : joke.delivery}
        />
      ))}
    </div>
  );
}
