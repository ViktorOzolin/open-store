import React, {FC} from 'react';
import classes from './Logo.module.scss';

interface LogoProps {
    children?: React.ReactNode;
}

export const Logo:FC<LogoProps> = ({children}) => {
    return (
        <div className={classes.root}>
            {children}
        </div>
    );
};