import React, {FC} from 'react';

interface NavbarProps {
    children?: React.ReactNode;
}

export const Navbar: FC<NavbarProps> = ({children}) => {
    return (
        <nav>
            {children}
        </nav>
    );
};

