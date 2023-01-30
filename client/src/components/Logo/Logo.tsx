import React, {FC} from 'react';
import styles from './Logo.module.scss';

interface LogoProps {
    children?: React.ReactNode;
}

export const Logo:FC<LogoProps> = ({children}) => {
    return (
        <div className={styles.logoWrapper}>
            {children}
        </div>
    );
};