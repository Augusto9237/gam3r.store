import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { Toaster } from "react-hot-toast";


const font = Montserrat({
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Gam3r.store',
    description: 'Versão completa da loja Gam3r.store',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={font.className}>
                <Toaster position="top-center" />
                {children}
            </body>
        </html>
    )
}
