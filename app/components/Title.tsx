"use client";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

interface TitleProps {
  title: string;
  back?: string;
}

export default function Title({ title, back }: TitleProps) {
  return (
    <div className="mt-4 flex justify-start items-center px-24 gap-6 w-auto">
      <InteractiveHoverButton
        onClick={
          back
            ? () => (window.location.href = back)
            : () => (window.location.href = "/")
        }
        className="outline rounded-full p-2 shadow-sm hover:bg-foreground/10 transition-all duration-300"
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg> */}
        Back
      </InteractiveHoverButton>
      <h1 className="text-foreground font-bold text-2xl">{title}</h1>
    </div>
  );
}
