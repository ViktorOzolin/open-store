import React, {FC} from 'react';
import classes from './Layout.module.scss';

interface LayoutProps {
    children: React.ReactNode
}

export const Layout:FC<LayoutProps> = ({children}) => {

    return (
        <div className={classes.layout_grid}>
            {children}
        </div>
    );
};