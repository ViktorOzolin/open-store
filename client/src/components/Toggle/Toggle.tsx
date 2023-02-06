import React, {FC, useState} from 'react';
import classes from './Toggle.module.scss';
import classNames from 'classnames';

interface ToggleProps {
    /**
     * How large should the toggle be?
     */
    size: 'small' | 'medium' |'large';
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Users style
     */
    style?: React.CSSProperties;
    /**
     * Switching speed ms
     */
    speed?: number;
    /**
     * Button active or not
     */
    active?: boolean;
    /**
     * Disabled switch
     */
    disabled?: boolean;
}

export const Toggle:FC<ToggleProps> = ({
                                           size= 'medium',
                                           style,
                                           speed = 200,
                                           active = false,
                                           onClick,
                                           disabled= false
}) => {

    const [checked, setChecked] = useState(active);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        } else {
            setChecked(!checked);
        }
    }

    const toggleClasses = classNames({
        [classes.toggle]: true,
        [classes.toggle_active]: checked,
        [classes[size]]: true,
        [classes[`${size}_active`]]: checked,
    });

    return (
            <button
                className={toggleClasses}
                type='button'
                onClick={handleClick}
                role='switch'
                disabled={disabled}
                style={{transition: `all ${speed}ms`,...style}}
            />
    );
};