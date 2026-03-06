"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Basin = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  createdAt: string; // New field
  createdBy: string; // New field
  updatedAt: string; // New field
  basinName: string; // New field
  country: string; // New field
  region: string; // New field
  basinType: string; // New field
  parentBasin: string; // New field
};

export const columns: ColumnDef<Basin>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "updatedAt", // Updated At
    header: "Updated At",
  },
  {
    accessorKey: "createdBy", // Created By
    header: "Created By",
  },
  {
    accessorKey: "createdAt", // Created At
    header: "Created At",
  },
  {
    accessorKey: "basinName", // Basin Name
    header: "Basin Name",
  },
  {
    accessorKey: "country", // Country
    header: "Country",
  },
  {
    accessorKey: "region", // Region
    header: "Region",
  },
  {
    accessorKey: "basinType", // Basin Type
    header: "Basin Type",
  },
  {
    accessorKey: "parentBasin", // Parent Basin
    header: "Parent Basin",
  },
];
