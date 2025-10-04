import React, { useState } from "react";
import CompanyName from "./companyName";
import CrmConnections from "./crmConnections";
import NoteTaker from "./notetaker";
import WelcomeOnboarding from "./welcome";

const OnboardingModal = ({
  isOpen,
  closeModal,
}) => {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/10 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {step === 1 && <CompanyName setStep={setStep} />}
        {step === 2 && <CrmConnections setStep={setStep} />}
        {step === 3 && <NoteTaker setStep={setStep}  />}
        {step === 4 && <WelcomeOnboarding setStep={setStep} closeModal={closeModal}/>}

      </div>
    </div>
  );
};

export default OnboardingModal;
