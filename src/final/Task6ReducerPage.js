import { Button } from 'react-bootstrap'
import React,{useContext} from 'react'
import { UserContext } from './UserContext'

export default function Task6ReducerPage() {
    const {state,dispatch} = useContext(UserContext);
    return (
        <div>
            <h1>Welcome to De Cafe DownTown</h1>
            <Button onClick={()=>dispatch("loggedOut")}>Log out</Button>
        </div>
    )
}
