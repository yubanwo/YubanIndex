import { computed, toValue, type MaybeRefOrGetter } from 'vue'

type PageSeoOptions = {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  type?: 'website' | 'article'
  noindex?: boolean
  image?: string
  keywords?: MaybeRefOrGetter<string[]>
}

const toAbsoluteUrl = (siteUrl: string, path: string) => {
  if (/^https?:\/\//.test(path)) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${normalizedPath}`
}

const normalizePath = (path: string) => {
  const cleanPath = path.split('?')[0]?.split('#')[0] || '/'
  return cleanPath !== '/' ? cleanPath.replace(/\/+$/, '') : '/'
}

const withoutLocalePrefix = (path: string) => {
  const normalizedPath = normalizePath(path)
  return normalizedPath.replace(/^\/en(?=\/|$)/, '') || '/'
}

const defaultKeywords = {
  zh: ['Yuban', '渝伴', '数字服务', '前端工具', '静态站点', 'Sitemap', 'CDN', 'Google Fonts 镜像', '网络诊断'],
  en: ['Yuban', 'digital services', 'frontend tools', 'static sites', 'Sitemap', 'CDN', 'Google Fonts mirror', 'network diagnostics'],
}

export const usePageSeo = (options: PageSeoOptions) => {
  const route = useRoute()
  const { locale, t } = useI18n()
  const config = useRuntimeConfig()

  const siteUrl = (config.public.siteUrl || 'https://www.osyb.cn').replace(/\/+$/, '')
  const type = options.type || 'website'
  const image = options.image || '/logo.png'

  const pagePath = computed(() => normalizePath(route.path || '/'))
  const canonicalUrl = computed(() => toAbsoluteUrl(siteUrl, pagePath.value))
  const unprefixedPath = computed(() => withoutLocalePrefix(pagePath.value))
  const zhPath = computed(() => unprefixedPath.value)
  const enPath = computed(() => unprefixedPath.value === '/' ? '/en' : `/en${unprefixedPath.value}`)
  const imageUrl = computed(() => toAbsoluteUrl(siteUrl, image))
  const title = computed(() => toValue(options.title))
  const description = computed(() => toValue(options.description))
  const keywords = computed(() => toValue(options.keywords) || defaultKeywords[locale.value === 'zh' ? 'zh' : 'en'])
  const language = computed(() => locale.value === 'zh' ? 'zh-CN' : 'en-US')
  const alternateLanguage = computed(() => locale.value === 'zh' ? 'en-US' : 'zh-CN')
  const breadcrumbItems = computed(() => {
    const items = [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('nav.home'),
        item: toAbsoluteUrl(siteUrl, '/'),
      },
    ]

    if (unprefixedPath.value !== '/') {
      items.push({
        '@type': 'ListItem',
        position: 2,
        name: title.value.replace(/\s+-\s+Yuban$/, ''),
        item: canonicalUrl.value,
      })
    }

    return items
  })

  const structuredData = computed(() => [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Yuban',
      url: siteUrl,
      logo: toAbsoluteUrl(siteUrl, '/logo.png'),
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@osyb.cn',
        contactType: 'customer support',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      name: title.value,
      headline: title.value,
      description: description.value,
      url: canonicalUrl.value,
      image: imageUrl.value,
      inLanguage: language.value,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Yuban',
        url: siteUrl,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.value,
    },
  ])

  useSeoMeta({
    title: () => title.value,
    description: () => description.value,
    keywords: () => keywords.value.join(', '),
    author: 'Yuban',
    ogTitle: () => title.value,
    ogDescription: () => description.value,
    ogType: type,
    ogUrl: () => canonicalUrl.value,
    ogImage: () => imageUrl.value,
    ogSiteName: 'Yuban',
    ogLocale: () => locale.value === 'zh' ? 'zh_CN' : 'en_US',
    ogLocaleAlternate: () => alternateLanguage.value.replace('-', '_'),
    twitterCard: 'summary_large_image',
    twitterTitle: () => title.value,
    twitterDescription: () => description.value,
    twitterImage: () => imageUrl.value,
    robots: options.noindex ? 'noindex, nofollow, noarchive' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  })

  useHead({
    htmlAttrs: {
      lang: () => language.value,
    },
    link: [
      {
        rel: 'canonical',
        href: () => canonicalUrl.value,
      },
      {
        rel: 'alternate',
        hreflang: 'zh-CN',
        href: () => toAbsoluteUrl(siteUrl, zhPath.value),
      },
      {
        rel: 'alternate',
        hreflang: 'en-US',
        href: () => toAbsoluteUrl(siteUrl, enPath.value),
      },
      {
        rel: 'alternate',
        hreflang: 'x-default',
        href: () => toAbsoluteUrl(siteUrl, zhPath.value),
      },
    ],
    meta: [
      { name: 'application-name', content: 'Yuban' },
      { name: 'apple-mobile-web-app-title', content: 'Yuban' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#f8fafc' },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: () => JSON.stringify(structuredData.value),
      },
    ],
  })
}
