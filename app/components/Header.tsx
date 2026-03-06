import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 rounded-2xl m-2 bg-primary dark:bg-card text-foreground shadow-md">
      <div className="flex  justify-center items-center gap-10 p-1 ">
        <Link
          href="/"
          className="hover:bg-background p-2 rounded-full transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
        <h1 className="font-sans text-3xl font-bold dark:text-primary flex justify-center items-center text-foreground">
          MeoARC
        </h1>
        <span className="text-xl font-normal font-mono">
          Meor Asset Registration Center
        </span>
      </div>
      <Avatar>
        <AvatarImage src="https://i.pinimg.com/474x/e0/51/9e/e0519efc2ab6f5d7f6e83f0f8416f97d.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};
export default Header;
