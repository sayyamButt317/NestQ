import React from "react";
import CustomCard from "./customcard";
import { Card } from "../card";
import { CirclePlay } from "lucide-react";
const NoteTaker = ({setStep}) => {
    const handleNext = () => {
    setStep(4)
  };
  return (
    <CustomCard
      Title={"Let’s get your notetaker working."}
      Subtitle={
        "Should we start sending a notetaker to your meetings by default?"
      }
      buttontext={"Next ->"}
      onContinue={handleNext}
      
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        <Card className="w-80 p-4 text-center h-40 items-center justify-center text-[#69717A] text-lg">Yes, start sending a notetaker to my meetings by default</Card>
        <Card className="w-80 p-4 text-center h-40 items-center justify-center text-[#69717A] text-lg">I'll handle this on a meeting-by-meeting basis</Card>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 mt-6">
  <CirclePlay color="#1A86C4" />
  <h1 className="text-[#1A86C4] font-light text-lg">
    How the notetaker works
  </h1>
</div>

    </CustomCard>
  );
};

export default NoteTaker;
