import React,{useReducer} from 'react';
import Task2 from './Task2';
import { Button } from 'react-bootstrap';
function Task6(){
  const reducer=(state,action)=>{
        switch(action){
            case "Increment":
                return state+1;
            case "Decrement":
                return state-1;
        }
  }

    const [value,dispatch]=useReducer(reducer,0);
    return (
        <div className="container">
            <Button onClick={()=>dispatch("Increment")}>Inc</Button>
            <p>{value}</p>
            <Button onClick={()=>dispatch("Decrement")}>Dec</Button>
            
        </div>
    );
}

export default Task6;