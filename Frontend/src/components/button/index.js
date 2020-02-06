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
}) => {
    return (
        <Button
            type="button"
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
