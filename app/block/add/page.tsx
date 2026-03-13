// src/app/block/add/page.tsx

"use client";
import Title from "@/app/components/Title";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { DatePickerSimple } from "@/app/components/DatePicker";

export default function Home() {
  const [blockName, setblockName] = useState("");
  const [blockType, setblockType] = useState("");
  const [subblockType, setSubblockType] = useState("");
  const [blockStatus, setBlockStatus] = useState("");
  const [pscAwardedDate, setPscAwardedDate] = useState<Date>(new Date());
  const [pscEffectiveDate, setPscEffectiveDate] = useState<Date>(new Date());
  const [pscExpiryDate, setPscExpiryDate] = useState<Date>(new Date());
  const handleblockNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
      .replace(/\s\s+/g, " ") // Only fix DOUBLE spaces (let one space live! )
      .replace(/(^|\s)\w/g, (c) => c.toUpperCase()); // Keep Title Case
    setblockName(value);
  };

  const handleDateChange = (date: Date) => {
    setPscAwardedDate(date);
  };

  return (
    <div className="placeholder:text-secondary/40 flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-background">
      <Title title="Add Block" back="/block/list" />
      <main className="placeholder:text-secondary/40 min-w-6xl mx-auto px-6">
        <form className="placeholder:text-secondary/40 mt-8 bg-background dark:bg-card/50 shadow-sm border border-border dark:border-outline rounded-xl p-8">
          <div className="placeholder:text-secondary/40  px-8 py-4 flex items-center justify-around mb-6 border-b">
            <div className="placeholder:text-secondary/40 w-1/2">
              <h1 className="bg-card p-4 rounded-xl shadow-2xs">
                {blockName
                  ? blockType === "Main"
                    ? blockName + " Basin"
                    : blockName + " " + subblockType
                  : "Generated Block Name"}
              </h1>
              {/* <Input
                placeholder="Generated Basin Name"
                className="placeholder:text-secondary/40 dark:bg-card text-foreground text-start transition-all duration-200"
                value={
                  blockName
                    ? blockType === "Main"
                      ? blockName + " Basin"
                      : blockName + " " + subblockType
                    : ""
                }
              /> */}
            </div>
            <div>
              <label className="placeholder:text-secondary/40 text-sm font-medium">
                Block Status
              </label>
              <div className="placeholder:text-secondary/40 flex items-center gap-3 ">
                <Switch
                  id="AwardedBlock"
                  checked={blockStatus === "Awarded Block"}
                  onCheckedChange={(checked) => {
                    setBlockStatus(checked ? "Awarded Block" : "Open Block");
                    if (checked) {
                      setblockName("");
                      setblockType("");
                      setSubblockType("");
                      setPscAwardedDate(new Date());
                      setPscEffectiveDate(new Date());
                      setPscExpiryDate(new Date());
                    }
                  }}
                />
                <Label htmlFor="AwardedBlock">Awarded Block</Label>
              </div>
              <div className="placeholder:text-secondary/40 flex items-center gap-3">
                <Switch
                  id="OpenBlock"
                  checked={blockStatus === "Open Block"}
                  onCheckedChange={(checked) =>
                    setBlockStatus(checked ? "Open Block" : "Awarded Block")
                  }
                />
                <Label htmlFor="OpenBlock">Open Block</Label>
              </div>
            </div>
          </div>
          <div className="placeholder:text-secondary/40 border-b py-2">
            <div className="placeholder:text-secondary/40 space-y-2">
              <label className="placeholder:text-secondary/40 text-sm font-medium">
                Country
              </label>
              {/* Move the logic here! */}
              <Select onValueChange={(value) => setblockType(value)} disabled>
                <SelectTrigger>
                  <SelectValue placeholder="Malaysia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Malaysia">Malaysia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="placeholder:text-secondary/40 space-y-2">
              <label className="placeholder:text-secondary/40 text-sm font-medium ">
                Region
              </label>
              {/* Move the logic here! */}
              <Select onValueChange={(value) => setblockType(value)}>
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
            <div className="placeholder:text-secondary/40 space-y-2">
              <label className="placeholder:text-secondary/40 text-sm font-medium ">
                Basin Name
              </label>
              <Select onValueChange={(value) => setblockType(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Basin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Arong Graben Basin">
                    Arong Graben Basin
                  </SelectItem>
                  <SelectItem value="Langkasuka Basin">
                    Langkasuka Basin
                  </SelectItem>
                  <SelectItem value="Malay Basin">Malay Basin</SelectItem>
                  <SelectItem value="Penyu Basin">Penyu Basin</SelectItem>
                  <SelectItem value="Strait of Melaka Basin">
                    Strait of Melaka Basin
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Conditional rendering based on blockStatus */}
          {blockStatus === "Awarded Block" && (
            <div className="placeholder:text-secondary/40 flex items-start justify-evenly pt-4">
              <div className="placeholder:text-secondary/40 w-1/4">
                <div className="placeholder:text-secondary/40 space-y-2">
                  <label className="placeholder:text-secondary/40 text-sm font-medium ">
                    Block Name
                  </label>
                  <Select onValueChange={(value) => setblockName(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Block Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Block A">Block A</SelectItem>
                      <SelectItem value="Block B">Block B</SelectItem>
                      <SelectItem value="Block C">Block C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="placeholder:text-secondary/40 space-y-2">
                  <label className="placeholder:text-secondary/40 text-sm font-medium ">
                    Block Location
                  </label>
                  <Select onValueChange={(value) => setblockType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Block Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Offshore">Offshore</SelectItem>
                      <SelectItem value="Onshore">Onshore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="placeholder:text-secondary/40 space-y-2">
                  <label className="placeholder:text-secondary/40 text-sm font-medium ">
                    Drilling Type
                  </label>
                  <Select onValueChange={(value) => setblockType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Drilling Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Deepwater">Deepwater</SelectItem>
                      <SelectItem value="Onshore">Onshore</SelectItem>
                      <SelectItem value="Shallow & Deepwater">
                        Shallow & Deepwater
                      </SelectItem>
                      <SelectItem value="Shallow Water">
                        Shallow Water
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="placeholder:text-secondary/40 w-1/3">
                <div className="placeholder:text-secondary/40 space-y-2">
                  <label className="placeholder:text-secondary/40 text-sm font-medium ">
                    Operator
                  </label>
                  <Select onValueChange={(value) => setblockType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Operator" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Deepwater">Deepwater</SelectItem>
                      <SelectItem value="Onshore">Onshore</SelectItem>
                      <SelectItem value="Shallow & Deepwater">
                        Shallow & Deepwater
                      </SelectItem>
                      <SelectItem value="Shallow Water">
                        Shallow Water
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="placeholder:text-secondary/40 space-y-2">
                  <label className="placeholder:text-secondary/40 text-sm font-medium ">
                    Type of Operator
                  </label>
                  <Select onValueChange={(value) => setblockType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Type of Operator" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Deepwater">Deepwater</SelectItem>
                      <SelectItem value="Onshore">Onshore</SelectItem>
                      <SelectItem value="Shallow & Deepwater">
                        Shallow & Deepwater
                      </SelectItem>
                      <SelectItem value="Shallow Water">
                        Shallow Water
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="placeholder:text-secondary/40 space-y-2">
                  <label className="placeholder:text-secondary/40 text-sm font-medium ">
                    PSC Type
                  </label>
                  <Select onValueChange={(value) => setblockType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select PSC Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Deepwater">Deepwater</SelectItem>
                      <SelectItem value="Onshore">Onshore</SelectItem>
                      <SelectItem value="Shallow & Deepwater">
                        Shallow & Deepwater
                      </SelectItem>
                      <SelectItem value="Shallow Water">
                        Shallow Water
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="placeholder:text-secondary/40 space-y-2">
                  <label className="placeholder:text-secondary/40 text-sm font-medium ">
                    PSC Phase
                  </label>
                  <Select onValueChange={(value) => setblockType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select PSC Phase" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Deepwater">Deepwater</SelectItem>
                      <SelectItem value="Onshore">Onshore</SelectItem>
                      <SelectItem value="Shallow & Deepwater">
                        Shallow & Deepwater
                      </SelectItem>
                      <SelectItem value="Shallow Water">
                        Shallow Water
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="placeholder:text-secondary/40 flex flex-col gap-4 w-1/3 items-start">
                <div className="placeholder:text-secondary/40 space-y-2">
                  <div className="placeholder:text-secondary/40 flex flex-col ">
                    <label className="placeholder:text-secondary/40 text-sm font-medium ">
                      PSC Awarded Date
                    </label>
                    <DatePickerSimple
                      selectedDate={pscAwardedDate}
                      onSelectDate={handleDateChange}
                    />
                  </div>
                </div>
                <div className="placeholder:text-secondary/40 space-y-2">
                  <label className="placeholder:text-secondary/40 text-sm font-medium ">
                    PSC Effective Date
                  </label>{" "}
                  <DatePickerSimple
                    selectedDate={pscEffectiveDate}
                    onSelectDate={handleDateChange}
                  />
                </div>
                <div className="placeholder:text-secondary/40 space-y-2">
                  <label className="placeholder:text-secondary/40 text-sm font-medium ">
                    PSC Expiry Date
                  </label>{" "}
                  <DatePickerSimple
                    selectedDate={pscExpiryDate}
                    onSelectDate={handleDateChange}
                  />
                </div>
              </div>
            </div>
          )}

          {blockStatus === "Open Block" && (
            <div>
              <div className="placeholder:text-secondary/40 space-y-2">
                <label className="placeholder:text-secondary/40 text-sm font-medium ">
                  Block Name
                </label>
                <Input
                  onChange={handleblockNameChange}
                  value={blockName}
                  placeholder="Block Name"
                  className="placeholder:text-secondary/40 w-1/4 flex mb-2"
                />
              </div>
              <div className="placeholder:text-secondary/40 space-y-2">
                <label className="placeholder:text-secondary/40 text-sm font-medium ">
                  Block Location
                </label>
                <Select onValueChange={(value) => setblockType(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Block Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Offshore">Offshore</SelectItem>
                    <SelectItem value="Onshore">Onshore</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="placeholder:text-secondary/40 space-y-2">
                <label className="placeholder:text-secondary/40 text-sm font-medium ">
                  Drilling Type
                </label>
                <Select onValueChange={(value) => setblockType(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Drilling Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Deepwater">Deepwater</SelectItem>
                    <SelectItem value="Onshore">Onshore</SelectItem>
                    <SelectItem value="Shallow & Deepwater">
                      Shallow & Deepwater
                    </SelectItem>
                    <SelectItem value="Shallow Water">Shallow Water</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </form>
        <div className="placeholder:text-secondary/40 mt-4 flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </div>
      </main>
    </div>
  );
}
