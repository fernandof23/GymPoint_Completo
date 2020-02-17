/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

export default function Button({ loading, children, ...rest }) {
    return (
        <Container {...rest}>
            {loading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                    <Text>{children}</Text>
                )}
        </Container>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

Button.defaultProps = {
    loading: false,
};
