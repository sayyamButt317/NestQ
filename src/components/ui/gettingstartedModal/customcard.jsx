import React, { useState } from "react";
import { Card } from "../card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../button";

const CustomCard = ({
  Title,
  subheading,
  buttons = [],
  footerline,
  children,
  icon,
  showConnectorLine = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Card className="w-2xl p-3 bg-gray-100 border-2 border-gray-300 relative z-10">
        <div
          className="flex flex-row justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-row gap-2 items-start">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full p-1 border-2 ${
                isOpen
                  ? "border-black bg-transparent"
                  : "border-gray-300 bg-white"
              }`}
            >
              {icon}
            </div>

            <h1 className="text-xl font-normal text-black">{Title}</h1>
          </div>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>

        {isOpen && (
          <div className="space-y-3 mt-4 pl-12">
            {subheading && (
              <p className="text-sm text-muted-foreground">{subheading}</p>
            )}

            <div className="flex flex-wrap gap-2">
              {buttons.map((btn, idx) => (
                <Button
                  key={idx}
                  variant={btn.variant || "outline"}
                  className="w-full sm:w-auto bg-white text-black border-black cursor-pointer hover:text-white hover:bg-black"
                >
                  {btn.img && (
                    <img
                      src={btn.img}
                      height={20}
                      width={20}
                      alt="btn icon"
                      className="mr-2"
                    />
                  )}
                  {btn.text}
                </Button>
              ))}
            </div>

            {footerline && <p className="text-[#1A86C4]">{footerline}</p>}
            {children && <div>{children}</div>}
          </div>
        )}
      </Card>

      {showConnectorLine && (
        <div className="absolute top-10 left-2 w-px h-full bg-gray-300 z-0" />
      )}
    </div>
  );
};

export default CustomCard;
