import React from 'react';
import { AST_PropAccess } from 'terser';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed}/>
        </div>
    )
    
};

export default person;