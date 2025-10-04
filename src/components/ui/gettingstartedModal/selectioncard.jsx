import React, { useState } from "react";
import { Card } from "../card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../button";

const SelectionCard = ({ Title, buttons = [], children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="w-2xl p-3 bg-gray-100 border-2 border-gray-300 ">
      <div
        className="flex flex-row justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row gap-2">
          <h1 className="text-md font-normal text-gray-500 ">{Title}</h1>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>

      {isOpen && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {buttons.map((btn, idx) => (
              <Button
                key={idx}
                variant={btn.variant || "outline"}
                className="w-full sm:w-auto bg-transparent text-black border-black cursor-pointer hover:text-white hover:bg-black "
              >
                {btn.img && (
                  <img
                    src={btn.img}
                    height={12}
                    width={16}
                    alt="btn icon"
                    className="mr-2"
                  />
                )}
                {btn.text}
              </Button>
            ))}
          </div>
          <div className="pl-8">{children}</div>
        </div>
      )}
    </Card>
  );
};

export default SelectionCard;
