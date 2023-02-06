import React, {FC} from 'react';
import classes from './Navbar.module.scss';

interface NavbarProps {
    children?: React.ReactNode;
}

export const Navbar: FC<NavbarProps> = ({children}) => {
    return (
        <nav className={classes.root}>
            {children}
        </nav>
    );
};

