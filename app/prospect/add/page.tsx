"use client";

import { useState } from "react";
import Title from "@/app/components/Title";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { HelpCircle, Plus, Trash2 } from "lucide-react";
import { saveProspects } from "./actions";
import { useRouter } from "next/navigation";

export default function Home() {
  // 1. Global State (Top section)
  const [region, setRegion] = useState("");
  const [blockName, setBlockName] = useState("");
  // 2. Multi-Prospect State (Array of cards)
  const [prospects, setProspects] = useState([
    { id: 1, play: "", name: "", shortName: "", year: "" },
  ]);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!region) {
      alert("Please fill in the Region field!");
      return;
    }

    if (!blockName) {
      alert("Please fill in the Block Name field!");
      return;
    }

    if (prospects.some((p) => !p.play || !p.name || !p.year)) {
      alert("Please fill in all required fields for each prospect!");
      console.log(prospects);
      return;
    }

    // Call our Server Action
    const result = await saveProspects(region, blockName, prospects);

    if (result.success) {
      alert("Saved successfully!");
      router.push("/prospect/list"); // Redirect back to the list
    } else {
      alert("Something went wrong!");
    }
  };

  const updateProspect = (id: number, field: string, value: string) => {
    setProspects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    );
  };
  // Generate short name based on Prospect Name (4 characters, uppercase, no spaces)
  const generateShortName = (name: string) => {
    const words = name.trim().split(/\s+/);

    if (words.length >= 2) {
      // Take first 2 letters of first two words
      return (
        words[0].substring(0, 2) + words[1].substring(0, 2)
      ).toUpperCase();
    }

    // Fallback for single words: first 4 letters
    return name.replace(/\s/g, "").substring(0, 4).toUpperCase();
  };

  const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const addProspectCard = () => {
    setProspects([
      ...prospects,
      {
        id: Date.now(),
        play: "",
        name: "",
        shortName: "",
        year: "",
      },
    ]);
  };

  const removeProspectCard = (id: number) => {
    if (prospects.length > 1) {
      setProspects(prospects.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Title title="New Prospect Form" back="/prospect/list" />

      <main className="max-w-4xl mx-auto w-full px-6 py-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6 bg-card shadow-sm border rounded-xl p-8">
            {/* GLOBAL CONTEXT SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b">
              <div className="space-y-2">
                <Label className="flex items-center gap-1 uppercase text-[12px] font-bold text-zinc-400">
                  Country <HelpCircle size={14} />
                </Label>
                <Input
                  value="Malaysia"
                  disabled
                  className="bg-zinc-100 dark:bg-zinc-800"
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-1 uppercase text-[12px] font-bold text-zinc-400">
                  Region* <HelpCircle size={14} />
                </Label>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PM">PM</SelectItem>
                    <SelectItem value="SB">SB</SelectItem>
                    <SelectItem value="SK">SK</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-1 uppercase text-[12px] font-bold text-zinc-400">
                  Block Name{true && "*"} <HelpCircle size={14} />
                </Label>
                <Select value={blockName} onValueChange={setBlockName}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Block Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Block A">Block A</SelectItem>
                    <SelectItem value="Block B">Block B</SelectItem>
                    <SelectItem value="Block C">Block C</SelectItem>
                    <SelectItem value="Block D">Block D</SelectItem>
                    <SelectItem value="Block E">Block E</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* DYNAMIC PROSPECT CARDS */}
            <div className="space-y-8 pt-4">
              {prospects.map((prospect, index) => (
                <div
                  key={prospect.id}
                  className="relative border rounded-2xl p-6 space-y-6 bg-zinc-50/50 dark:bg-zinc-800/20 group"
                >
                  {/* Delete Button (Show only if more than 1 card) */}
                  {prospects.length > 1 && (
                    <button
                      onClick={() => removeProspectCard(prospect.id)}
                      className="absolute -top-3 -right-3 p-2 bg-white border rounded-full text-red-500 shadow-sm hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}

                  <div className="space-y-2">
                    <Label className="uppercase text-[12px] font-bold text-zinc-400">
                      Play
                    </Label>
                    <Select
                      value={prospect.play}
                      onValueChange={(value) =>
                        updateProspect(prospect.id, "play", value)
                      }
                    >
                      <SelectTrigger className="bg-white dark:bg-zinc-900">
                        <SelectValue placeholder="Select Play" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Carbonates">Carbonates</SelectItem>
                        <SelectItem value="Clastics">Clastics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label className="uppercase text-[12px] font-bold text-zinc-400">
                      Prospect/Lead Name*
                    </Label>
                    {/* <p className="text-[12px] text-cyan-600 font-bold uppercase tracking-wider">
                    Theme: UNDERWATER CREATURES
                  </p> */}
                    <Input
                      placeholder="Enter Name"
                      value={prospect.name}
                      className="bg-white dark:bg-zinc-900"
                      onChange={(e) =>
                        updateProspect(
                          prospect.id,
                          "name",
                          capitalizeWords(e.target.value),
                        )
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="uppercase text-[12px] font-bold text-zinc-400">
                      Short Name
                    </Label>
                    <div className="flex gap-4">
                      <Input
                        disabled
                        placeholder="Generated Short Name"
                        className="flex-1 bg-zinc-100 dark:bg-zinc-800"
                        value={prospect.shortName} // Show the generated name
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="bg-zinc-900 px-8 border-zinc-300"
                        onClick={() => {
                          // 1. Generate the string
                          const generated = generateShortName(prospect.name);
                          // 2. Save it to this specific prospect's state
                          updateProspect(prospect.id, "shortName", generated);
                        }}
                      >
                        Generate
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="uppercase text-[12px] font-bold text-zinc-400">
                      Submission Year
                    </Label>
                    <Select
                      value={prospect.year}
                      onValueChange={(value) =>
                        updateProspect(prospect.id, "year", value)
                      }
                    >
                      <SelectTrigger className="w-full md:w-1/3 bg-white dark:bg-zinc-900">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 35 }, (_, i) => {
                          const yearValue = (1995 + i).toString();
                          return (
                            <SelectItem key={yearValue} value={yearValue}>
                              {yearValue}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex justify-between items-center pt-6">
              <Button type="button" onClick={addProspectCard} variant="outline">
                <Plus size={18} className="text-green-600 stroke-[3px]" />
                Add prospect
              </Button>

              <Button type="submit" variant="outline_two">
                Submit{" "}
                {prospects.length > 1 ? `${prospects.length} Prospects` : ""}
              </Button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
