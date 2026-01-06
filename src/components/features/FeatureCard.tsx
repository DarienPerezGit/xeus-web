import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    accentColor: 'emerald' | 'orange' | 'blue';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, accentColor }) => {
    const colorClasses = {
        emerald: 'group-hover:border-emerald-500/30',
        orange: 'group-hover:border-orange-500/30',
        blue: 'group-hover:border-blue-500/30',
    };

    const iconColorClasses = {
        emerald: 'text-emerald-400',
        orange: 'text-orange-400',
        blue: 'text-blue-400',
    };

    return (
        <div className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.07] transition-all duration-300">
            <div className={`w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 border border-white/10 ${colorClasses[accentColor]} group-hover:scale-110 transition-all`}>
                <Icon className={`w-6 h-6 ${iconColorClasses[accentColor]}`} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
};
