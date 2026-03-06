"use client";
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
import Title from "@/app/components/Title";

export default function Home() {
  // const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=3");
  // const data = await response.json();
  // console.log(data.jokes);
  const data: Basin[] = [
    {
      id: "1",
      amount: 1000,
      status: "pending",
      email: "pH6mE@example.com",
      createdAt: "2023-01-01",
      createdBy: "John Doe",
      updatedAt: "2023-01-01",
      basinName: "Basin 1",
      country: "Country 1",
      region: "Region 1",
      basinType: "Basin Type 1",
      parentBasin: "Parent Basin 1",
    },
    {
      id: "2",
      amount: 2000,
      status: "pending",
      email: "pH6mE@example.com",
      createdAt: "2023-01-02",
      createdBy: "John Doe",
      updatedAt: "2023-01-02",
      basinName: "Basin 2",
      country: "Country 2",
      region: "Region 2",
      basinType: "Basin Type 2",
      parentBasin: "Parent Basin 2",
    },
    {
      id: "3",
      amount: 3000,
      status: "pending",
      email: "pH6mE@example.com",
      createdAt: "2023-01-03",
      createdBy: "John Doe",
      updatedAt: "2023-01-03",
      basinName: "Basin 3",
      country: "Country 3",
      region: "Region 3",
      basinType: "Basin Type 3",
      parentBasin: "Parent Basin 3",
    },
    {
      id: "4",
      amount: 4000,
      status: "pending",
      email: "pH6mE@example.com",
      createdAt: "2023-01-04",
      createdBy: "John Doe",
      updatedAt: "2023-01-04",
      basinName: "Basin 4",
      country: "Country 4",
      region: "Region 4",
      basinType: "Basin Type 4",
      parentBasin: "Parent Basin 4",
    },
    {
      id: "5",
      amount: 5000,
      status: "pending",
      email: "pH6mE@example.com",
      createdAt: "2023-01-05",
      createdBy: "John Doe",
      updatedAt: "2023-01-05",
      basinName: "Basin 5",
      country: "Country 5",
      region: "Region 5",
      basinType: "Basin Type 5",
      parentBasin: "Parent Basin 5",
    },
    {
      id: "6",
      amount: 6000,
      status: "pending",
      email: "pH6mE@example.com",
      createdAt: "2023-01-06",
      createdBy: "John Doe",
      updatedAt: "2023-01-06",
      basinName: "Basin 6",
      country: "Country 6",
      region: "Region 6",
      basinType: "Basin Type 6",
      parentBasin: "Parent Basin 6",
    },
    {
      id: "7",
      amount: 7000,
      status: "pending",
      email: "pH6mE@example.com",
      createdAt: "2023-01-07",
      createdBy: "John Doe",
      updatedAt: "2023-01-07",
      basinName: "Basin 7",
      country: "Country 7",
      region: "Region 7",
      basinType: "Basin Type 7",
      parentBasin: "Parent Basin 7",
    },
    {
      id: "8",
      amount: 8000,
      status: "pending",
      email: "pH6mE@example.com",
      createdAt: "2023-01-08",
      createdBy: "John Doe",
      updatedAt: "2023-01-08",
      basinName: "Basin 8",
      country: "Country 8",
      region: "Region 8",
      basinType: "Basin Type 8",
      parentBasin: "Parent Basin 8",
    },
    {
      id: "9",
      amount: 9000,
      status: "pending",
      email: "pH6mE@example.com",
      createdAt: "2023-01-09",
      createdBy: "John Doe",
      updatedAt: "2023-01-09",
      basinName: "Basin 9",
      country: "Country 9",
      region: "Region 9",
      basinType: "Basin Type 9",
      parentBasin: "Parent Basin 9",
    },
    {
      id: "10",
      amount: 10000,
      status: "pending",
      email: "pH6mE@example.com",
      createdAt: "2023-01-10",
      createdBy: "John Doe",
      updatedAt: "2023-01-10",
      basinName: "Basin 10",
      country: "Country 10",
      region: "Region 10",
      basinType: "Basin Type 10",
      parentBasin: "Parent Basin 10",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans dark:bg-background ">
      <div className="flex flex-col gap-4">
        <Title title="Basin List" />

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
              variant="default"
              // on click, navigate to /basin/add
              onClick={() => (window.location.href = "/basin/add")}
              className=" rounded-full hover:scale-105 hover:shadow-[0_0_5px#0a18ff] transition-all duration-300"
            >
              <Plus />
              <span>Add Basin</span>
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
