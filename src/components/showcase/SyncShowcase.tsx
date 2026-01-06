'use client';

import React from 'react';
import {
    Wallet,
    Building2,
    Bitcoin,
    Zap,
    CreditCard,
    Smartphone,
    Globe,
    Shield,
    ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const SyncShowcase: React.FC = () => {
    // Logos de las conexiones - representando wallets, bancos y exchanges
    const connections = [
        // Crypto Exchanges & Wallets
        { name: 'Binance', icon: Bitcoin, color: 'from-yellow-400 to-yellow-600', position: 'top-[20%] left-[15%]' },
        { name: 'Lemon', icon: Zap, color: 'from-green-400 to-green-500', position: 'top-[15%] left-[35%]' }, // Lemon green
        { name: 'Metamask', icon: Wallet, color: 'from-orange-400 to-orange-600', position: 'top-[25%] left-[55%]' },
        { name: 'Trust Wallet', icon: Shield, color: 'from-blue-400 to-cyan-500', position: 'top-[20%] right-[15%]' },

        // Bancos Argentinos
        { name: 'Galicia', icon: Building2, color: 'from-orange-500 to-red-500', position: 'top-[45%] left-[10%]' },
        { name: 'BBVA', icon: Building2, color: 'from-blue-600 to-blue-800', position: 'top-[50%] left-[25%]' },
        { name: 'Santander', icon: Building2, color: 'from-red-600 to-red-700', position: 'top-[40%] right-[25%]' },
        { name: 'Macro', icon: Building2, color: 'from-blue-700 to-blue-900', position: 'top-[48%] right-[10%]' },

        // Billeteras Virtuales
        { name: 'MercadoPago', icon: Smartphone, color: 'from-blue-400 to-sky-500', position: 'bottom-[25%] left-[20%]' },
        { name: 'Ualá', icon: CreditCard, color: 'from-pink-500 to-rose-500', position: 'bottom-[20%] left-[40%]' },
        { name: 'Naranja X', icon: Smartphone, color: 'from-orange-500 to-orange-600', position: 'bottom-[28%] right-[35%]' },
        { name: 'Personal Pay', icon: Smartphone, color: 'from-purple-500 to-indigo-600', position: 'bottom-[22%] right-[18%]' },

        // Más Crypto
        { name: 'Coinbase', icon: Bitcoin, color: 'from-blue-500 to-blue-700', position: 'top-[35%] left-[75%]' },
        { name: 'Kraken', icon: Globe, color: 'from-purple-500 to-violet-700', position: 'bottom-[40%] left-[8%]' },
    ];

    return (
        <section className="relative py-32 md:py-40 overflow-hidden bg-black">
            {/* Background Gradient - Neutral White/Gray */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto space-y-8">
                    <Badge animated className="bg-white/5 border-white/10 text-white">
                        En tiempo real
                    </Badge>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance text-white">
                        Tu dinero.
                        <br />
                        <span className="text-gray-400">
                            Sincronizado.
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-balance">
                        Conecta automáticamente todas tus cuentas bancarias, billeteras virtuales y wallets crypto.
                        <br />
                        <span className="text-white font-medium">Todo en un solo lugar. Sin esfuerzo.</span>
                    </p>
                </div>

                {/* Sync Visualization */}
                <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] md:aspect-[16/9]">
                    {/* Central Hub - NEON WHITE Xeus Logo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="relative">
                            {/* Outer Glow Ring - Animated - WHITE */}
                            <div className="absolute inset-0 -m-8 md:-m-12">
                                <div className="w-full h-full rounded-full border border-white/10 animate-ping" style={{ animationDuration: '3s' }} />
                            </div>
                            <div className="absolute inset-0 -m-6 md:-m-10">
                                <div className="w-full h-full rounded-full border border-white/20 animate-pulse" style={{ animationDuration: '2s' }} />
                            </div>

                            {/* Central Circle - NEON WHITE */}
                            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-black border border-white/80 flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.5)] z-30">
                                {/* Inner glow */}
                                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-pulse" />

                                <Shield className="w-12 h-12 md:w-16 md:h-16 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                            </div>
                        </div>
                    </div>

                    {/* Connection Nodes */}
                    {connections.map((connection, index) => {
                        const Icon = connection.icon;
                        return (
                            <div
                                key={index}
                                className={`absolute ${connection.position} group cursor-pointer`}
                                style={{
                                    animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                                    animationDelay: `${index * 0.2}s`
                                }}
                            >
                                {/* Connection Line to Center - WHITE */}
                                <svg
                                    className="absolute top-1/2 left-1/2 -z-10 pointer-events-none opacity-[0.05] group-hover:opacity-20 transition-opacity duration-500"
                                    style={{
                                        width: '400px',
                                        height: '400px',
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <line
                                        x1="200"
                                        y1="200"
                                        x2="200"
                                        y2="200"
                                        stroke="white"
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                        className="animate-pulse"
                                    />
                                </svg>

                                {/* Icon Node */}
                                <div className="relative">
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${connection.color} p-[1px] group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                            <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-40">
                                        <span className="text-xs font-medium text-black bg-white px-2 py-1 rounded-md shadow-lg">
                                            {connection.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Sync Pulses - Animated particles WHITE */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    animation: `syncPulse ${2 + i * 0.5}s ease-out infinite`,
                                    animationDelay: `${i * 0.3}s`,
                                    opacity: 0
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats - Grayscale */}
                {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {[
                        { label: 'Conexiones', value: '14+', sublabel: 'Plataformas soportadas' },
                        { label: 'Actualización', value: '15min', sublabel: 'Sync automático' },
                        { label: 'Seguridad', value: '100%', sublabel: 'Read-only APIs' },
                        { label: 'Esfuerzo', value: '0%', sublabel: 'Cero input manual' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 group"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-gray-300 mb-1">{stat.label}</div>
                            <div className="text-xs text-gray-500">{stat.sublabel}</div>
                        </div>
                    ))}
                </div> */}

                {/* CTA */}
                <div className="mt-16 text-center">
                    {/*  <Button variant="secondary" size="lg" className="group rounded-full px-8 py-4">
                        Ver todas las integraciones
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button> */}
                </div>
            </div>

            {/* Custom Animation Keyframes */}
            <style jsx>{`
                @keyframes syncPulse {
                    0% {
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 0.8;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(40);
                        opacity: 0;
                    }
                }
            `}</style>
        </section>
    );
};
