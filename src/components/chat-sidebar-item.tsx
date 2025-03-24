import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { FC } from 'react'
import { TypeChatUser } from './chat.type'

const ChatSidebarItem: FC<{
  user: TypeChatUser
  onUserClick: (user: TypeChatUser) => void
}> = ({ user, onUserClick }) => {
  const { name, profilePicture, isActive } = user

  return (
    <div
      className="flex items-center p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
      onClick={() => onUserClick(user)}
    >
      <div className="relative mr-3">
        <Avatar>
          <AvatarImage
            src={profilePicture}
            alt={name}
            className="rounded-full"
          />
          <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        {isActive && (
          <span className="absolute bottom-0 w-3 h-3 left-0 rounded-full bg-green-500 border-2 border-white" />
        )}
      </div>
      <span className="text-sm">{name}</span>
    </div>
  )
}

export default ChatSidebarItem
