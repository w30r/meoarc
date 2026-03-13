// src/app/components/DatePicker.tsx

"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerSimpleProps {
  selectedDate: Date; // No more pipe null!
  onSelectDate: (date: Date) => void;
}

export function DatePickerSimple({
  selectedDate,
  onSelectDate,
}: DatePickerSimpleProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Field className="mx-auto w-44 text-primary">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="justify-start font-normal"
          >
            {selectedDate ? selectedDate.toLocaleDateString() : "Select date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            defaultMonth={selectedDate}
            captionLayout="dropdown"
            onSelect={(date) => {
              // Check if date exists before calling the prop function
              if (date) {
                onSelectDate(date);
                setOpen(false);
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
