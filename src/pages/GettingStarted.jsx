import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { Button } from "@/components/ui/button";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import OnboardingModal from "@/components/ui/onBoardingModal/onBoardingModal";
import CustomCard from "@/components/ui/gettingstartedModal/customcard";
import React from "react";
import CustomSwitch from "@/components/ui/gettingstartedModal/switch";
import Initialstep from "@/components/ui/gettingstartedModal/initialsetup/initialstep";
import Meetingsteps from "@/components/ui/gettingstartedModal/meetings/meetingsteps"
import { BellRing } from 'lucide-react';

export function GettingStarted() {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(true);

  function handleConnectCalendar(provider) {
    axiosPrivate.get(`/integrations/calendar/${provider}/link`).then((res) => {
      window.location.href = res.data.login_url;
    });
  }

  useEffect(() => {
    axiosPrivate.get("users/me").then((res) => {
      dispatch(setUser(res.data));
    });
  }, [axiosPrivate, dispatch]);

  return (
    <>
      {/* Onboarding Modal */}
      <OnboardingModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
      <div
        className={`flex flex-col space-y-4 p-4 items-start max-w-md mx-auto ${
          isModalOpen ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <h1 className="text-2xl font-medium">Getting Started</h1>
        <Initialstep />
       <h1 className="text-xl font-normal text-black p-2">Customize your Account</h1>
        <CustomCard
        icon={<BellRing />}
          Title={"Adjust notification settings"}
          subheading={"Choose when you'd like to get notifications from NestQ"}
        >
          <CustomSwitch />
          <Button className=" mt-4 bg-transparent text-black border-black border-2 hover:text-white">
            Done Adjusting notification settings
          </Button>
          <p className=" text-[#1A86C4] mt-2">Learn how notifications work</p>
        </CustomCard>
        <h1 className="text-xl font-normal text-black p-2">Use NestQ for meetings</h1>
        <Meetingsteps/>
      </div>
    </>
  );
}
