'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
    src: string;
    className?: string;
}

export default function LottieAnimation({ src, className = '' }: LottieAnimationProps) {
    const [animationData, setAnimationData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Carregar o arquivo JSON dinamicamente
        fetch(src)
            .then((response) => response.json())
            .then((data) => {
                setAnimationData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error loading Lottie animation:', error);
                setLoading(false);
            });
    }, [src]);

    if (loading) {
        return (
            <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}>
                <p className="text-primary">Carregando animação...</p>
            </div>
        );
    }

    if (!animationData) {
        return (
            <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}>
                <p className="text-red-500">Falha ao carregar animação</p>
            </div>
        );
    }

    return <Lottie animationData={animationData} loop={true} className={className} />;
}