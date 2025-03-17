'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
    {
        number: '01',
        title: 'Baixe o aplicativo',
        description: 'Disponível para iOS e Android, baixe gratuitamente e crie sua conta em minutos.'
    },
    {
        number: '02',
        title: 'Encontre profissionais',
        description: 'Busque veterinários e pet sitters por especialidade, localização e avaliações.'
    },
    {
        number: '03',
        title: 'Agende serviços',
        description: 'Escolha o horário que melhor se adapta à sua rotina e agende com facilidade.'
    },
    {
        number: '04',
        title: 'Pagamento seguro',
        description: 'Realize o pagamento antecipado pelo app com total segurança.'
    }
];

export default function HowItWorksSection() {
    return (
        <section className="py-20 bg-white" id="como-funciona">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-secondary mb-4"
                    >
                        Como funciona
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Agendar serviços para seu pet nunca foi tão fácil
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Steps */}
                    <div className="space-y-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="flex gap-6"
                            >
                                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold">
                    {step.number}
                  </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-secondary mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* App mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto md:ml-auto md:mr-0 max-w-xs"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[40px] blur-xl opacity-20 transform rotate-12"></div>
                            <div className="relative bg-white p-2 rounded-[32px] shadow-xl">
                                <Image
                                    src="/assets/homescreen-compawny.png"
                                    alt="App Compawny - Em breve"
                                    width={280}
                                    height={580}
                                    className="rounded-[24px]"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}