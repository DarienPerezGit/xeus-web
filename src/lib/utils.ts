import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = 'ARS'): string {
    return new Intl.NumberFormat('es-AR', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(amount);
}

export function formatUSDT(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
}

/**
 * Convert ARS to USDT based on current rate
 */
export function arsToUsdt(arsAmount: number, usdtRate: number): number {
    return Math.round(arsAmount / usdtRate);
}
