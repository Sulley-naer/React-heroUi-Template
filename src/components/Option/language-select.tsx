import type { RootState } from '@/actions'
import { Select, SelectItem } from '@heroui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { SetLanguage } from '@/actions/setting/globalOptions'
import { LanguagesIcon } from '@/components/icons'
import { siteConfig } from '@/config/site'

export function LanguageSelect() {
  const { t, i18n } = useTranslation()
  const selected = useSelector(
    (state: RootState) => state.globalOptions.language,
  )
  const dispatch = useDispatch()

  const LanguageChange = (keys: any) => {
    const lang = Array.from(keys)[0] as 'en' | 'cn' | 'fr'
    i18n.changeLanguage(lang).then(r => r.name)
    dispatch(SetLanguage(lang))
  }

  const SelectedIcon
    = siteConfig.languages.find(lang => lang.language === selected)?.icon
      ?? LanguagesIcon

  return (
    <Select
      aria-label={t('Select language')}
      className="max-w-xs w-32"
      selectedKeys={[selected]}
      onSelectionChange={LanguageChange}
      startContent={React.createElement(SelectedIcon)}
    >
      {siteConfig.languages.map(language => (
        <SelectItem
          key={language.language}
          startContent={React.createElement(language.icon)}
        >
          {language.label}
        </SelectItem>
      ))}
    </Select>
  )
}
