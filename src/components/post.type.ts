export interface TypePost {
  user: {
    id: string
    name: string
    avatarUrl: string
  }
  imageUrl: string
  caption: string
  likes: number
  comments: {
    id: string
    userId: string
    text: string
    userName: string
    timestamp: string // Add timestamp to comments
  }[]
  timestamp: string // ISO 8601 date string
}
