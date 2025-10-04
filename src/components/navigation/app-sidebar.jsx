import nestqLogo from '@/assets/nestq-logo-crop.svg'
import { NavMain } from "@/components/navigation/nav-main"
import { NavAgents } from "@/components/navigation/nav-agents"
import { NavSecondary } from "@/components/navigation/nav-secondary"
import { NavUser } from "@/components/navigation/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import  navigationData  from "./navigation-data"
import { Link } from "react-router-dom"
import React from 'react';
import CustomDropDown from "@/components/ui/gettingstartedModal/customdropdown";
export function AppSidebar({
  ...props
}) {
  return (
    (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <img 
                    src={nestqLogo} 
                    alt="NestQ Logo" 
                    className="h-8 w-auto [filter:none]"
                    style={{ color: 'inherit' }}
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <div className="flex items-center gap-2">
                    <span className="truncate font-semibold">NestQ</span>
                  </div>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <CustomDropDown btntext={ "New Meeting"}/>
      </SidebarHeader>
      <SidebarContent>
        {/* <NavAgents agents={navigationData.agents} /> */}
        <NavSecondary items={navigationData.navonboarding} />
        <NavMain items={navigationData.navMain} />
        <NavSecondary items={navigationData.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
    )
  );
}
