import { ChineseIcon, EnglishIcon, FranceIcon } from '@/components/icons.tsx'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Vite + HeroUI',
  description: 'Make beautiful websites regardless of your design experience.',
  // 电脑端 NavBar 菜单栏
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Docs',
      href: '/docs',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'About',
      href: '/about',
    },
  ],
  // 移动端 NavBar 菜单栏
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/Sulley-naer/Blog',
    twitter: 'https://twitter.com/hero_ui',
    docs: 'https://heroui.com',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
  // 语言配置
  languages: [
    {
      language: 'en',
      label: 'English',
      icon: EnglishIcon,
    },
    {
      language: 'cn',
      label: '中文',
      icon: ChineseIcon,
    },
    {
      language: 'fr',
      label: 'Français',
      icon: FranceIcon,
    },
  ],
}
