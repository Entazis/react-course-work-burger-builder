import React from 'react';
import ToolbarItems from '../UI/ToolbarItems/ToolbarItems';


const layout = (props) => {
    return (
        <React.Fragment>
            <header>
                <ToolbarItems/>
                Side Drawer | Backdrop
            </header>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default layout;
