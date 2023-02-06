import React, {FC} from 'react';
import styles from './Header.module.scss'
import {Logo} from '../Logo';
import {Container} from '../Container';
import {Navbar} from '../Navbar';
import {Button} from '../Button';
import {Toggle} from '../Toggle';
import {Divider} from '../Divider';
import {Link} from '../Link';
import {Menu} from '../Menu';
import {Dropdown} from "../Dropdown";

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
                    <Navbar>
                        <Link>Products</Link>
                        <Link>Locations</Link>
                        <Link>News</Link>
                        <Dropdown />
                        <Link>Contacts</Link>
                    </Navbar>
                    <Divider left right gap={10}>
                        <Toggle size="medium" />
                    </Divider>
                    <Divider>
                        <Button size="medium" variant="round" primary>
                            Login
                        </Button>
                    </Divider>
                </div>
            </Container>
        </header>
    );
};