import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
} from 'lucide-react'

export const sidebarLinks = {
  user: {
    name: 'suser',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Feed',
      url: '#',
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: 'Global',
          url: '#',
        },
        {
          title: 'Your friends',
          url: '#',
        },
      ],
    },
    {
      title: 'Friends',
      url: '#',
      icon: Bot,
      items: [
        // {
        //   title: 'Genesis',
        //   url: '#',
        // },
        // {
        //   title: 'Explorer',
        //   url: '#',
        // },
        // {
        //   title: 'Quantum',
        //   url: '#',
        // },
      ],
    },
    {
      title: 'Places',
      url: '#',
      icon: BookOpen,
      items: [
        // {
        //   title: 'Introduction',
        //   url: '#',
        // },
        // {
        //   title: 'Get Started',
        //   url: '#',
        // },
        // {
        //   title: 'Tutorials',
        //   url: '#',
        // },
        // {
        //   title: 'Changelog',
        //   url: '#',
        // },
      ],
    },
    // {
    //   title: 'Settings',
    //   url: '#',
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: 'General',
    //       url: '#',
    //     },
    //     {
    //       title: 'Team',
    //       url: '#',
    //     },
    //     {
    //       title: 'Billing',
    //       url: '#',
    //     },
    //     {
    //       title: 'Limits',
    //       url: '#',
    //     },
    //   ],
    // },
  ],
}
