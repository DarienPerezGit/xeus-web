import { AccountItem } from '@/data/mockupData';
import React from 'react';

interface MockupAccountListProps {
    accounts: AccountItem[];
}

export const MockupAccountList: React.FC<MockupAccountListProps> = ({ accounts }) => {
    return (
        <div className="px-6 pb-8 space-y-3 relative z-10">
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 pl-1">Mis Cuentas</p>

            {accounts.map((account) => {
                const Icon = account.icon;
                return (
                    <div key={account.id} className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] transition-all group cursor-pointer border border-white/5 hover:border-white/20">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full ${account.colorClass} border ${account.borderClass} flex items-center justify-center ${account.textColor} group-hover:scale-110 transition-transform shadow-inner`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div>
                                <div className={`text-sm font-bold text-white ${account.groupHoverColor} transition-colors`}>{account.name}</div>
                                <div className="text-[10px] text-gray-400 font-medium">{account.type}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-bold text-white">{account.balance}</div>
                            <div className="text-[10px] text-gray-400 font-mono">{account.subBalance}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
