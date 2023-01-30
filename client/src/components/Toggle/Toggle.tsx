import React, {FC} from 'react';
import styles from './Toggle.module.scss';
import cn from "classnames";

interface ToggleProps {
    /**
     * How large should the toggle be?
     */
    size: 'small' | 'medium' |'large';
    /**
     * Optional click handler
     */
    onClick?: () => void;
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
    active: boolean;
    /**
     * Disabled switch
     */
    disabled?: boolean;
}

export const Toggle:FC<ToggleProps> = ({
                                           size= 'small',
                                           style,
                                           speed = 200,
                                           active = false,
                                           onClick,
                                           disabled= false
}) => {



    return (
            <button
                className={cn({
                    [styles.toggle]: true,
                    [styles.toggle_active]: active,
                    [styles[size]]: true,
                    [styles[`${size}_active`]]: active,
                })}
                type='button'
                onClick={onClick}
                role='switch'
                disabled={disabled}
                style={{transition: `all ${speed}ms`,...style}}
            />
    );
};