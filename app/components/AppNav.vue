<script setup lang="ts">
import {
  Home,
  LayoutGrid,
  MessageSquare,
  Server,
  User,
} from 'lucide-vue-next'

const route = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()

const tabs = [
  { to: '/', labelKey: 'nav.home', icon: Home },
  { to: '/sites', labelKey: 'nav.sites', icon: LayoutGrid },
  { to: '/about', labelKey: 'nav.about', icon: User },
  { to: '/status', labelKey: 'nav.status', icon: Server },
  { to: '/contact', labelKey: 'nav.contact', icon: MessageSquare },
]

const isActive = (to: string) => route.path === localePath(to)
</script>

<template>
  <nav
    class="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center rounded-full border border-slate-200 bg-white/80 p-1.5 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-700"
    role="navigation"
    :aria-label="t('nav.aria')"
  >
    <NuxtLink
      v-for="tab in tabs"
      :key="tab.to"
      :to="localePath(tab.to)"
      :aria-label="t('nav.goTo', { label: t(tab.labelKey) })"
      class="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium outline-none transition-all duration-300 sm:px-6"
      :class="isActive(tab.to) ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'"
    >
      <component :is="tab.icon" class="h-4 w-4" />
      <span class="hidden sm:inline">{{ t(tab.labelKey) }}</span>
    </NuxtLink>
  </nav>
</template>
