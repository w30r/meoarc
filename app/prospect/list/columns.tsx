"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Prospect = {
  id: string; // Typically mapped from MongoDB _id
  name: string;
  country: string;
  region: "PM" | "SB" | "SK";
  block_name: string;
  play_name: string;
  short_name: string;
  submission_year: number;
  existence_kind: "Lead" | "Prospect";
  submitted_by: string;
  submitted_at: string; // ISO Date String
  reviewed_by: string;
  reviewed_at: string; // ISO Date String
  // Keeping these if your app uses them for state management
  status: "pending" | "approved" | "rejected";
};
export const columns: ColumnDef<Prospect>[] = [
  {
    accessorKey: "status",
    header: () => <span className="text-center font-bold">Status</span>,
    cell: ({ row }) => {
      const status = row.original.status;
      let color = "gray";
      if (status === "pending") color = "yellow";
      if (status === "approved") color = "green";
      if (status === "rejected") color = "red";
      return (
        <div
          className={`w-max-sm p-1 text-xs text-center font-bold text-white uppercase rounded-md bg-${color}-500/80`}
        >
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: () => <span className="text-center font-bold">Prospect Name</span>,
    cell: ({ row }) => {
      const name = row.original.name;
      return (
        <div className="flex items-center gap-2 font-black text-secondary">
          <span>{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "block_name",
    header: () => <span className="text-center font-bold">Block Name</span>,
  },
  {
    accessorKey: "play_name",
    header: () => <span className="text-center font-bold">Play Name</span>,
  },
  {
    accessorKey: "short_name",
    header: () => <span className="text-center font-bold">Short Name</span>,
  },
  {
    accessorKey: "existence_kind",
    header: () => <span className="text-center font-bold">Kind</span>,
  },
  {
    accessorKey: "region",
    header: () => <span className="text-center font-bold">Region</span>, // PM, SB, or SK
  },
  {
    accessorKey: "country",
    header: () => <span className="text-center font-bold">Country</span>,
  },
  {
    accessorKey: "submission_year",
    header: () => (
      <span className="text-center font-bold">Submission Year</span>
    ),
  },
  {
    accessorKey: "registered_by",
    header: () => <span className="text-center font-bold">Registered By</span>,
  },
  {
    accessorKey: "registered_at",
    header: () => <span className="text-center font-bold">Registered At</span>,
    cell: ({ row }) => {
      const date = new Date(row.original.registeredAt);
      return date.toLocaleDateString();
    },
  },
  {
    accessorKey: "reviewed_by",
    header: () => <span className="text-center font-bold">Reviewed By</span>,
  },
  {
    accessorKey: "reviewed_at",
    header: () => <span className="text-center font-bold">Reviewed At</span>,
    cell: ({ row }) => {
      const date = new Date(row.original.reviewed_at);
      return date.toLocaleDateString();
    },
  },
];
