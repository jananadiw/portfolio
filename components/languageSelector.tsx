import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LanguageSelector() {
  let router = useRouter()

  return (
    <>
      <div>
        <ul className="flex items-center justify-center text-2xl space-x-4">
          {router.locales?.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                {locale === 'en-US' ? '🇺🇸' : '🇰🇷'}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
