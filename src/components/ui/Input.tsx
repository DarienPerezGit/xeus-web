import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return (
        <input
            className={cn(
                'bg-white/5 border border-white/10 rounded-xl px-5 py-4 w-full focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white placeholder:text-gray-500',
                className
            )}
            {...props}
        />
    );
};
