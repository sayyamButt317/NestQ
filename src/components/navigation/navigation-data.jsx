import {
  Settings2,
  LifeBuoy,
  Send,
  FileText,
  PieChart,
  // FileSpreadsheet,
  // Scroll,
} from "lucide-react";

const navigationData = {
  navMain: [
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "Investment strategies", url: "#" },
        { title: "Risk tolerance", url: "#" },
        { title: "Benchmarks", url: "#" },
        { title: "Fee schedules", url: "#" },
        { title: "Integrations", url: "#" },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
  navonboarding: [
    {
      title: "Getting Started",
      url: "/getting-started",
    },
    {
      title: "Home",
      url: "/",
    },
  ],
  agents: [
    {
      name: "Statement Scanner",
      url: "/statements",
      icon: FileText,
    },
    // {
    //   name: "Portfolio Reports",
    //   url: "/analyzer",
    //   icon: PieChart,
    // },
    // {
    //   name: "Proposal Generator",
    //   url: "/generator",
    //   icon: FileSpreadsheet,
    // },
    // {
    //   name: "Estate Analyzer",
    //   url: "/estates",
    //   icon: Scroll,
    // },
  ],
};

export default navigationData;
