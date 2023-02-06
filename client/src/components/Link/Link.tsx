import React, {FC} from 'react';
import classes from './Link.module.scss';

interface LinkProps {
    children?: React.ReactNode;
    component?: React.ComponentType;
}

export const Link :FC<LinkProps>= ({
    children,
}) => {
    return (
        <a href={'#'} className={classes.root}>
            {children}
        </a>
    );
};