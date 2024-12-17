import { ScreenType } from '@utils/types/screenType.ts';
import { useEffect, useState } from 'react';

const breakpoints = {
    mobile: 768,
    tablet: 1024,
    desktop: 1440,
};

const useScreenSize = (): ScreenType => {
    const [screenSize, setScreenSize] = useState<ScreenType>('mobile');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < breakpoints.mobile) {
                setScreenSize('mobile');
            } else if (width < breakpoints.tablet) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenSize;
};

export { useScreenSize, breakpoints };
