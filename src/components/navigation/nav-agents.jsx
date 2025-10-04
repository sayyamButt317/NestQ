import { useLocation } from 'react-router-dom'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from 'react-router-dom'
import { cn } from "@/lib/utils"
import React from 'react';

export function NavAgents({
  agents
}) {
  const location = useLocation()

  return (
    (<SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Agents</SidebarGroupLabel>
      <SidebarMenu>
        {agents.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link 
                to={item.url} 
                className={cn(
                  "flex items-center",
                  location.pathname.startsWith(item.url) && "bg-accent text-accent-foreground"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>)
  );
}
