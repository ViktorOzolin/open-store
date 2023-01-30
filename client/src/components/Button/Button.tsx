import React, {FC} from 'react';
import styles from './Button.module.scss';

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
}

export const Button: FC<ButtonProps> = ({
                                            onClick,
                                            variant = 'rounded',
                                            size = 'medium',
                                            primary,
                                            outline,
                                            backgroundColor,
                                            children,
                                            style,
                                            disabled = false,
                                            ...props
}) => {

    const {
        button,
        button_primary,
        button_secondary,
        button_disabled,
        button_outline,
        button_outline_primary,
        button_outline_secondary,
        [`button_${size}`]: buttonSize,
        [`button_${variant}`]: buttonVariant,
    } = styles;

    const buttonMode = primary ? button_primary : button_secondary;
    const buttonDisabled = disabled ? button_disabled : '';
    let buttonOutline;

    if(primary && outline) {
        buttonOutline = button_outline_primary;
    } else if(!primary && outline) {
        buttonOutline = button_outline_secondary;
    } else {
        buttonOutline = button_outline;
    }

    return (
        <button
            className={
            [
                button,
                buttonMode,
                buttonSize,
                buttonVariant,
                buttonOutline,
                buttonDisabled,
            ].join(' ')}
            {...props}
            onClick={onClick}
            style={{backgroundColor, ...style}}
            disabled={disabled}
        >
            {children}
        </button>
    );
};