import React,{useState} from 'react'


function HoC(Original) {
    function NewComponent() {
            const [count, setCount] = useState(0);
            const increment =()=>{
                setCount(count+1);
            }
            return <Original count={count} increment={increment} ></Original>
        }
    
    return NewComponent;
}

export default HoC;