import { Bitcoin, Wallet, Building2, LucideIcon } from 'lucide-react';

export interface AccountItem {
    id: string;
    name: string;
    type: string;
    balance: string;
    subBalance: string;
    icon: LucideIcon;
    colorClass: string;
    borderClass: string;
    textColor: string;
    groupHoverColor: string;
}

export const MOCKUP_DATA = {
    totalBalance: 15840.50,
    accounts: [
        {
            id: 'mercadopago',
            name: 'MercadoPago',
            type: 'Billetera Virtual',
            balance: '$320.000',
            subBalance: '≈ $215 USD',
            icon: Wallet,
            colorClass: 'bg-[#1e2330]',
            borderClass: 'border-blue-500/20',
            textColor: 'text-blue-400',
            groupHoverColor: 'group-hover:text-blue-200',
        },
        {
            id: 'galicia',
            name: 'Galicia',
            type: 'Banco',
            balance: '$850.000',
            subBalance: '≈ $571 USD',
            icon: Building2,
            colorClass: 'bg-[#302518]',
            borderClass: 'border-orange-500/20',
            textColor: 'text-orange-400',
            groupHoverColor: 'group-hover:text-orange-200',
        },
        {
            id: 'binance',
            name: 'Binance',
            type: 'Exchange',
            balance: '8,500 USDT',
            subBalance: 'Liquid',
            icon: Bitcoin,
            colorClass: 'bg-[#302b18]',
            borderClass: 'border-yellow-500/20',
            textColor: 'text-yellow-400',
            groupHoverColor: 'group-hover:text-yellow-200',
        },
    ] as AccountItem[],
};
