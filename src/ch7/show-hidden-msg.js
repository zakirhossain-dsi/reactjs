import React from 'react';

export const ShowHiddenMessage = ({children, collapsed, expandCollapsed}) =>
    <p onClick={expandCollapsed}>
        {
            collapsed ? children.replace(/[a-zA-Z0-9]/g, 'x') : children
        }
    </p>