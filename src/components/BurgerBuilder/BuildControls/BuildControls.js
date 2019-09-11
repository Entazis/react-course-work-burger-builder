import React
    from 'react';
import classes from './BuildControls.module.css';
import { controls }
    from '../constants';
import BuildControl from './BuildControl/BuildControl';

const buildControls = () => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(control => <BuildControl key={control.label} label={control.label} type={control.type}/>)}
        </div>
    );
};

export default buildControls;
