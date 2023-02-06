import React, {FC} from 'react';
import classes from './Container.module.scss';
import classNames from 'classnames';

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

    const containerClassNames = classNames({
        [classes.root]: true,
        [classes.container_fluid]: fluid,
    });

    return (
        <div className={containerClassNames} style={style}>
            {children}
        </div>
    );
};