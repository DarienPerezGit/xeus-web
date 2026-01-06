'use client';

import React, { useState } from 'react';
import { Shield, Bitcoin, Wallet, Building2, TrendingUp, AlertTriangle, ArrowRight, Zap } from 'lucide-react';
import { formatCurrency, formatUSDT } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface AegisMockupProps {
    usdtRate?: number;
}

export const AegisMockup: React.FC<AegisMockupProps> = ({ usdtRate = 1200 }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Mock Data
    const totalBalance = 15840.50;

    return (
        <div
            className="relative w-full max-w-md mx-auto perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* --- Reflection/Glow Effects Behind Mockup --- */}
            <div className="absolute inset-0 bg-white/10 rounded-[2.5rem] blur-xl opacity-20 transform scale-95" />

            {/* --- Main Mockup Container --- */}
            <div className={`relative z-10 bg-[#050505] border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 w-full max-w-[380px] md:max-w-[420px] mx-auto ${isHovered ? 'scale-[1.02] border-white/30 shadow-[0_0_80px_rgba(255,255,255,0.15)]' : 'scale-100 shadow-[0_20px_60px_rgba(0,0,0,0.5)]'}`}>

                {/* Glossy Edge Highlight (Inner Shine) */}
                <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] pointer-events-none z-50 mix-blend-overlay" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* --- App Header --- */}
                <div className="px-6 pt-8 pb-4 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center shadow-lg shadow-white/20">
                            <Shield className="w-4 h-4 fill-current" />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-white drop-shadow-md">Xeus</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                        <span className="text-[10px] font-bold text-white tracking-wider">JP</span>
                    </div>
                </div>

                {/* --- Net Worth Card --- */}
                <div className="p-6 relative">
                    {/* Subtle gradient background for card area */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Patrimonio Neto</span>
                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 border border-white/20 shadow-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_5px_white]" />
                                <span className="text-[9px] font-bold text-white tracking-wider">EN VIVO</span>
                            </div>
                        </div>

                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
                                {formatCurrency(totalBalance)}
                            </span>
                            <span className="text-sm font-medium text-gray-400">USD</span>
                        </div>

                        <div className="text-xs text-gray-400 mt-2 flex items-center gap-2 font-medium">
                            <div className="w-5 h-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[10px] text-white">
                                <span className="font-serif italic text-white/50">i</span>
                            </div>
                            <span className="opacity-80">1 USDT = {formatCurrency(usdtRate).replace('USD', 'ARS').trim()}</span>
                        </div>
                    </div>
                </div>

                {/* --- Quick Actions --- */}
                <div className="px-6 flex gap-3 mb-6 relative z-10">
                    <button className="flex-1 bg-white text-black py-3.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-0.5">
                        Depositar
                    </button>
                    <button className="flex-1 bg-[#1A1A1A] text-white border border-white/20 py-3.5 rounded-xl font-bold text-sm hover:bg-[#252525] hover:border-white/30 transition-all hover:-translate-y-0.5">
                        Enviar
                    </button>
                </div>

                {/* --- Connections List --- */}
                <div className="px-6 pb-8 space-y-3 relative z-10">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 pl-1">Mis Cuentas</p>

                    {/* Item 1 */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] transition-all group cursor-pointer border border-white/5 hover:border-white/20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#1e2330] border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shadow-inner">
                                <Wallet className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white group-hover:text-blue-200 transition-colors">MercadoPago</div>
                                <div className="text-[10px] text-gray-400 font-medium">Billetera Virtual</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-bold text-white">$320.000</div>
                            <div className="text-[10px] text-gray-400 font-mono">≈ $215 USD</div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] transition-all group cursor-pointer border border-white/5 hover:border-white/20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#302518] border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform shadow-inner">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white group-hover:text-orange-200 transition-colors">Galicia</div>
                                <div className="text-[10px] text-gray-400 font-medium">Banco</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-bold text-white">$850.000</div>
                            <div className="text-[10px] text-gray-400 font-mono">≈ $571 USD</div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] transition-all group cursor-pointer border border-white/5 hover:border-white/20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#302b18] border border-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform shadow-inner">
                                <Bitcoin className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white group-hover:text-yellow-200 transition-colors">Binance</div>
                                <div className="text-[10px] text-gray-400 font-medium">Exchange</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-bold text-white">8,500 USDT</div>
                            <div className="text-[10px] text-gray-400 font-mono">Liquid</div>
                        </div>
                    </div>
                </div>

                {/* --- Alert/Notification --- */}
                <div className="mx-6 mb-8 relative z-10">
                    <div className="relative z-10 bg-[#111] border border-white/10 rounded-2xl p-4 transition-all duration-300 group hover:border-white/30 hover:shadow-lg shadow-inner">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                <Shield className="w-5 h-5 fill-current" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                                    Oportunidad Detectada
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                </h4>
                                <p className="text-xs text-gray-300 leading-relaxed mb-4 font-medium">
                                    Tu liquidez en pesos pierde valor. El Dólar MEP está <span className="text-white font-bold decoration-white underline decoration-1 underline-offset-2">3% más barato</span> que USDT.
                                </p>
                                <button className="bg-white text-black text-xs font-bold py-3 px-4 rounded-xl w-full transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-100 hover:scale-[1.02] shadow-md">
                                    Ejecutar Escudo
                                    <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
