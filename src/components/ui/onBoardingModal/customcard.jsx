import React from "react";
import { Card } from "../card";
import { Button } from "../button";
const CustomCard = ({ Title, Subtitle, children, buttontext, onContinue }) => {
  return (
    <div>
      <Card className="p-6 md:p-8 space-y-6 w-[800px] h-auto">
        <div className="flex flex-col items-center text-center space-y-2 mt-3">
          <h1 className="text-3xl font-medium">{Title}</h1>
          <p className="text-gray-500 text-2xl font-light mt-6 text-center justify-center">{Subtitle}</p>
        </div>
        <div className="mt-4">{children}</div>
        <div className="mt-20">
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-end space-x-2">
            <Button
              type="submit"
              onClick={onContinue}
              className="bg-[#11B424] text-white py-1.5 px-3 rounded-lg transition"
            >
              {buttontext}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CustomCard;
