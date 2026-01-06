import React from 'react';
import { Shield, Github, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-16 border-t border-white/5 bg-black">
            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <img src="/logo.svg" alt="Xeus Logo" className="w-8 h-8" />
                        <span className="text-lg font-bold text-white">Xeus</span>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-8 text-sm">
                        <a href="#features" className="text-gray-500 hover:text-white transition-colors">
                            Características
                        </a>
                        <a href="#philosophy" className="text-gray-500 hover:text-white transition-colors">
                            Filosofía
                        </a>
                        <a href="mailto:hola@xeus.ar" className="text-gray-500 hover:text-white transition-colors">
                            Contacto
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a
                            href="https://twitter.com/xeus_os"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all"
                        >
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a
                            href="https://github.com/xeus-os"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                        <a
                            href="mailto:hola@xeus.ar"
                            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all"
                        >
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                    <p>© 2026 Xeus Financial Systems. Buenos Aires, Argentina.</p>
                    <p className="text-gray-700">
                        Non-custodial · Read-only · Open Source
                    </p>
                </div>
            </div>
        </footer>
    );
};
