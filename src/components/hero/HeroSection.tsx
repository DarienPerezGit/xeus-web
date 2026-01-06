'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AegisMockup } from './AegisMockup';
import { useCryptoRate } from '@/hooks/useCryptoRate';

export const HeroSection: React.FC = () => {
    const [email, setEmail] = useState('');
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

                    {/* CTA - Botón más prominente */}
                    <div className="pt-4">
                        <Button variant="primary" size="lg" className="text-base font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow">
                            Unirse a la lista de espera
                        </Button>
                    </div>

                </div>

                {/* Visual Demo - Hidden on mobile, visible on lg+ */}
                <div className="hidden lg:block flex-1 perspective-1000">
                    <div className="transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
                        <AegisMockup usdtRate={usdtRate} />
                    </div>
                </div>
            </div>

            {/* Mobile Mockup - Simplified version */}
            <div className="lg:hidden mt-16 flex justify-center">
                <div className="w-full max-w-sm">
                    <AegisMockup usdtRate={usdtRate} />
                </div>
            </div>
        </section>
    );
};
