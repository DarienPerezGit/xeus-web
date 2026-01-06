'use client';

import React from 'react';
import Image from 'next/image';

export const AboutSection: React.FC = () => {
    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
                            {/* Overlay gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

                            {/* Image props optimized for 'mujer.jpg' which is in public folder */}
                            <Image
                                src="/mujer.jpg"
                                alt="Sobre Nosotros"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                            Sobre nosotros
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-400">
                            <p>
                                Xeus es la solución ideal para los argentinos que quieren proteger y hacer rendir al máximo su capital.
                                <span className="text-white block mt-2">
                                    Simplicidad radical para una economía compleja.
                                </span>
                            </p>

                            <p>
                                Te ayudamos a unificar, dolarizar y gastar tu dinero de forma más inteligente.
                                Además, con nuestra infraestructura no-custodial de última generación y soporte 24/7,
                                puedes estar tranquilo sabiendo que <span className="text-white font-medium">vos tenés el control total.</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
