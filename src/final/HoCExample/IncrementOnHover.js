import React from 'react'
import HoCExample from './HoCExample';
 function IncrementOnHover(props) {
    return (
        <div className="app border">
            <h1 onMouseOver={props.increment}>IncrementOnHover {props.value}</h1>
        </div>
    )
}

export default HoCExample(IncrementOnHover);