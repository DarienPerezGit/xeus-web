import React from 'react';

export const MockupActionButtons: React.FC = () => {
    return (
        <div className="px-6 flex gap-3 mb-6 relative z-10">
            <button className="flex-1 bg-white text-black py-3.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-0.5">
                Depositar
            </button>
            <button className="flex-1 bg-[#1A1A1A] text-white border border-white/20 py-3.5 rounded-xl font-bold text-sm hover:bg-[#252525] hover:border-white/30 transition-all hover:-translate-y-0.5">
                Enviar
            </button>
        </div>
    );
};
