"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mic, Upload, SendHorizontal, Mail, Smartphone } from "lucide-react";

const CustomDropDown = ({ value, btntext }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{btntext}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-70">
        <DropdownMenuItem>
          <div className="flex flex-row gap-2">
            <Mic color="black" />
            <div className="flex flex-col">
              <h1> Capture meeting now</h1>
              <p className="text-gray-600 font-thin">
                in-person meeting or dictation
              </p>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-row gap-2">
            <Upload color="black" />
            <div className="flex flex-col">
              <h1> Upload meeting audio</h1>
              <p className="text-gray-600 font-thin">
                Use for existing recordings
              </p>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-row gap-2">
            <SendHorizontal color="black" />

            <div className="flex flex-col">
              <h1> send notetaker to meeting</h1>
              <p className="text-gray-600 font-thin">Add meeting URL</p>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-row gap-2">
            <Mail color="black" />

            <div className="flex flex-col">
              <h1> Schedule new meeting</h1>
              <p className="text-gray-600 font-thin">
                Create email from template
              </p>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-row gap-2">
            <Smartphone color="black" />
            <div className="flex flex-col">
              <h1> Join my call</h1>
              <p className="text-gray-600 font-thin">
                Get jump to join a phone call
              </p>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropDown;
