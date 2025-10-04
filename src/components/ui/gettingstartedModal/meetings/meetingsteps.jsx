import React from "react";
import CustomCard from "@/components/ui/gettingstartedModal/customcard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SelectionCard from "@/components/ui/gettingstartedModal/selectioncard";
import { CircleArrowOutUpRight } from "lucide-react";
import { MonitorDot,MessageCircleMore ,Video,FolderPen} from 'lucide-react';

const Meetingsteps = () => {
  return (
    <>
      <CustomCard
      showConnectorLine={true}
      icon={<MonitorDot />}
        Title="Hold a virtual meetingwith NestQ notetaker"
        subheading="This step will be marked complete once you’ve successfully captured a meeting with Jump’s notetaker."
      >
        <Input placeholder="Good NoteTaker"></Input>

        <Button className="mt-3 cursor-pointer bg-transparent border-2 border-black text-black hover:bg-black hover:text-white">
          I don't do virtual meetings
        </Button>
        <p className=" text-[#1A86C4] mt-2">
          Learn how the NestQ notetaker works
        </p>
      </CustomCard>
      <CustomCard
      icon={<MessageCircleMore />}
        Title="Send the notetaker to a meeting manually"
        subheading="Start a virtual meeting, then click “New Meeting” in the left navigation menu to send the notetaker manually.."
      >
        <Input placeholder="Good NoteTaker"></Input>

        <Button className="mt-3 cursor-pointer bg-transparent border-2 border-black text-black hover:bg-black hover:text-white">
          I don't do remote meetings
        </Button>
      </CustomCard>
      <SelectionCard
        Title={"Do you ever do in-person meetings?"}
        buttons={[{ text: "Yes" }, { text: "No" }]}
      />
      <CustomCard
      showConnectorLine={true}
      icon={<Video />}
        Title={"Reprocess a meeting"}
        subheading={
          "Try reprocessing a meeting by clicking the blue “Reprocess meeting” link above the meeting notes. This will allow you to select a different meeting type."
        }
      >
        <Button
          className={
            "bg-transparent text-black w-lg border-2 border-black hover:text-white"
          }
        >
          <CircleArrowOutUpRight />
          Go to example meeting
        </Button>
        <p className=" text-[#1A86C4] mt-2">
          Learn about reprocessing meetings
        </p>
      </CustomCard>
      <CustomCard
      icon={<FolderPen />}
        Title={"Rename speakers in a meeting"}
        subheading={
          "Try renaming speakers by going to a meeting and clicking the white View meeting button.You'll see a transcript,click on the speaker names to reanme them ."
        }
      >
        <Button
          className={
            "bg-transparent text-black w-lg border-2 border-black hover:text-white"
          }
        >
          <CircleArrowOutUpRight />
          Go to example meeting
        </Button>
        <p className=" text-[#1A86C4] mt-2">
          Learn about reprocessing meetings
        </p>
      </CustomCard>
    </>
  );
};

export default Meetingsteps;
