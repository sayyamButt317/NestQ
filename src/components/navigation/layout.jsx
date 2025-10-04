import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/navigation/app-sidebar"
import { Separator } from "@/components/ui/separator"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useLocation, Link } from 'react-router-dom'
import React from 'react'
import navigationData  from './navigation-data'

function findNameForUrl(url) {
  // Check main navigation items
  for (const item of navigationData.navMain) {
    if (item.url === url) return item.title
    if (item.items) {
      for (const subItem of item.items) {
        if (subItem.url === url) return subItem.title
      }
    }
  }
  
  // Check secondary navigation items
  for (const item of navigationData.navSecondary) {
    if (item.url === url) return item.title
  }
  
  // Check agents
  for (const agent of navigationData.agents) {
    if (agent.url === url) return agent.name
  }
  
  // If no match found, return the last part of the URL
  return url.split('/').pop()
}

export function Layout({ children }) {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </BreadcrumbItem>
                {pathnames.map((segment, index) => {
                  const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
                  const isLast = index === pathnames.length - 1
                  const name = findNameForUrl(routeTo)

                  return (
                    <React.Fragment key={routeTo}>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage>{name}</BreadcrumbPage>
                        ) : (
                          <Link 
                            to={routeTo}
                            className="hover:text-primary transition-colors"
                          >
                            {name}
                          </Link>
                        )}
                      </BreadcrumbItem>
                    </React.Fragment>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
