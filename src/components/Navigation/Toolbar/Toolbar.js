import React from 'react';
import ToolbarItem from './ToolbarItem/ToolbarItem';

const toolbar = () => {
    return (
        <div>
            <ul>
                <ToolbarItem label="Burger Builder" link="/"/>
                <ToolbarItem label="Checkout" link="/"/>
            </ul>
        </div>
    );
};

export default toolbar;
