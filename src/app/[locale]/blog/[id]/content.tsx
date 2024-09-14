'use client'

import { useTranslations } from 'next-intl'

interface IProps {
  id: string
}

export default function Content({ id }: IProps) {
  const t = useTranslations('BlogPage')

  return (
    <div>
      <p>{t('content', { id })} ( from client component )</p>
    </div>
  )
}
