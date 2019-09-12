import React from 'react';
import ToolbarItems from '../Navigation/Toolbar/Toolbar';


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
