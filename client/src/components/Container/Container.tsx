import React, {FC} from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
    /**
     * What will be the width of the container, fixed or fluid?
     */
    fluid?: boolean;
    /**
     * User styles
     */
    style?: React.CSSProperties;
    /**
     * Children node of a container
     */
    children?: React.ReactNode;
}


export const Container:FC<ContainerProps> = ({fluid, style, children}) => {

    const {
        container,
        container_fluid,
    } = styles;

    const mode = fluid ? container_fluid : container;

    return (
        <div className={[mode].join(' ')} style={style}>
            {children}
        </div>
    );
};
