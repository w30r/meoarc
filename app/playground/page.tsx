import { Button } from "@/components/ui/button";

export default function playground() {
  return (
    <div className="flex flex-col text-background h-screen">
      <div className="bg-foreground p-4 rounded-xl m-4">
        <h1 className="font-bold text-2xl uppercase">test</h1>
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
      </div>
    </div>
  );
}
