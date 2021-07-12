import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { UserContext } from './UserContext';
import { Button } from 'react-bootstrap';
class ComponentB extends React.Component{
    
    render() {
        // const value = useContext(UserContext);
        return (
            <div className="app border">
                <UserContext.Consumer>
                { 
                    ([{value,setValue},name])=>{
                        return <div>
                            
                            <Button onClick={()=>setValue(value+1)}>Increment </Button>
                            <h1>Component B</h1>
                            <h4>Increment {value}</h4>
                            <p>{name}</p>

                        </div>
                    }
                }
                </UserContext.Consumer>
            </div>
        )
    }
}

export default ComponentB;