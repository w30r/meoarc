import Header from "@/app/components/Header";

export default async function Home() {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=3");
  const data = await response.json();
  console.log(data.jokes);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-1">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Basin Name</th>
              <th>Location</th>
              <th>Size (km²)</th>
              <th>Resources</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basin 1</td>
              <td>Location 1</td>
              <td>Size 1</td>
              <td>Resources 1</td>
            </tr>
            <tr>
              <td>Basin 2</td>
              <td>Location 2</td>
              <td>Size 2</td>
              <td>Resources 2</td>
            </tr>
            <tr>
              <td>Basin 3</td>
              <td>Location 3</td>
              <td>Size 3</td>
              <td>Resources 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
