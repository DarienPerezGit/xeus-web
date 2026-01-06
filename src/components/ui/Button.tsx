import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...props
}) => {
    const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2';

    const variants = {
        primary: 'bg-white hover:bg-gray-100 text-black',
        secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
        ghost: 'bg-transparent hover:bg-white/5 text-white',
    };

    const sizes = {
        sm: 'px-6 py-3 text-base',
        md: 'px-8 py-4 text-lg',
        lg: 'px-10 py-5 text-xl',
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};
