// app/not-found.tsx
"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        console.log("Página 404 carregada no cliente");
    }, []);

    return (
        <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
            <p className="mb-8">Desculpe, não conseguimos encontrar a página que você está procurando.</p>
            <Link href="/" className="text-primary hover:underline">
                Voltar para a página inicial
            </Link>
        </div>
    );
}