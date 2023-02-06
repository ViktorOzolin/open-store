import React, {FC} from 'react';

interface ArrowProps {
    isNext?: boolean;
    color?: string;
}

export const Arrow:FC<ArrowProps> = ({isNext,color = "#42567A" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
             className="text-icon" data-v-0895989d="">
            <path
                d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path>
        </svg>
    );
};