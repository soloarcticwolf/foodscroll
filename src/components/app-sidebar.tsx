'use client'

import * as React from 'react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from '@/components/ui/sidebar'

import { sidebarLinks } from '@/data/sidebar'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = {
    name: 'S Hussain',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  }

  const updatedSidebarContent = { ...sidebarLinks, user }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={updatedSidebarContent.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={updatedSidebarContent.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
