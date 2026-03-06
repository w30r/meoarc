// app / basin / add / page.tsx;
import Header from "@/app/components/Header";
import Title from "@/app/components/Title";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
// import { NumberInput, NumberInputField } from "@/components/ui/number-input";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <Header />
      <Title title="Add New Basin" />
      <main className="max-w-4xl mx-auto py-12 px-6">
        <form className="mt-8 bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* --- SECTION: CLASSIFICATION --- */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Classification
              </h3>

              <div className="space-y-2">
                <label className="text-sm font-medium">Basin Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Basin Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Main">Main</SelectItem>
                    <SelectItem value="Sub">Sub</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Region</label>
                <Select>
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
            </div>

            {/* --- SECTION: DETAILS --- */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Basin Details
              </h3>

              <div className="space-y-2">
                <label className="text-sm font-medium">Basin Name</label>
                <Input
                  placeholder="Enter basin name"
                  className="dark:bg-zinc-800"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Sub Basin Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sub Basin Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Belt">Belt</SelectItem>
                    <SelectItem value="Trough">Trough</SelectItem>
                    <SelectItem value="Province">Province</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* --- SECTION: PHYSICAL MEASUREMENTS (Spans 2 columns) --- */}
            <div className="md:col-span-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">
                Physical Measurements
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium">Length (km)</label>
                  <Input type="number" placeholder="0.0" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium">Width (km)</label>
                  <Input type="number" placeholder="0.0" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium">Acreage</label>
                  <Input type="number" placeholder="0.0" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium">Thickness</label>
                  <Input type="number" placeholder="0.0" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-end gap-3">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" className="px-8">
              Create Basin
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
