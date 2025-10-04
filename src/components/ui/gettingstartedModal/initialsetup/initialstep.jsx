import React from "react";
import CustomCard from "@/components/ui/gettingstartedModal/customcard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SelectionCard from "@/components/ui/gettingstartedModal/selectioncard";
import Stepper from "@/components/ui/gettingstartedModal/stepper";
import { Mail,LayoutDashboard,NotebookPen } from 'lucide-react';

const Initialstep = () => {

  return (
    <div className="flex gap-6">
      <div className="flex-1 space-y-4">
        <h1 className="text-lg font-medium">Initial Setup</h1>


        <CustomCard
        icon={<Mail  />}
          Title="Connect Email and Calendars"
          subheading="Connecting email and calendar allows NestQ to send the notetaker to upcoming meetings automatically and draft formatted emails for you."
          footerline="Learn about connecting email and calendar"
          buttons={[
            { text: "Microsoft", img: "/icons/microsoft.png" },
            { text: "Google", img: "/icons/google.png" },
            { text: "Exchange", img: "/icons/exchange.png" },
          ]}
          showConnectorLine={true}
        />

        <CustomCard
        icon={<LayoutDashboard />}
          Title="Connect CRM"
          subheading="Connect your CRM to get meeting prep and sync notes and tasks into your CRM"
          footerline="Learn about CRM connections in NestQ"
          buttons={[
            { text:"Saleforce", img: "/svg/saleforce.svg" },
            {  text:"Redtail",img: "/icons/redtail.png" },
            { text: "Wealthbox", img: "/icons/exchange.png" },
            { text: "HubSpot", img: "/icons/hubspot.png" },
            { text: "Dynamic 365", img: "/icons/microsoftdynamic.png" },
            { text: "Practifi", img: "/icons/practifi.png" },
            { text: "Quivr", img: "/icons/Quivr.png" },
            { text: "XLR8", img: "/icons/xlr8.png" },
            { text: "I am not Going to Connect a CRM" },
          ]}
          showConnectorLine={true}
        />

        <CustomCard
        icon={<NotebookPen />}
          Title="Adjust notetaker name"
          subheading="Customize the name you'd like your notetaker to appear with in remote meetings. Changes made here will affect all users in your account."
          
        >
          <Input placeholder="Good NoteTaker" />
          <Button className="mt-3">Save</Button>
          <p className="text-[#1A86C4] mt-2">
            Learn how the NestQ notetaker works
          </p>
        </CustomCard>

        <SelectionCard
          Title={"Do you plan add more users to your NestQ account?"}
          buttons={[{ text: "Yes" }, { text: "No" }]}
        />
      </div>
    </div>
  );
};

export default Initialstep;
