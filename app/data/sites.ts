import {
  Activity,
  BookOpen,
  Cloud,
  CreditCard,
  Type,
  User,
} from 'lucide-vue-next'

export const sites = [
  {
    titleKey: 'sites.blog.title',
    descKey: 'sites.blog.desc',
    url: 'https://blog.osyb.cn',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-400',
    textColor: 'text-blue-500',
    hoverBorder: 'hover:border-blue-200',
  },
  {
    titleKey: 'sites.card.title',
    descKey: 'sites.card.desc',
    url: 'https://youka.osyb.cn',
    icon: CreditCard,
    color: 'from-purple-500 to-pink-400',
    textColor: 'text-purple-500',
    hoverBorder: 'hover:border-purple-200',
  },
  {
    titleKey: 'sites.flow.title',
    descKey: 'sites.flow.desc',
    url: 'https://flow.osyb.cn',
    icon: Activity,
    color: 'from-green-500 to-emerald-400',
    textColor: 'text-green-500',
    hoverBorder: 'hover:border-emerald-200',
  },
  {
    titleKey: 'sites.cdn.title',
    descKey: 'sites.cdn.desc',
    url: 'https://cdn.osyb.cn',
    icon: Cloud,
    color: 'from-orange-500 to-yellow-400',
    textColor: 'text-orange-500',
    hoverBorder: 'hover:border-orange-200',
  },
  {
    titleKey: 'sites.fonts.title',
    descKey: 'sites.fonts.desc',
    url: 'https://fonts.osyb.cn',
    icon: Type,
    color: 'from-indigo-500 to-blue-400',
    textColor: 'text-indigo-500',
    hoverBorder: 'hover:border-indigo-200',
  },
  {
    titleKey: 'sites.whoami.title',
    descKey: 'sites.whoami.desc',
    url: 'https://whoami.osyb.cn',
    icon: User,
    color: 'from-slate-600 to-slate-400',
    textColor: 'text-slate-600',
    hoverBorder: 'hover:border-slate-300',
  },
] as const

export type Site = (typeof sites)[number]
