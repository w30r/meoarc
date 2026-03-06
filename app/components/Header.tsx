"use client";
import Link from "next/link";
import React from "react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  Show, // We use Show now
} from "@clerk/nextjs";

const Header: React.FC = () => {
  return (
    <header className="max-h-12 flex items-center justify-between px-6 py-4 rounded-2xl m-2 bg-primary dark:bg-card text-foreground shadow-md">
      <div className="flex justify-center items-center gap-10 p-1">
        <Link
          href="/"
          className="hover:bg-background p-2 rounded-full transition-all duration-300"
        >
          {/* Home Icon SVG */}
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
        <span className="hidden md:block text-xl font-normal font-mono">
          Meor Asset Registration Center
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* Replacement for SignedOut */}
        <Show when="signed-out">
          <div className="flex items-center gap-4">
            <SignInButton mode="modal">
              <button className="text-sm font-medium hover:underline cursor-pointer">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                Get Started
              </button>
            </SignUpButton>
          </div>
        </Show>

        {/* Replacement for SignedIn */}
        <Show when="signed-in">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "size-10",
              },
            }}
          />
        </Show>
      </div>
    </header>
  );
};

export default Header;
