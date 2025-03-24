'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { formatDistanceToNow } from 'date-fns' // For timestamp formatting
import { motion } from 'framer-motion'
import { Heart, MessageCircle, MoreHorizontal, Send, Smile } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { TypePost } from './post.type'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

const Post: React.FC<{ post: TypePost }> = ({ post }) => {
  const [liked, setLiked] = React.useState(false)
  const [likesCount, setLikesCount] = React.useState(post.likes)
  const [commentText, setCommentText] = React.useState('')
  const [comments, setComments] = React.useState(post.comments)
  const [showAllComments, setShowAllComments] = React.useState(false) // State to toggle comment display

  const handleLike = () => {
    if (liked) {
      setLikesCount((prev) => prev - 1)
    } else {
      setLikesCount((prev) => prev + 1)
    }
    setLiked(!liked)
  }

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: crypto.randomUUID(),
        userId: 'currentUser', // Replace with actual user ID
        text: commentText,
        userName: 'CurrentUserName', // Replace
        timestamp: new Date().toISOString(), // Add timestamp
      }
      setComments([...comments, newComment])
      setCommentText('')
    }
  }

  const formattedTimestamp = formatDistanceToNow(new Date(post.timestamp), {
    addSuffix: true,
  })

  const displayedComments = showAllComments ? comments : comments.slice(0, 2) // Show only the first 2 comments

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-3xl"
    >
      <Card className="border-gray-700 bg-card text-card-foreground shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={post.user.avatarUrl} alt={post.user.name} />
              <AvatarFallback>{post.user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="font-semibold">{post.user.name}</div>
          </div>
          <MoreHorizontal className="h-5 w-5 text-gray-400" />
        </CardHeader>

        <CardContent className="p-0">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={post.imageUrl}
                  alt={`Post by ${post.user.name}`}
                  className="w-full aspect-square object-cover rounded-t-lg"
                  height={500}
                  width={500}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={post.imageUrl}
                  alt={`Post by ${post.user.name}`}
                  className="w-full aspect-square object-cover rounded-t-lg"
                  height={500}
                  width={500}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={post.imageUrl}
                  alt={`Post by ${post.user.name}`}
                  className="w-full aspect-square object-cover rounded-t-lg"
                  height={500}
                  width={500}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="p-4">
            <div className="flex items-center justify-between my-2">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleLike}
                  className={cn(
                    'h-8 w-8 p-0',
                    liked
                      ? 'text-red-500'
                      : 'text-gray-400 hover:text-gray-300 transition-colors'
                  )}
                >
                  <Heart className={cn('h-6 w-6', liked && 'fill-red-500')} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 p-0 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 p-0 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <Send className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <p className="text-sm font-semibold">
              {likesCount} {likesCount === 1 ? 'like' : 'likes'}
            </p>
            <p className="text-sm">
              <span className="font-semibold">{post.user.name}</span>{' '}
              {post.caption}
            </p>
            {displayedComments.map((comment) => (
              <p key={comment.id} className="text-sm">
                <span className="font-semibold">{comment.userName}</span>{' '}
                {comment.text}
                <span className="text-xs text-gray-500 ml-1">
                  {formatDistanceToNow(new Date(comment.timestamp), {
                    addSuffix: true,
                  })}
                </span>
              </p>
            ))}
            {comments.length > 2 && (
              <Button
                variant="link"
                size="sm"
                className="text-gray-500 p-0 mt-1 hover:text-gray-400"
                onClick={() => setShowAllComments(!showAllComments)}
              >
                View {showAllComments ? 'less' : 'all'} {comments.length - 2}{' '}
                comments
              </Button>
            )}
            <p className="text-xs text-gray-500 mt-2">{formattedTimestamp}</p>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-2">
          <div className="flex items-center space-x-2 w-full">
            <Smile className="h-6 w-6 text-gray-400" />
            <Input
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="flex-1 text-sm"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAddComment()
                }
              }}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleAddComment}
              className="text-blue-500 font-semibold"
            >
              Post
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default Post
