import React
  from 'react';

const layout = (props) => {
  return (
      <React.Fragment>
        <header>
          Toolbar | Side Drawer | Backdrop
        </header>
        <main>
          {props.children}
        </main>
      </React.Fragment>
  );
};

export default layout;
