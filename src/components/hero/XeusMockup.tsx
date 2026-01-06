'use client';

import React, { useState } from 'react';
import { MOCKUP_DATA } from '@/data/mockupData';
import { MockupHeader } from './mockup/MockupHeader';
import { MockupBalance } from './mockup/MockupBalance';
import { MockupActionButtons } from './mockup/MockupActionButtons';
import { MockupAccountList } from './mockup/MockupAccountList';
import { MockupAlert } from './mockup/MockupAlert';

interface XeusMockupProps {
    usdtRate?: number;
}

export const XeusMockup: React.FC<XeusMockupProps> = ({ usdtRate = 1200 }) => {
    const [isHovered, setIsHovered] = useState(false);

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

                <MockupHeader />

                <MockupBalance
                    totalBalance={MOCKUP_DATA.totalBalance}
                    usdtRate={usdtRate}
                />

                <MockupActionButtons />

                <MockupAccountList accounts={MOCKUP_DATA.accounts} />

                <MockupAlert />

            </div>
        </div>
    );
};

