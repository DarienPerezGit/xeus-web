import { useState, useEffect } from 'react';

export const useCryptoRate = (initialRate: number = 1500) => {
    const [usdtRate, setUsdtRate] = useState(initialRate);

    useEffect(() => {
        const interval = setInterval(() => {
            setUsdtRate((prev) => prev + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 5));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return usdtRate;
};
