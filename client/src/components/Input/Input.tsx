import React, {FC} from 'react';


interface InputProps {
    /**
     * How type should the input be?
     */
    type: 'text' | 'password'| 'radio' | 'checkbox';
    /**
     * How large should the toggle be?
     */
    disabled?: boolean;
    /**
     * How large should the toggle be?
     */
    onChange?: () => void
}


export const Input:FC<InputProps> = ({type, disabled= false, onChange}) => {

    return (
        <input type={type} disabled={disabled} onChange={onChange}/>
    );
};
