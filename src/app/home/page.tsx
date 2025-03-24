'use client'

import { AppSidebar } from '@/components/app-sidebar'
import ChatBox from '@/components/chat-box'
import { TypeChatUser } from '@/components/chat.type'
import ChatSidebar from '@/components/chatbar'
import Post from '@/components/post'
import SearchBar from '@/components/ui/search'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { examplePost, users } from '@/data/dummy-data'
import { useState } from 'react'

export default function Page() {
  const [searchText, setSearchText] = useState('')
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
        <div className="masterContentContainer flex border-2 border-green-600">
          <div className="leftContent flex justify-around flex-col border-2 border-blue-600 ">
            <div className="flex-1"></div>
            <header className="flex h-16 shrink-0 border-b-2 mb-6 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="m-auto w-[600px] px-4">
                {/* :: Add search here */}
                <SearchBar
                  searchText={searchText}
                  searchAction={setSearchText}
                />
              </div>
            </header>
            <div className="p-4 flex justify-center border-2 border-red-600">
              {/* :: Add content here */}
              <div className="postContainer grid gap-4 w-[600px]">
                <Post post={examplePost} />
                <Post post={examplePost} />
              </div>
            </div>
          </div>
          <div className="rightContent h-screen">
            <div
              className={`chatSideBar h-screen w-64 border-2 border-red-600 right-0 relative`}
            >
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
