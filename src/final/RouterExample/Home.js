import React,{useState,useContext} from 'react';
import { Button,Form } from 'react-bootstrap';
import { UserContext } from '../UserContext';
function Home() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [id,setId]= useState(0)

    
    
    const {list,setList} = useContext(UserContext);
    function registerHandler(){
        var obj = {id,username,password};
        setList([...list,obj]);
        setId(id+1);
    }

    function usernameHandler(e){
        setUsername(e.target.value);
    }
    function passwordHandler(e){
        setPassword(e.target.value);
    }
    
    return (
        
        <div className="app border col-4">
            <h3>Register Student</h3>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control onChange={usernameHandler} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control onChange={passwordHandler} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={registerHandler}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Home;