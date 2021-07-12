import React,{useContext } from 'react';
import {UserContext} from './UserContext'
import {Button} from 'react-bootstrap';
function ComponentC(){
    const [{value,setValue},name]=useContext(UserContext);

    return (
        <div className="app border">
            <h1>Component C</h1>
            <Button onClick={()=>setValue(value+1)}>Increment</Button>
            <h2>Incrementing in C: {value}</h2>
            
            <p>Name: {name}</p>
            
        </div>
    )
}

export default ComponentC;