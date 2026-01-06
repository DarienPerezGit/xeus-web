'use client';

import React from 'react';
import {
    Activity,
    Shield,
    Zap,
    LineChart,
    Wallet,
    Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

// --- Components ---

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    className?: string;
    large?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    icon: Icon,
    className,
    large = false,
}) => {
    return (
        <div
            className={cn(
                'group relative p-8 rounded-3xl bg-white/[0.03] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]',
                className
            )}
        >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                <Icon className="w-24 h-24 text-white" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/30 transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                </div>

                <div>
                    <h3 className={cn("font-bold text-white mb-2 group-hover:text-white transition-colors", large ? 'text-3xl' : 'text-xl')}>
                        {title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const FeaturesGrid: React.FC = () => {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
                    <Badge animated className="bg-white/5 border-white/10 text-white">
                        Características
                    </Badge>
                    {/* <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Todo lo que necesitas para <br />
                        <span className="text-gray-400">dominar tus finanzas.</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Xeus combina la potencia de un banco con la flexibilidad de la web3.
                    </p> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Large Featured Card 1 */}
                    <FeatureCard
                        title="Data Harvest"
                        description="Conectamos con tus bancos, billeteras y exchanges para leer tu realidad financiera en tiempo real. Sin carga manual."
                        icon={Activity}
                        className="md:col-span-2 bg-gradient-to-br from-white/[0.08] to-transparent border-white/10"
                        large
                    />

                    {/* Card 2 */}
                    <FeatureCard
                        title="Privacidad Total"
                        description="Tus datos son tuyos. Arquitectura de conocimiento cero y encriptación de grado militar."
                        icon={Lock}
                    />

                    {/* Card 3 */}
                    <FeatureCard
                        title="Smart Routing"
                        description="Encuentra automáticamente la mejor ruta para mover tu dinero entre pesos y crypto."
                        icon={Zap}
                    />

                    {/* Large Featured Card 4 */}
                    <FeatureCard
                        title="Inflation Shield"
                        description="Detecta cuando tu liquidez pierde valor y te sugiere movimientos para protegerte automáticamente."
                        icon={Shield}
                        className="md:col-span-2 bg-gradient-to-br from-white/[0.08] to-transparent border-white/10"
                        large
                    />

                    {/* Card 5 */}
                    <FeatureCard
                        title="Multi-Chain"
                        description="Soporte nativo para Bitcoin, Ethereum, Polygon, Solana y más."
                        icon={Wallet}
                    />

                    {/* Card 6 */}
                    <FeatureCard
                        title="Analytics Pro"
                        description="Gráficos detallados y proyecciones de tu patrimonio neto a futuro."
                        icon={LineChart}
                    />
                </div>
            </div>
        </section>
    );
};
