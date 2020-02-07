import React from 'react';

import { Wrapper } from './styles';

export default function Container({ maxWidht, children }) {
    return <Wrapper maxWidht={maxWidht}>{children}</Wrapper>;
}
