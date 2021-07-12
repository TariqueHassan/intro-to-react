import React from "react";
import {useReducer} from 'react';
import {Button} from 'react-bootstrap';
const ParentRedux=()=>{
    
    function reducer(state,action){
        switch(action){
            case "Increament":
                return state+1;
            case "Decreament":
                return state-1;
            default:
                return -1;
        }
        
    }
    const [state,dispatch]=useReducer(reducer,0);
    return(
        <div>
        <Button onClick={()=>dispatch("Increament")}>Increment</Button>
      <h1>Component App</h1>
      <Button onClick={()=>dispatch("Decreament")}>Dncrement</Button>
      <h4>{state}</h4>
      </div>
    )
}
export default ParentRedux;