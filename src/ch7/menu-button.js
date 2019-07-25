import React from 'react';

export const MenuButton = ({children, collapsed, txt, expandCollapse}) =>
    <div className='pop-button'>
        <button onClick={expandCollapse}>{txt}</button>
        {
            collapsed ? '' : <div className='pop-up'>{children}</div>
        }
    </div>