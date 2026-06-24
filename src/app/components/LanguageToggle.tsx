"use client"

import { useLanguage } from "./LanguageProvider"
import type { Language } from "@/app/lib/i18n"

const options: { value: Language; label: string; aria: string }[] = [
    { value: "pt-BR", label: "PT", aria: "Mudar para Português (Brasil)" },
    { value: "en-UK", label: "EN", aria: "Switch to English (UK)" },
]

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="fixed top-4 right-4 z-50">
            <div
                role="group"
                aria-label="Language selector"
                className="flex items-center gap-1 rounded-full border border-white/20 bg-black/30 p-1 backdrop-blur-md"
            >
                {options.map((option) => {
                    const active = option.value === language
                    return (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => setLanguage(option.value)}
                            aria-pressed={active}
                            aria-label={option.aria}
                            className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors duration-200 ${
                                active
                                    ? "bg-pink text-[#dd6981]"
                                    : "text-white/70 hover:text-white"
                            }`}
                        >
                            {option.label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
