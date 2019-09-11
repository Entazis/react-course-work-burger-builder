import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={() => props.removedIngredient(props.type)} disabled={props.ingredients[props.type] <= 0}>Less</button>
            <button className={classes.More} onClick={() => props.addedIngredient(props.type)}>More</button>
        </div>
    );
};

export default buildControl;
