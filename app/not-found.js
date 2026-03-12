import Link from "next/link";
import Header from "./components/Header"; // Re-use your header!
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-9xl font-black text-zinc-200 dark:text-zinc-800">
          404
        </h1>

        <div className="-mt-16">
          {" "}
          {/* Pull the text up over the big 404 */}
          <h2 className="text-3xl font-bold text-foreground">
            UNDER CONSTRUCTION
          </h2>
          <p className="mt-4 text-zinc-500 max-w-md">
            I think the page is still under development, <br />
            or maybe it got lost in the void. <br />
            <br />
            Either way, it’s not here.
          </p>
          <Link
            href="/"
            className="shadow-lg rounded-full mt-8 inline-block bg-background hover:bg-foreground hover:text-black hover:scale-105 duration-200 text-white font-medium px-6 py-3 transition-all"
          >
            <AnimatedShinyText>Return to Dashboard</AnimatedShinyText>
          </Link>
        </div>
      </main>
    </div>
  );
}
