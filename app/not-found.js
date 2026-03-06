import Link from "next/link";
import Header from "./components/Header"; // Re-use your header!

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-9xl font-black text-zinc-200 dark:text-zinc-800">
          404
        </h1>

        <div className="mt-[-4rem]">
          {" "}
          {/* Pull the text up over the big 404 */}
          <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
          <p className="mt-4 text-zinc-500 max-w-xs">
            I think the page is still under construction, or maybe it got lost
            in the void. Either way, it’s not here.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 hover:scale-105 duration-200 text-white font-medium px-6 py-3 rounded-lg transition-all"
          >
            Return to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
