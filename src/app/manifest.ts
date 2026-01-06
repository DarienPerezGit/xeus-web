import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Xeus Financial Systems',
        short_name: 'Xeus',
        description: 'El primer Sistema Operativo Financiero que unifica tu realidad bancaria y crypto.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/logo.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            }
        ],
    };
}
