import React from 'react';

import { IconInterface } from '@utils/types/iconInterface.ts';

const IconClose: React.FC<IconInterface> = ({ width = 20, height = 20 }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 20 20"
        >
            <path d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"></path>
        </svg>
    );
};

export default IconClose;
