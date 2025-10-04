"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverTrigger, PopoverContent } from "../popover";

const statuses = [
  {
    value:
      "Most Common seat type. Access to all plan features, including recording and AI automations.",
    label: "Full",
  },
];

export function ComboboxPopover({ value, onChange }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start h-12 text-left"
          >
            {value ? value : "Full"} 
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-lg" align="start">
          <Command>
            <CommandList>
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    onChange(statuses[0].label); 
                    setOpen(false);
                  }}
                >
                  <div className="space-y-1">
                    <div className="font-bold">{statuses[0].label}</div> 
                    <div className="text-gray-500 text-sm">{statuses[0].value}</div> 
                  </div>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
