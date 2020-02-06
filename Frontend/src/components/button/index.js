import React from 'react';

import { Button } from './styles';

const button = ({
    children,
    fontSize,
    borderRadius,
    color,
    background,
    width,
    height,
    margin,
    fontWeight,
    onClick,
    type,
}) => {
    return (
        <Button
            type={type || 'button'}
            fontSize={fontSize}
            color={color}
            background={background}
            borderRadius={borderRadius}
            width={width}
            height={height}
            margin={margin}
            fontWeight={fontWeight}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default button;
