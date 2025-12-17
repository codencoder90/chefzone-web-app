import { ReactNode } from 'react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    children?: ReactNode;
    align?: 'left' | 'center';
    overlayOpacity?: number;
}

export function PageHero({
    title,
    subtitle,
    backgroundImage,
    children,
    align = 'center',
    overlayOpacity = 0.5
}: PageHeroProps) {
    return (
        <section className="relative py-32 lg:py-48 overflow-hidden bg-gray-900 text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black"
                    style={{ opacity: overlayOpacity }}
                ></div>
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-8 relative z-10 h-full flex flex-col justify-center">
                <div className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
                    {subtitle && (
                        <div className="inline-block mb-4">
                            <span className="text-orange-500 font-bold tracking-wider text-sm md:text-base uppercase bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/30">
                                {subtitle}
                            </span>
                        </div>
                    )}

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
                        {title}
                    </h1>

                    {children && (
                        <div className={`mt-8 ${align === 'center' ? 'flex justify-center' : ''}`}>
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
