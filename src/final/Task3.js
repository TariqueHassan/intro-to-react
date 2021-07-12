import React, { useState } from 'react';
import { Form, Button,Table } from 'react-bootstrap';
const Task3 = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [studentDB, setStudentDB] = useState([]);

    const newArray = studentDB; // Create a copy
    
    const obj = {name,password};
    function register() {
        newArray.push(obj);
        setStudentDB(newArray);
        console.log(studentDB);
        setName("");
        setPassword("");
       

    }
    const changeName = (event) => {
        setName(event.target.value);
    }
    const changePassword = (event) => {
        setPassword(event.target.value);
    }
    return (
        <div>
            <h3>{name}</h3>
            <div className="col-3">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control  type="email" placeholder="Enter email" onChange={changeName} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control  type="password" placeholder="Password" onChange={changePassword} />
                    </Form.Group>
                    <Button variant="primary"  type="button" onClick={register}>
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="col-2">
                <h2>Student Information: </h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentDB.map((item)=>
                            (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.password}</td>
                                    
                                </tr>
                            ))
                        }
                      
                    </tbody>
                </Table>

            </div>
        </div>
    )

}

export default Task3;