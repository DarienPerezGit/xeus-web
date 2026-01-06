import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    animated?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ children, className, animated = false }) => {
    return (
        <div
            className={cn(
                'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium uppercase tracking-wider',
                className
            )}
        >
            {animated && (
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
            )}
            {children}
        </div>
    );
};
