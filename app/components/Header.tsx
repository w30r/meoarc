import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 rounded-2xl m-2 bg-white dark:bg-zinc-900 shadow-md">
      <div className="flex  justify-center items-center gap-10 p-1 ">
        <a href="/" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </a>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white flex justify-center items-center ">
          MeoARC
        </h1>
        <span className="text-xl font-normal">
          Meor Asset Registration Center
        </span>
      </div>
      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-300 text-sm font-semibold text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400">
        PP
      </div>
    </header>
  );
};
export default Header;
