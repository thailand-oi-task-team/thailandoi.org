export interface NavGroup {
  title: string
  links: Array<{
    title: string
    href: string
  }>
}

export const navigation: Array<NavGroup> = [
  {
    title: 'Guides',
    links: [{ title: 'Introduction', href: '/' }],
  },
  {
    title: 'Materials',
    links: [{ title: 'Oct 65', href: '/materials/oct65' },
            { title: 'Oct 66', href: '/materials/oct66' }],
  },
  {
    title: 'Team Members',
    links: [{ title: 'Members', href: '/members' }],
  },
]
