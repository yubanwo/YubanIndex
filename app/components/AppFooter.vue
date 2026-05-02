<script setup lang="ts">
import { Github, Mail, Twitter } from 'lucide-vue-next'

const year = new Date().getFullYear()
const { locale, t } = useI18n()
const localePath = useLocalePath()

const legalLabels = computed(() => locale.value === 'zh'
  ? { privacy: '隐私政策', terms: '服务条款' }
  : { privacy: 'Privacy Policy', terms: 'Terms of Service' })
</script>

<template>
  <footer class="relative z-10 mt-24 flex flex-col items-center border-t border-slate-200 pt-8 text-center">
    <div class="mb-6 flex gap-6">
      <a href="#" :aria-label="t('footer.github')" title="Github" class="text-slate-400 transition-colors hover:scale-110 hover:text-slate-900">
        <Github class="h-5 w-5" />
      </a>
      <a href="#" :aria-label="t('footer.twitter')" title="Twitter" class="text-slate-400 transition-colors hover:scale-110 hover:text-blue-500">
        <Twitter class="h-5 w-5" />
      </a>
      <a href="mailto:support@osyb.cn" :aria-label="t('footer.email')" title="Email" class="text-slate-400 transition-colors hover:scale-110 hover:text-slate-900">
        <Mail class="h-5 w-5" />
      </a>
    </div>

    <p class="mb-2 text-sm text-slate-500">&copy; {{ year }} Yuban. {{ t('footer.rights') }}</p>

    <div class="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
      <NuxtLink :to="localePath('/privacy')" class="transition-colors hover:text-slate-600">{{ legalLabels.privacy }}</NuxtLink>
      <span>&bull;</span>
      <NuxtLink :to="localePath('/terms')" class="transition-colors hover:text-slate-600">{{ legalLabels.terms }}</NuxtLink>
      <span>&bull;</span>
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer" class="transition-colors hover:text-slate-600">
        桂ICP备2022000958号-4
      </a>
    </div>
  </footer>
</template>
