"use client";
import Header from "./components/Header";

export default function Home() {
  // const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=3");
  // const data = await response.json();
  // console.log(data.jokes);

  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <div className="flex flex-1 bg-primary transition-all duration-500">
        <div className="w-1/2 bg-background flex flex-col justify-center items-center p-12 gap-2">
          <h1 className="font-hero text-primary font-normal text-6xl ">
            Welcome
          </h1>
          <h1 className="text-foreground font-bold text-2xl text-center leading-tightest">
            - to - <br /> Meor Asset Registration Center
          </h1>
          <p className="text-secondary text-sm text-center font-normal w-fit">
            Please ensure that the Asset Name Registration are in accordance to
            the following PETMEO UPSTREAM NAMING STANDARD for Malaysia.
            <br />
            <br />
            For further operations -{" "}
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-500 cursor-pointer hover:underline"
              target="_blank"
            >
              View here
            </a>
          </p>
        </div>
        <div className="w-1/2 bg-background grid grid-cols-2 text-3xl font-bold group">
          <div className=" bg-primary p-12 text-center items-center flex justify-center group-hover:text-4xl duration-100 hover:text-primary rounded-3xl m-2">
            <a href="/basin/list" className="text-white hover:text-black">
              BASIN
            </a>
          </div>
          <div className=" bg-secondary/50 p-12 text-center items-center flex justify-center group-hover:text-4xl duration-200 hover:text-black rounded-3xl m-2">
            <a href="/block/list" className="text-white hover:text-black">
              BLOCK
            </a>
          </div>
          <div className=" bg-muted/50 p-12 text-center items-center flex justify-center group-hover:text-4xl duration-300 hover:text-black rounded-3xl m-2">
            <a href="/prospect/list" className="text-white hover:text-black">
              PROSPECT
            </a>
          </div>
          <div className=" bg-ring/50 p-12 text-center items-center flex justify-center group-hover:text-4xl duration-400 hover:text-black rounded-3xl m-2">
            <a href="/well/list" className="text-white hover:text-black">
              WELL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
