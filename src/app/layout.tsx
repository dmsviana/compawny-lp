import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Compawny - Conectando você a veterinários e petsitters',
    description: 'Encontre os melhores veterinários e petsitters para o seu pet. Agende consultas e serviços com facilidade e segurança.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
        <body className={`${inter.className} min-h-screen bg-neutral-light`}>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}