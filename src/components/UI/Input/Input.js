import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let input = null;

    const inputClasses = [classes.InputElement];

    if (props.shouldValidate && props.invalid && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.inputType) {
        case 'input':
            input = (
                <input
                    className={inputClasses.join(' ')}
                    {...props.config}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case 'select':
            input = (
                <select className={inputClasses.join(' ')}
                        onChange={props.changed}
                        defaultValue={props.value}>
                    {props.config.map(option => <option key={option.value} value={option.value}>{option.displayValue}</option>)}
                </select>
            );
            break;
        default:
            input = (
                <input
                    {...props.config}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;

    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.displayName}</label>
            {input}
        </div>
    );
};

export default Input;
