"use client";

import { ColumnDef } from "@tanstack/react-table";
export type Prospect = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "approved" | "rejected";
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

export const columns: ColumnDef<Prospect>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as
        | "pending"
        | "processing"
        | "approved"
        | "rejected";

      // Map statuses to Tailwind color classes
      const statusConfig = {
        pending: "bg-yellow-500/80",
        processing: "bg-blue-500/80",
        approved: "bg-green-500/80",
        rejected: "bg-red-500/80",
      };

      return (
        <div
          className={`w-max-sm p-1 text-xs text-center font-bold text-white uppercase rounded-md ${statusConfig[status]}`}
        >
          {status}
        </div>
      );
    },
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
