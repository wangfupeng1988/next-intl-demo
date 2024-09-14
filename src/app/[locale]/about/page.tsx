import { useTranslations } from 'next-intl'
import LocaleSwitcher from '@/component/local-switcher/index'
import { Link } from '@/i18n/routing'

export default function About() {
  const t = useTranslations('AboutPage')

  return (
    <div>
      <LocaleSwitcher />
      <hr />

      <h1>{t('title')}</h1>

      <p>
        <Link href="/" className="underline">
          Home
        </Link>
      </p>
    </div>
  )
}
