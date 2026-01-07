'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { XeusMockup } from './XeusMockup';
import { supabase } from '@/lib/supabase';
import { useCryptoRate } from '@/hooks/useCryptoRate';

export const HeroSection: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const usdtRate = useCryptoRate(1500);

    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto px-6 overflow-hidden">
            {/* --- Volumetric Light Effect (New Design) --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* 1. The Light Source (Doorway/Slit) - Sharp & Bright */}
                <div
                    className="absolute top-1/2 left-[-100px] -translate-y-1/2 w-[200px] h-[600px] bg-gradient-to-r from-white/20 to-transparent blur-[20px] transform -skew-x-[20deg]"
                    style={{ opacity: 0.6 }}
                />

                {/* 2. The Main Beam - Broad & Soft */}
                <div
                    className="absolute top-1/2 left-[-200px] -translate-y-1/2 w-[1000px] h-[800px] bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-[80px] transform -rotate-[15deg] origin-left"
                    style={{ mixBlendMode: 'screen' }}
                />

                {/* 3. The Atmosphere - Subtle Glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/[0.03] to-transparent opacity-50" />

                {/* 4. Particles/Dust (Optional Texture) */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 relative z-10">
                {/* Copy */}
                <div className="flex-1 space-y-10 max-w-2xl">
                    {/* Badge */}
                    <Badge animated>
                        Modo Argentina Activado
                    </Badge>

                    {/* Headline - Estilo Revolut */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                        Xeus
                    </h1>

                    {/* Description - Más grande como Revolut */}
                    <p className="text-xl md:text-2xl text-gray-200 max-w-xl leading-relaxed drop-shadow-md">
                        Uno de los primeros Sistemas Operativos Financieros de Argentina.
                    </p>

                    <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                        Unite a la lista de espera hoy y empezá a ser parte de la comunidad que va a transformar los servicios financieros en Argentina.
                    </p>

                    {/* CTA - Form */}
                    <div className="pt-4 w-full max-w-sm">
                        <form onSubmit={async (e) => {
                            e.preventDefault();

                            // 0. Anti-bot (Honeypot check)
                            // @ts-ignore
                            const honeypot = e.target.elements.company_hp?.value;
                            if (honeypot && honeypot.trim() !== '') {
                                // Silently fail for bots
                                console.log('Bot detected');
                                return;
                            }

                            // 1. Validación básica de formato
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if (!emailRegex.test(email)) {
                                setFeedback({ type: 'error', message: 'Por favor ingresa un email válido.' });
                                return;
                            }

                            setIsLoading(true);
                            setFeedback(null);

                            try {
                                const { error } = await supabase
                                    .from('waiting_list')
                                    .insert([{ email }]);

                                if (error) {
                                    // Manejo específico de duplicados (Postgres error 23505)
                                    if (error.code === '23505') {
                                        setFeedback({ type: 'success', message: 'Este email ya está registrado 😉' });
                                    } else {
                                        throw error;
                                    }
                                } else {
                                    setFeedback({ type: 'success', message: '¡Gracias! Te avisaremos cuando estemos listos.' });
                                }
                                setEmail('');
                            } catch (err) {
                                console.error(err);
                                setFeedback({ type: 'error', message: 'Hubo un error. Por favor intentá de nuevo.' });
                            } finally {
                                setIsLoading(false);
                            }
                        }} className="space-y-4">
                            {/* Honeypot field (invisible to users) */}
                            <input
                                type="text"
                                name="company_hp"
                                tabIndex={-1}
                                autoComplete="off"
                                style={{ display: 'none' }}
                                aria-hidden="true"
                            />

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Input
                                    type="email"
                                    placeholder="tu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20"
                                    required
                                />
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={isLoading}
                                    className="whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-shadow"
                                >
                                    {isLoading ? 'Uniendo...' : (
                                        <>
                                            Unirme <ArrowRight className="w-4 h-4 ml-2" />
                                        </>
                                    )}
                                </Button>
                            </div>

                            {feedback && (
                                <p className={`text-sm ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                    {feedback.message}
                                </p>
                            )}
                        </form>
                    </div>

                </div>

                {/* Visual Demo - Hidden on mobile, visible on lg+ */}
                <div className="hidden lg:block flex-1 perspective-1000">
                    <div className="transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
                        <XeusMockup usdtRate={usdtRate} />
                    </div>
                </div>
            </div>

            {/* Mobile Mockup - Simplified version */}
            <div className="lg:hidden mt-16 flex justify-center">
                <div className="w-full max-w-sm">
                    <XeusMockup usdtRate={usdtRate} />
                </div>
            </div>
        </section>
    );
};
