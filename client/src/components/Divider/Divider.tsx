import React, {FC} from 'react';
import classes from './Divider.module.scss';
import classNames from "classnames";

interface DividerProps {
    children: React.ReactNode;
    left?: boolean;
    right?: boolean;
    style?: React.CSSProperties;
    gap?: number;
}

export const Divider: FC<DividerProps> = ({
                                              children,
                                              left = false,
                                              right = false,
                                              style,
                                              gap
}) => {

    const divideClasses = classNames({
        [classes.root]: true,
        [classes.left]: left,
        [classes.right]: right,
    });

    return (
        <div
            className={divideClasses}
            style={{...style}}
        >
            {children}
        </div>
    );
};