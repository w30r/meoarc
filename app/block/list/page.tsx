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
import Title from "@/app/components/Title";
import { DataTable } from "./data-table";
import { Block, columns } from "./columns";

export default function Home() {
  const data: Block[] = [
    {
      id: "1",
      status: "pending",
      location: "Location 1",
      size: "Size 1",
      resources: "Resources 1",
      updated_at: new Date(),
      created_at: new Date(),
      block_name: "Block 1",
      generated_region: "Region 1",
      main_basin: "Main Basin 1",
      sub_basin: "Sub Basin 1",
    },
    {
      id: "2",
      status: "completed",
      location: "Location 2",
      size: "Size 2",
      resources: "Resources 2",
      updated_at: new Date(),
      created_at: new Date(),
      block_name: "Block 2",
      generated_region: "Region 2",
      main_basin: "Main Basin 2",
      sub_basin: "Sub Basin 2",
    },
    {
      id: "3",
      status: "pending",
      location: "Location 3",
      size: "Size 3",
      resources: "Resources 3",
      updated_at: new Date(),
      created_at: new Date(),
      block_name: "Block 3",
      generated_region: "Region 3",
      main_basin: "Main Basin 3",
      sub_basin: "Sub Basin 3",
    },
    {
      id: "4",
      status: "completed",
      location: "Location 4",
      size: "Size 4",
      resources: "Resources 4",
      updated_at: new Date(),
      created_at: new Date(),
      block_name: "Block 4",
      generated_region: "Region 4",
      main_basin: "Main Basin 4",
      sub_basin: "Sub Basin 4",
    },
    {
      id: "5",
      status: "pending",
      location: "Location 5",
      size: "Size 5",
      resources: "Resources 5",
      updated_at: new Date(),
      created_at: new Date(),
      block_name: "Block 5",
      generated_region: "Region 5",
      main_basin: "Main Basin 5",
      sub_basin: "Sub Basin 5",
    },
    {
      id: "6",
      status: "completed",
      location: "Location 6",
      size: "Size 6",
      resources: "Resources 6",
      updated_at: new Date(),
      created_at: new Date(),
      block_name: "Block 6",
      generated_region: "Region 6",
      main_basin: "Main Basin 6",
      sub_basin: "Sub Basin 6",
    },
    {
      id: "7",
      status: "pending",
      location: "Location 7",
      size: "Size 7",
      resources: "Resources 7",
      updated_at: new Date(),
      created_at: new Date(),
      block_name: "Block 7",
      generated_region: "Region 7",
      main_basin: "Main Basin 7",
      sub_basin: "Sub Basin 7",
    },
    {
      id: "8",
      status: "completed",
      location: "Location 8",
      size: "Size 8",
      resources: "Resources 8",
      updated_at: new Date(),
      created_at: new Date(),
      block_name: "Block 8",
      generated_region: "Region 8",
      main_basin: "Main Basin 8",
      sub_basin: "Sub Basin 8",
    },
    {
      id: "9",
      status: "pending",
      location: "Location 9",
      size: "Size 9",
      resources: "Resources 9",
      updated_at: new Date(),
      created_at: new Date(),
      block_name: "Block 9",
      generated_region: "Region 9",
      main_basin: "Main Basin 9",
      sub_basin: "Sub Basin 9",
    },
    {
      id: "10",
      status: "completed",
      location: "Location 10",
      size: "Size 10",
      resources: "Resources 10",
      updated_at: new Date(),
      created_at: new Date(),
      block_name: "Block 10",
      generated_region: "Region 10",
      main_basin: "Main Basin 10",
      sub_basin: "Sub Basin 10",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-background">
      <div className="flex flex-col gap-4">
        <Title title="Block List" />

        <div className="flex flex-1 justify-between items-start px-24 py-2 gap-2">
          <div className="flex gap-2 w-1/3">
            <Input
              type="text"
              placeholder="Search for a block..."
              className="w-full"
            />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value=" ">All</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                  <SelectItem value="size">Size</SelectItem>
                  <SelectItem value="resources">Resources</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/block/add")}
              className="hover:scale-105 hover:shadow-[0_0_5px#0a18ff] transition-all duration-300"
            >
              <p>Add Block</p> <Plus />
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
