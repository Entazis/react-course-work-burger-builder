import React from 'react';

const ToolbarItem = (props) => {
    return (
        <div>
            <li><a href={props.link}>{props.label}</a></li>
        </div>
    );
};

export default ToolbarItem;
