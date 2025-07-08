import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

// 动态导入和资源分类 使用需指定语言和命名空间

// 获取本地存储的语言设置
const savedLang = localStorage.getItem('persist:root')
let language

try {
  const parsed = JSON.parse(savedLang || '{}')
  const globalOptions = JSON.parse(parsed.globalOptions || '{}')
  language = globalOptions.language || 'en'
}
catch {
  // fallback 保底
  language = 'en'
}

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: language,
    fallbackLng: 'en',
    ns: ['home', 'common'],
    defaultNS: 'home',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // 确保 JSON 被放到 public 目录
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      // 不使用React 加载完成后渲染，使用必须根组件 加入 suspense 这样白屏时长
      useSuspense: false,
    },
  })
  .then(r => r.name)

// noinspection JSUnusedGlobalSymbols 关闭未导出提示
export default i18n
