import React, {FC} from 'react';
import styles from './Header.module.scss'
import {Logo} from '../Logo';
import {Container} from '../Container';
import {Navbar} from '../Navbar';
import {Button} from '../Button';

interface HeaderProps {
    children?: React.ReactNode,
}

export const Header:FC<HeaderProps> = ({children}) => {

    return (
        <header className={styles.header}>
            <Container>
                <Logo>
                    <h1>Open Store</h1>
                </Logo>
                <div className={styles.content}>
                    <Navbar />
                    <Button size='medium' primary variant='round'>
                        Login
                    </Button>
                </div>
            </Container>
        </header>
    );
};