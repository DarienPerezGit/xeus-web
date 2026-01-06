import { ArrowRight, Shield } from 'lucide-react';
import React from 'react';

export const MockupAlert: React.FC = () => {
    return (
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
    );
};
