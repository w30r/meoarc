import { DataTable } from "./data-table";
import { columns, Prospect } from "./columns";
import Title from "@/app/components/Title";
import clientPromise from "@/lib/mongodb";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const client = await clientPromise;
  const db = client.db(); // Use the default database specified in the URI
  const collection = db.collection("prospect");
  const data = await collection.find({}).toArray();
  // Map the fetched data to the Prospect type
  const mappedData: Prospect[] = data.map((item: any) => ({
    id: item._id.toString(), // Assuming _id is an ObjectId and needs to be converted to string
    name: item.name,
    country: item.country,
    region: item.region,
    block_name: item.block_name,
    play_name: item.play_name,
    short_name: item.short_name,
    submission_year: item.submission_year,
    existence_kind: item.existence_kind,
    registered_by: item.registered_by,
    registered_at: item.registered_at,
    reviewed_by: item.reviewed_by,
    reviewed_at: item.reviewed_at,
    status: item.status,
  }));

  const prospectData: Prospect[] = mappedData;

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans ">
      <Title title="Prospect List" />
      <div className="px-8 py-4 flex justify-end">
        <Link href="/prospect/add">
          <Button className="font-bold hover:scale-105" variant="secondary">
            Add New Prospect
          </Button>
        </Link>
      </div>
      <div className="px-8 py-4">
        <DataTable columns={columns} data={prospectData} />
      </div>
    </div>
  );
}
