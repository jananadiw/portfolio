import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LanguageSelector() {
  let router = useRouter()

  return (
    <>
      <div>
        <ul>
          {router.locales?.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                {locale}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
