import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './components/LanguageProvider'
import LanguageToggle from './components/LanguageToggle'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Lívia Silva | Portfolio",
    // description: 'Backend Developer Portfolio',
    icons: "/icon/favicon.ico"
}

export const viewport: Viewport = {
    colorScheme: 'light dark',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} bg-darkBlue`}>
        <body className="font-sans antialiased">
        <LanguageProvider>
            <LanguageToggle />
            {children}
        </LanguageProvider>
        </body>
        </html>
    )
}
