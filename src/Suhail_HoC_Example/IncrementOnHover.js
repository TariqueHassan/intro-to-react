import React,{ useState} from 'react'
import HoC from './HoC'
function IncrementOnHover(props) {
    
    return (
        <div>
            <h1  onMouseOver={()=>props.increment()}>increment {props.count}</h1>
            
        </div>
    )
}

export default HoC(IncrementOnHover);
