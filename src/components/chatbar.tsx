import { FC } from 'react'
import ChatSidebarItem from './chat-sidebar-item'
import { TypeChatUser } from './chat.type'

const ChatSidebar: FC<{
  users: TypeChatUser[]
  onUserClick: (user: TypeChatUser) => void
}> = ({ users, onUserClick }) => {
  return (
    <div className="w-64 border-r border-gray-200 h-screen overflow-y-auto rounded-l-4xl">
      <header className=" border-2flex p-5 pl-3 border-b-2">
        <span className="self-center text-gray-500 text-sm font-semibold">
          Friends
        </span>
      </header>
      {users.map((user) => (
        <ChatSidebarItem key={user.id} user={user} onUserClick={onUserClick} />
      ))}
    </div>
  )
}

export default ChatSidebar
