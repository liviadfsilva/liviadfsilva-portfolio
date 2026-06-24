'use client'

import { useEffect } from 'react'
import { useLanguage } from './LanguageProvider'

export default function DocumentTitle() {
    const { t } = useLanguage()

    useEffect(() => {
        document.title = t.tabTitle
    }, [t])

    return null
}