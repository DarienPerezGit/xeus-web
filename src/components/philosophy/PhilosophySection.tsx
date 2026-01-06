'use client';

import React from 'react';
import { TrendingUp, Shield, Eye, Lock } from 'lucide-react';
import { formatCurrency } from '@/lib/utils'; // Usaremos esto si está disponible, sino pondré un string directo

export const PhilosophySection: React.FC = () => {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Gradient Background Spot - Subtle */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* --- Top Section: Header & Card --- */}
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Filosofía Xeus
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 font-light">
                            Primero organizamos tus Pesos. <br className="hidden md:block" />
                            Luego evitamos que se derritan.
                        </p>
                    </div>

                    {/* Inflation Card - Integrated Subtly */}
                    <div className="w-full max-w-sm">
                        <div className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors shadow-2xl">
                            <div className="flex justify-between items-start mb-4">
                                <div className="text-gray-500 text-xs font-medium uppercase tracking-wider">Decadencia de Inflación (Hoy)</div>
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                            </div>

                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-3xl font-mono font-bold text-white tracking-tighter">
                                    - $1.240
                                </span>
                                <span className="text-sm font-bold text-gray-600">ARS</span>
                            </div>

                            <div className="text-red-400 text-xs mb-6 flex items-center gap-1.5 bg-red-500/10 w-fit px-2 py-1 rounded-md border border-red-500/10">
                                <TrendingUp className="w-3 h-3" />
                                <span>Perdiste el valor de 1 café en 4hs.</span>
                            </div>

                            <button className="w-full bg-white text-black text-sm font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
                                Detener Sangría
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- Divider --- */}
                <div className="w-full h-px bg-white/10 mb-16" />

                {/* --- 3 Column Grid (The Image 1 Layout) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Column 01 */}
                    <div className="space-y-4 group">
                        <div className="text-xs font-mono text-gray-600 mb-2 group-hover:text-white transition-colors">01</div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            Soberanía Real
                        </h3>
                        <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 bg-white rounded-full flex-shrink-0" />
                                <span>Sin custodia de terceros: Tus llaves, tus monedas.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 bg-gray-600 group-hover:bg-white rounded-full flex-shrink-0 transition-colors" />
                                <span>Tú controlas la liquidez en todo momento.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 02 */}
                    <div className="space-y-4 group">
                        <div className="text-xs font-mono text-gray-600 mb-2 group-hover:text-white transition-colors">02</div>
                        <h3 className="text-xl font-bold text-white">
                            Transparencia Total
                        </h3>
                        <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 bg-white rounded-full flex-shrink-0" />
                                <span>Conexiones Read-Only: Nunca tocamos tu dinero ni pedimos permisos de escritura.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 bg-gray-600 group-hover:bg-white rounded-full flex-shrink-0 transition-colors" />
                                <span>Código auditable y seguro.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 03 */}
                    <div className="space-y-4 group">
                        <div className="text-xs font-mono text-gray-600 mb-2 group-hover:text-white transition-colors">03</div>
                        <h3 className="text-xl font-bold text-white">
                            Privacidad Primero
                        </h3>
                        <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 bg-white rounded-full flex-shrink-0" />
                                <span>Arquitectura <span className="text-white italic">Local-First</span>.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 bg-gray-600 group-hover:bg-white rounded-full flex-shrink-0 transition-colors" />
                                <span>Tus datos financieros nunca salen de tu dispositivo sin encriptar.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};
