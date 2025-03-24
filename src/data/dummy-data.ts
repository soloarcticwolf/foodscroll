import { TypePost } from '@/components/post.type'

// Example Usage (for demonstration in Next.js)
export const examplePost: TypePost = {
  user: {
    id: 'user1',
    name: 'johndoe',
    avatarUrl: 'https://placehold.co/40x40/000/FFF/png?text=JD&font=Roboto', // Placeholder
  },
  imageUrl:
    'https://placehold.co/600x600/EEE/31343C/png?text=Post+Image&font=Roboto', // Placeholder
  caption: 'Enjoying a beautiful day! #sunshine #happy',
  likes: 125,
  comments: [
    {
      id: 'comment1',
      userId: 'user2',
      text: 'Nice pic!',
      userName: 'jane_smith',
      timestamp: '2024-07-24T10:00:00Z',
    },
    {
      id: 'comment2',
      userId: 'user3',
      text: 'Where is this?',
      userName: 'travel_bug',
      timestamp: '2024-07-24T11:00:00Z',
    },
    {
      id: 'comment3',
      userId: 'user4',
      text: 'Looks amazing!',
      userName: 'foodie_gal',
      timestamp: '2024-07-24T12:00:00Z',
    },
  ],
  timestamp: '2024-07-24T12:30:00Z',
}

export const users = [
  {
    id: 1,
    name: 'Alice',
    profilePicture: 'https://placehold.co/40',
    isActive: true,
  },
  {
    id: 2,
    name: 'Bob',
    profilePicture: 'https://placehold.co/40',
    isActive: false,
  },
  {
    id: 3,
    name: 'Charlie',
    profilePicture: 'https://placehold.co/40',
    isActive: true,
  },
  {
    id: 4,
    name: 'David',
    profilePicture: 'https://placehold.co/40',
    isActive: false,
  },
  {
    id: 5,
    name: 'Eve',
    profilePicture: 'https://placehold.co/40',
    isActive: true,
  },
  {
    id: 6,
    name: 'Frank',
    profilePicture: 'https://placehold.co/40',
    isActive: false,
  },
  {
    id: 7,
    name: 'Grace',
    profilePicture: 'https://placehold.co/40',
    isActive: true,
  },
  {
    id: 8,
    name: 'Henry',
    profilePicture: 'https://placehold.co/40',
    isActive: false,
  },
  {
    id: 9,
    name: 'Ivy',
    profilePicture: 'https://placehold.co/40',
    isActive: true,
  },
  {
    id: 10,
    name: 'Jack',
    profilePicture: 'https://placehold.co/40',
    isActive: false,
  },
]
