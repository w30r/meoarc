import Header from "@/app/components/Header";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { columns, Basin } from "./columns";
import { DataTable } from "./data-table";

export default async function Home() {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=3");
  const data = await response.json();
  console.log(data.jokes);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black ">
      <Header />
      <div className="flex flex-col gap-4">
        <div className="mt-4 flex justify-start items-center px-24 gap-6 ">
          <a href="/">
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
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </a>
          <h1 className="text-foreground font-bold text-2xl">BASIN LIST</h1>
        </div>

        <div className=" flex flex-1 justify-between items-start px-24 py-2 gap-2">
          <div className="flex gap-2 w-1/3">
            <Input
              type="text"
              placeholder="Search for a basin..."
              className="w-full"
            />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value=" ">All</SelectItem>
                  <SelectItem value="approve">Approve</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              className="hover:scale-105 hover:shadow-[0_0_5px#0a18ff] transition-all duration-300"
            >
              <p>Add Basin</p> <Plus />
            </Button>
          </div>
        </div>
      </div>
      {/* Todo: Basin List Table using ShadCN Data Table. // Columns: Status,
        Updated At, Created By, Created At, Basin Name, Generated, Country,
        Region, Basin Type, Parent Basin */}{" "}
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
