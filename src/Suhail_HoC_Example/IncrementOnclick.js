import React,{ useState} from 'react'
import { Button } from 'react-bootstrap'
import HoC from './HoC';

function IncrementOnclick(props) {
    console.log(props);
    return (
        <div>
            <Button variant="success" onClick={()=>props.increment()}>increment {props.count} {props.name} </Button>
            
        </div>
    )
}

export default HoC(IncrementOnclick);
