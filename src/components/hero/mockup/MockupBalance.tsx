import { formatCurrency } from '@/lib/utils';
import React from 'react';

interface MockupBalanceProps {
    totalBalance: number;
    usdtRate: number;
}

export const MockupBalance: React.FC<MockupBalanceProps> = ({ totalBalance, usdtRate }) => {
    return (
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
    );
};
