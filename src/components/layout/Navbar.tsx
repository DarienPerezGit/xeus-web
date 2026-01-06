'use client';

import React from 'react';
import { Shield } from 'lucide-react';
import { useScroll } from '@/hooks/useScroll';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
    const isScrolled = useScroll();

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-3'
                : 'bg-transparent border-b border-white/5 py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <img src="/logo.svg" alt="Xeus Logo" className="w-8 h-8 md:w-9 md:h-9" />
                    <h2 className="text-xl font-bold tracking-tight text-white">Xeus</h2>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
                    <a href="#features" className="hover:text-white transition-colors duration-200 relative group">
                        Características
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                    </a>
                    <a href="#philosophy" className="hover:text-white transition-colors duration-200 relative group">
                        Filosofía
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                    </a>
                    <a href="#security" className="hover:text-white transition-colors duration-200 relative group">
                        Seguridad
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                    </a>
                </div>

                {/* CTA Button */}
                <Button variant="secondary" size="sm">
                    Acceso Anticipado
                </Button>
            </div>
        </nav>
    );
};
