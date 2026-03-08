import Header from "@/app/components/Header";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import Title from "@/app/components/Title";

export default async function Home() {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=3");
  const data = await response.json();
  console.log(data.jokes);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans ">
      <Title title="Prospect List" />
      <div className="px-8 py-4">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
