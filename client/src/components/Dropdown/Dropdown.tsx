import React, {FC} from 'react';
import classes from './Dropdown.module.scss';
import {Menu} from '../Menu';
import {Arrow} from '../../package/elements/icons/arrow';

interface DropdownProps {

}

export const Dropdown :FC<DropdownProps> = ({}) => {
    return (
        <div className={classes.root}>
            <button className={classes.button}>
                <span className={classes.text}>
                    About
                    <Arrow />
                </span>
                <Menu />
            </button>

        </div>
    );
};