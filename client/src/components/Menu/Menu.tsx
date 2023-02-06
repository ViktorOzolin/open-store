import React, {FC} from 'react';
import {Text} from '../Text';
import classes from './Menu.module.scss';

interface MenuProps {
    active?: boolean;
}

export const Menu :FC<MenuProps> = ({
    active,
}) => {
    return (
        <div className={classes.root}>
            <Text as={'label'}>Hello</Text>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
        </div>
    );
};