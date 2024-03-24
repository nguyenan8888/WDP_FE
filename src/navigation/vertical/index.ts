// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { ChatType } from 'src/types/apps/chatTypes'
import { UsersType } from 'src/types/apps/userTypes'

const navigation = (user: UsersType | null, unReadMessages: number): VerticalNavItemsType => {

  const canAccess = (...roles: string[]): boolean => {
    return roles.some(role => user?.role === role)
  }

  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'tabler:smart-home',
      canAccess: canAccess('Member', 'Moderator')
    },
    {
      title: 'Dashboard',
      icon: 'eos-icons:admin-outlined',
      canAccess: canAccess('Moderator', 'Admin'),
      children: [
        {
          title: 'User Management',
          path: '/user-management',
          canAccess: canAccess('Admin')
        },
        {
          title: 'Post Management',
          path: '/post-management',
          canAccess: canAccess('Admin')
        },
        {
          title: 'Reel Management',
          path: '/reel-management',
          canAccess: canAccess('Admin')
        },
        {
          title: 'Report Management',
          path: '/report-management',
          canAccess: canAccess('Moderator', 'Admin')
        }
      ]
    },
    {
      path: '/reels',
      title: 'Reels',
      icon: 'ph:video',
      canAccess: canAccess('Member', 'Moderator')
    },
    {
      path: '/chat',
      title: 'Chat',
      icon: 'bi:chat',
      badgeContent: unReadMessages > 0 ? `${unReadMessages}` : undefined,
      badgeColor: 'error',
      canAccess: canAccess('Member', 'Moderator')
    },
    {
      path: '/activity',
      title: 'Activity',
      icon: 'mynaui:activity-square',
      canAccess: canAccess('Member', 'Moderator', 'Admin')
    }
  ]
}

export default navigation
