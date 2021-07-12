import React from 'react'
import { Button } from 'react-bootstrap';
import HoCExample from './HoCExample';
function IncrementOnClick(props) {
    return (
        <div className="app border">
            <Button onClick={props.increment}>IncrementOnClick {props.value}</Button>
        </div>
    )
}

export default HoCExample(IncrementOnClick);