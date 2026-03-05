export default async function Home() {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=3");
  const data = await response.json();
  console.log(data.jokes);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <header className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 shadow-md">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white flex justify-center items-center gap-6">
          MeoARC
          <span className="text-xl font-normal">
            Meor Asset Registration Center
          </span>
        </h1>
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-300 text-sm font-semibold text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400">
          PP
        </div>
      </header>
      <div className="flex flex-1 bg-pink-500">
        <div className="w-1/2 bg-background flex flex-col justify-center items-center p-12 gap-2">
          <h1 className="text-foreground font-bold text-5xl">WELCOME</h1>
          <h1 className="text-foreground font-bold text-2xl">
            to Meor Asset Registration Center
          </h1>
          <p className="text-foreground font-bold text-sm text-center">
            Please ensure that the Asset Name Registration are in accordance to
            the following PETMEO UPSTREAM NAMING STANDARD for Malaysia. For
            further operations - View here
          </p>
        </div>
        <div className="w-1/2 bg-background text-foreground grid grid-cols-2 text-3xl font-bold group">
          <div className=" bg-purple-500/70 p-12 text-center items-center flex justify-center group-hover:text-4xl duration-150 hover:text-black">
            BASIN
          </div>
          <div className=" bg-pink-500/70 p-12 text-center items-center flex justify-center group-hover:text-4xl duration-150 hover:text-black">
            BLOCK
          </div>
          <div className=" bg-blue-500/70 p-12 text-center items-center flex justify-center group-hover:text-4xl duration-150 hover:text-black">
            PROSPECT
          </div>
          <div className=" bg-yellow-500/70 p-12 text-center items-center flex justify-center group-hover:text-4xl duration-150 hover:text-black">
            WELL
          </div>
        </div>
      </div>
    </div>
  );
}
