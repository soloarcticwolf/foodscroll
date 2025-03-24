'use client'

import { AppSidebar } from '@/components/app-sidebar'
import ChatBox from '@/components/chat-box'
import { TypeChatUser } from '@/components/chat.type'
import ChatSidebar from '@/components/chatbar'
import Post from '@/components/post'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { examplePost, users } from '@/data/dummy-data'
import { Separator } from '@radix-ui/react-separator'
import { useState } from 'react'

export default function Page() {
  const [selectedUser, setSelectedUser] = useState<TypeChatUser | null>(null)

  const handleUserClick = (user: TypeChatUser) => {
    setSelectedUser(user)
  }

  const handleCloseChat = () => {
    setSelectedUser(null)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="masterContentContainer flex ">
          <div className="leftContent flex justify-around w-full">
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <Separator orientation="vertical" className="mr-2 h-4" />
                {/* :: Add search here */}
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              {/* :: Add content here */}
              <div className="postContainer m-auto grid gap-4 w-[600px]">
                <Post post={examplePost} />
                <Post post={examplePost} />
              </div>
            </div>
            <div className={`visuallyHidden w-64`} />
          </div>
          <div className="rightContent h-screen fixed right-0">
            <div className={`chatSideBar h-full w-64 border-l-2`}>
              {/* :: Add chat sidebar here */}
              <div className="flex relative">
                <ChatSidebar users={users} onUserClick={handleUserClick} />
                {selectedUser && (
                  <ChatBox user={selectedUser} onClose={handleCloseChat} />
                )}
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
