<script setup lang="ts">
import { Github, Globe, Mail, MessageSquare } from 'lucide-vue-next'

const { t } = useI18n()

usePageSeo({
  title: () => t('contact.seoTitle'),
  description: () => t('contact.seoDescription'),
})
</script>

<template>
  <div class="mx-auto max-w-6xl py-8 lg:py-16">
    <AppPageHeader
      :title="t('contact.title')"
      :description="t('contact.description')"
      :icon="MessageSquare"
      icon-class="text-blue-500"
    />

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
      <div class="space-y-5 lg:col-span-2">
        <a href="mailto:support@osyb.cn" class="group flex items-center gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]">
          <span class="rounded-2xl bg-blue-50 p-4 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
            <Mail class="h-6 w-6" />
          </span>
          <span>
            <span class="mb-1 block text-sm font-medium text-slate-400">{{ t('contact.emailLabel') }}</span>
            <span class="block text-lg font-bold text-slate-800 transition-colors group-hover:text-blue-600">support@osyb.cn</span>
          </span>
        </a>

        <a href="#" class="group flex items-center gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]">
          <span class="rounded-2xl bg-purple-50 p-4 text-purple-600 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
            <Github class="h-6 w-6" />
          </span>
          <span>
            <span class="mb-1 block text-sm font-medium text-slate-400">{{ t('contact.githubLabel') }}</span>
            <span class="block text-lg font-bold text-slate-800 transition-colors group-hover:text-purple-600">@Yuban-Official</span>
          </span>
        </a>

        <a href="#" class="group flex items-center gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]">
          <span class="rounded-2xl bg-emerald-50 p-4 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
            <Globe class="h-6 w-6" />
          </span>
          <span>
            <span class="mb-1 block text-sm font-medium text-slate-400">{{ t('contact.socialLabel') }}</span>
            <span class="block text-lg font-bold text-slate-800 transition-colors group-hover:text-emerald-600">@Yuban_Network</span>
          </span>
        </a>
      </div>

      <div class="lg:col-span-3">
        <ClientOnly>
          <TwikooComments />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
