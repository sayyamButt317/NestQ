import React from "react";

const Stepper = ({ step, icons }) => {
  return (
    <div className="flex flex-col items-center gap-0">
      {icons.map((icon, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`rounded-full p-1 border-2 ${
              index <= step ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <img src={icon} alt={`Step ${index + 1}`} width={32} height={32} />
          </div>
          {index < icons.length - 1 && (
            <div
              className={`w-1 h-10 ${
                index < step ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};


export default Stepper;
