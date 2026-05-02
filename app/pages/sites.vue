<script setup lang="ts">
import { LayoutGrid } from 'lucide-vue-next'
import { sites } from '~/data/sites'

const { t } = useI18n()

usePageSeo({
  title: () => t('sites.seoTitle'),
  description: () => t('sites.seoDescription'),
})
</script>

<template>
  <div class="mx-auto max-w-6xl py-8 lg:py-16">
    <AppPageHeader
      :title="t('sites.title')"
      :description="t('sites.description')"
      :icon="LayoutGrid"
      icon-class="text-blue-500"
    />

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <SiteCard v-for="site in sites" :key="site.url" :site="site" />
    </div>
  </div>
</template>
