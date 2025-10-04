import React from "react";
import { Button } from "../button";
import { Card } from "../card";
import { CirclePlay } from "lucide-react";
import CustomCard from "./customcard";

const CrmConnections = ({ setStep }) => {
  const companyimages = [
    "/images/saleforce.png",
    "/images/saleforce.png",
    "/images/saleforce.png",
    "/images/saleforce.png",
    "/images/saleforce.png",
    "/images/saleforce.png",
    "/images/saleforce.png",
    "/images/saleforce.png",
  ];

  const handleNext = () => {
    setStep(3)
  };

  return (
    <CustomCard
      Title={"Great. Let’s connect your CRM."}
      Subtitle={"Which of these do you use?"}
      buttontext={"Next->"}
      onContinue={handleNext}
    >
      <div className="grid grid-cols-3 gap-2 items-center">
        {companyimages.map((item, index) => (
          <Card
            key={index}
            className="w-base h-30 flex items-center justify-center"
          >
            <img
              src={item}
              alt={`CRM logo ${index + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </Card>
        ))}
      </div>
      <div className="flex items-center justify-center mt-6 ">
        <Button className="w-xl h-12 bg-transparent border text-xl font-light text-gray-400 items-center hover:bg-transparent hover:text-black">
          None, or skip this step
        </Button>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 mt-6">
        <CirclePlay color="#1A86C4" />
        <h1 className="text-[#1A86C4] font-light text-lg">
          How CRM integrations work in NestQ
        </h1>
      </div>


    </CustomCard>
  );
};

export default CrmConnections;
