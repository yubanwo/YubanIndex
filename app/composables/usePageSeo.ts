import { computed, toValue, type MaybeRefOrGetter } from 'vue'

type PageSeoOptions = {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  type?: 'website' | 'article'
  noindex?: boolean
  image?: string
}

const toAbsoluteUrl = (siteUrl: string, path: string) => {
  if (/^https?:\/\//.test(path)) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${normalizedPath}`
}

export const usePageSeo = (options: PageSeoOptions) => {
  const route = useRoute()
  const { locale } = useI18n()
  const config = useRuntimeConfig()

  const siteUrl = (config.public.siteUrl || 'https://www.osyb.cn').replace(/\/+$/, '')
  const type = options.type || 'website'
  const image = options.image || '/logo.png'

  const canonicalUrl = computed(() => toAbsoluteUrl(siteUrl, route.path || '/'))
  const imageUrl = computed(() => toAbsoluteUrl(siteUrl, image))
  const title = computed(() => toValue(options.title))
  const description = computed(() => toValue(options.description))

  useSeoMeta({
    title: () => title.value,
    description: () => description.value,
    ogTitle: () => title.value,
    ogDescription: () => description.value,
    ogType: type,
    ogUrl: () => canonicalUrl.value,
    ogImage: () => imageUrl.value,
    ogSiteName: 'Yuban',
    ogLocale: () => locale.value === 'zh' ? 'zh_CN' : 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: () => title.value,
    twitterDescription: () => description.value,
    twitterImage: () => imageUrl.value,
    robots: options.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
  })

  useHead({
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl,
      },
    ],
  })
}
