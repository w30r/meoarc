"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { ConfettiButton } from "@/components/ui/confetti";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useCallback } from "react";

export default function playground() {
  const [main, setMain] = useState("LET ME GO!");

  const handleSelectChange = useCallback((value: string) => {
    setMain(value);
  }, []);

  return (
    <div className="flex flex-col text-background h-screen">
      <div className="bg-foreground p-4 rounded-xl m-4">
        <h1 className="font-bold text-2xl uppercase">{main}</h1>
      </div>
      <div className="text-foreground gap-4 flex flex-col bg-card shadow-sm flex-1 p-4 m-12 rounded-2xl outline-2">
        <h1 className="font-bold text-2xl uppercase">test</h1>
        <p>Di sini ada test lagi</p>
        <Button className="max-w-1/3">Click!</Button>
        <Button className="max-w-1/3" variant={"outline"}>
          Click!
        </Button>
        <Button className="max-w-1/3" variant={"destructive"}>
          Click!
        </Button>
        <Button className="max-w-1/3" variant={"ghost"}>
          Click!
        </Button>
        <h1 className="font-bold text-2xl pt-4 uppercase animate-in ">
          whynot
        </h1>
        <ConfettiButton
          className={`max-w-1/3 ${buttonVariants({ variant: "destructive" })}`}
        >
          Congratulations!
        </ConfettiButton>
        <div>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-45">
              <SelectValue placeholder="Choose Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectGroup>
              <SelectGroup >
                <SelectItem value="licght">Licght</SelectItem>
                <SelectItem value="darck">Darck</SelectItem>
                <SelectItem value="sycstem">Sysctem</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
