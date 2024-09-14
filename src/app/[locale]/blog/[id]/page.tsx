import { useTranslations } from 'next-intl'
import LocaleSwitcher from '@/component/local-switcher/index'
import { Link } from '@/i18n/routing'
import Content from './content'

export default function OnePage({ params }: { params: { id: string } }) {
  const t = useTranslations('BlogPage')
  const { id } = params

  return (
    <div>
      <LocaleSwitcher />
      <hr />

      <h1>
        {t('title')}，id {id}
      </h1>

      <Content id={id} />

      <p>
        <Link href="/" className="underline">
          Home
        </Link>
      </p>
    </div>
  )
}
