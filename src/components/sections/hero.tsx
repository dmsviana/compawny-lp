'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import DynamicLottieAnimation from "@/components/ui/dynamic-lottie";

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-primary/5 -z-10" />

            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 -z-5">
                <svg viewBox="0 0 500 500" preserveAspectRatio="none" className="h-full w-full">
                    <path
                        d="M400,0 C430,80 500,100 500,200 C500,290 430,350 400,500 L500,500 L500,0 L400,0 Z"
                        fill="url(#blue-gradient)"
                    />
                    <defs>
                        <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-lg text-gray-600 mb-8 max-w-lg">
                        Encontre veterinários e pet sitters qualificados, agende consultas e serviços com facilidade e segurança em apenas alguns cliques.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg">
                            Baixar o Aplicativo
                        </Button>
                        <Button variant="outline" size="lg" className="text-primary">
                            Saiba Mais
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-blue-500/40 rounded-full blur-2xl transform scale-90 opacity-70" />

                    <div className="w-full flex justify-center relative">
                        <div className="relative w-[320px] h-[400px] md:w-[350px] md:h-[420px] lg:w-[400px] lg:h-[460px] overflow-hidden rounded-3xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent mix-blend-overlay z-10" />
                        </div>
                    </div>

                    <motion.div
                        animate={{
                            x: [0, 10, 0]
                        }}
                        transition={{
                            delay: 0.6,
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}
                        className="absolute top-12 -left-10 md:-left-16 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/20 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-secondary">Agendamentos</p>
                                <p className="text-xs text-gray-500">Rápido e fácil</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, -8, 0]
                        }}
                        transition={{
                            delay: 1,
                            duration: 3.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/3 left-1/3 transform -translate-x-1/4 -translate-y-1/4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 z-10"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-secondary">Pagamento Seguro</p>
                                <p className="text-xs text-gray-500">Transações protegidas</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{
                            x: [0, -10, 0]
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-12 -right-5 md:-right-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-accent/20 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-secondary">Profissionais Verificados</p>
                                <p className="text-xs text-gray-500">Qualidade garantida</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="absolute w-20 h-20 bg-primary/10 rounded-full -bottom-5 -left-10 blur-xl" />
                    <div className="absolute w-16 h-16 bg-accent/15 rounded-full top-1/4 -right-10 blur-xl" />
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,17.23,5.27,21.06,6.28A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="rgba(255,255,255,0.3)"
                    />
                </svg>
            </div>
        </section>
    );
}