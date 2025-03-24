'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'
import { useState } from 'react'
import { TypeChatUser } from './chat.type'

const ChatBox = ({
  user,
  onClose,
}: {
  user: TypeChatUser
  onClose: () => void
}) => {
  const [messages, setMessages] = useState<string[]>([])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage])
      setNewMessage('')
    }
  }

  return (
    <div className="absolute bottom-0 right-[260px] w-74 bg-white border rounded-t-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Avatar className="mr-2">
            <AvatarImage src={user.profilePicture} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span>{user.name}</span>
        </div>
        <X onClick={onClose} size={18} />
      </div>
      <div className="h-44 overflow-y-auto mb-2">
        {messages.map((message, index) => (
          <div key={index} className="mb-1">
            {message}
          </div>
        ))}
      </div>
      <div className="flex">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="mr-2 flex-grow"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  )
}

export default ChatBox
