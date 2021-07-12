import React, { useReducer } from 'react'
import { Button, Form } from 'react-bootstrap'
import Task6ReducerPage from './Task6ReducerPage';
import { UserContext } from './UserContext';
function Task6Reducer() {
    const reducer = (state, action)=>{
        switch (action) {
            case "loggedIn":
                return true;
            case "loggedOut":
                return false;
        }
    }
    const [state, dispatch] = useReducer(reducer, false);
    
    console.log(state);
    return (
        <div className="row">
            <div className="col-3 app border mx-2">
                <h4>Login Page </h4>
                <hr />
                <Form >
                    <Form.Group >
                        <Form.Control type="text" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Button type="button" onClick={() => dispatch("loggedIn")}>Login</Button>
                </Form>
            </div>
            <div className="col-8 app border bg-light">
                <UserContext.Provider value={{state,dispatch}}>
                    {state?<Task6ReducerPage/>:null}
                </UserContext.Provider>
                {/* <Task6ReducerPage/> */}
            </div>
        </div>
    )
}

export default Task6Reducer
