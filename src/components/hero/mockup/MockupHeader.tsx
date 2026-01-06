import { Shield } from 'lucide-react';
import React from 'react';

export const MockupHeader: React.FC = () => {
    return (
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
    );
};
