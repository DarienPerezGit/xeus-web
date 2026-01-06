'use client';

import React from 'react';
import { Shield, Zap, Lock, Globe, Smartphone, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

export const WhyXeus: React.FC = () => {
    const innovations = [
        {
            icon: Shield,
            title: 'Inflación Shield',
            description: 'Protección automática contra la pérdida de poder adquisitivo. Tu dinero no duerme.',
        },
        {
            icon: Zap,
            title: 'Liquidez Instantánea',
            description: 'Accede a tus fondos crypto al instante para gastos diarios. Sin esperas.',
        },
        {
            icon: Lock,
            title: 'Factor Seguridad',
            description: 'Arquitectura no-custodial. Tus llaves, tus monedas. Nosotros solo facilitamos.',
        },
        {
            icon: Globe,
            title: 'Global & Local',
            description: 'Opera localmente con Pesos y globalmente con USDT/USDC sin fricción.',
        },
        {
            icon: Smartphone,
            title: 'UX Revolucionaria',
            description: 'Una interfaz diseñada para la claridad financiera, no para la confusión bancaria.',
        },
        {
            icon: CreditCard,
            title: 'Tarjetas Virtuales',
            description: 'Gasta tus activos digitales en cualquier comercio del mundo que acepte Visa/Mastercard.',
        }
    ];

    return (
        <section id="features" className="py-32 bg-black relative overflow-hidden">
            {/* Background Decorations - Subtle White/Gray */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/[0.03] rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Left Column: Text & Features */}
                    <div className="flex-1 space-y-12">
                        <div className="space-y-6">
                            {/*  <Badge animated className="bg-white/5 border-white/10 text-white">
                                <Shield className="w-3 h-3 mr-1" />
                                La diferencia Xeus
                            </Badge> */}

                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                                Más que una billetera, <br />
                                <span className="text-gray-400">
                                    un sistema operativo.
                                </span>
                            </h2>

                            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                                Los bancos tradicionales te dan una cuenta.
                                Xeus te permite <span className="text-white font-medium">controlar todo tu dinero en un solo lugar</span>,
                                con herramientas diseñadas para la economía argentina moderna.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {innovations.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex gap-4 group">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Stats Row */}
                        <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
                            {[
                                { label: 'Comisión', value: '0%' },
                                { label: 'Setup', value: '15min' },
                                { label: 'Soporte', value: '24/7' },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Phone Mockup/Visual */}
                    <div className="flex-1 w-full max-w-md lg:max-w-full relative">
                        {/* Glow behind phone */}
                        <div className="absolute inset-0 bg-white/5 rounded-3xl blur-3xl opacity-50" />

                        {/* Abstract Phone Container */}
                        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-4 shadow-2xl overflow-hidden backdrop-blur-sm">
                            {/* Notch Area */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-20" />

                            {/* Screen Content */}
                            <div className="bg-black rounded-[2.5rem] overflow-hidden h-[600px] relative border border-white/5">
                                {/* Status Bar */}
                                <div className="h-12 w-full flex justify-between items-center px-6 pt-2">
                                    <span className="text-[10px] font-bold text-white">9:41</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-4 h-4 rounded-full border border-white/30" />
                                        <div className="w-4 h-4 rounded-full border border-white/30" />
                                    </div>
                                </div>

                                {/* App Content */}
                                <div className="p-6 space-y-6">
                                    {/* Header */}
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            {/* Xeus Logo */}
                                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                                <Shield className="w-4 h-4 text-black fill-current" />
                                            </div>
                                            <span className="text-white font-bold text-lg">Xeus</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/10" />
                                    </div>

                                    {/* Main Card */}
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-4">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="text-sm text-gray-400 font-medium">Balance Total</div>
                                            <div className="text-sm text-white font-mono">USDT</div>
                                        </div>
                                        <div className="text-4xl font-bold text-white mb-2">$14,250.00</div>
                                        <div className="text-sm text-green-400 flex items-center gap-1">
                                            <TrendingUp className="w-3 h-3" />
                                            +2.4% hoy
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <button className="bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
                                            Depositar
                                        </button>
                                        <button className="bg-white/10 text-white font-bold py-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                                            Retirar
                                        </button>
                                    </div>

                                    {/* Recent Activity Mini List */}
                                    <div className="space-y-4 pt-4">
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Actividad Reciente</p>
                                        {[1, 2, 3].map((_, i) => (
                                            <div key={i} className="flex items-center justify-between py-2 border-b border-white/5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                                        <Zap className="w-4 h-4 text-white" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm text-white font-medium">Transferencia</div>
                                                        <div className="text-[10px] text-gray-500">Hace 2h</div>
                                                    </div>
                                                </div>
                                                <div className="text-sm text-white font-mono">-$50.00</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements - White/Gray */}
                        <div className="absolute -right-4 top-1/4 w-20 h-20 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center animate-float shadow-xl">
                            <Shield className="w-10 h-10 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper component for mockup
const TrendingUp = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);
