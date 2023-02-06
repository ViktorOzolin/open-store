import React, {FC} from 'react';
import classes from './Button.module.scss';
import classNames from "classnames";

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    children?: React.ReactNode;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Border variant of button
     */
    variant?: 'round' | 'rounded' | 'square';
    /**
     * Outline variant of button
     */
    outline?: boolean;
    /**
     * Users style
     */
    style?: React.CSSProperties;
    /**
     * Disable button
     */
    disabled?: boolean;
    /**
     * Own classnames
     */
    className?: string
}

export const Button: FC<ButtonProps> = ({
                                            onClick,
                                            variant = 'round',
                                            size = 'medium',
                                            primary= false,
                                            outline = false,
                                            backgroundColor,
                                            children,
                                            style,
                                            disabled = false,
                                            className,
                                            ...others
}) => {
    const buttonClasses = classNames({
        [classes.button]: true,
        [classes.primary]: primary,
        [classes.secondary]: !primary,
        [classes.outline_primary]: primary && outline,
        [classes.outline_secondary]: !primary && outline,
        [classes.disabled]: disabled,
        [classes[variant]]: variant,
        [classes[size]]: size,
        [className ?? '']: className,
    });

    return (
        <button
            className={buttonClasses}
            {...others}
            onClick={onClick}
            style={{backgroundColor, ...style}}
            disabled={disabled}
        >
            {children}
        </button>
    );
};