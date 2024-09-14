import { useLocale, useTranslations } from 'next-intl'
import LocaleSwitcherSelect from './locale-select'
import { routing } from '@/i18n/routing'

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur.replaceAll('-', '_') })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
