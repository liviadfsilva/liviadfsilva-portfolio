"use client"

import { createContext, useContext, useEffect, useState } from "react"
import {
    DEFAULT_LANGUAGE,
    translations,
    type Language,
    type Translation,
} from "@/app/lib/i18n"

type LanguageContextValue = {
    language: Language
    setLanguage: (language: Language) => void
    t: Translation
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = "lily-portfolio-language"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)

    useEffect(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY)
        if (stored === "pt-BR" || stored === "en-UK") {
            setLanguageState(stored)
        }
    }, [])

    useEffect(() => {
        document.documentElement.lang = language === "pt-BR" ? "pt-BR" : "en-GB"
    }, [language])

    const setLanguage = (next: Language) => {
        setLanguageState(next)
        window.localStorage.setItem(STORAGE_KEY, next)
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
