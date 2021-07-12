import React,{useContext} from 'react';
import { Button,Table } from 'react-bootstrap';
import { UserContext } from '../UserContext';
function About(){
    const {list,setList} = useContext(UserContext);
   
    function deleteRowHandler(id){
        const v=list.filter((item)=>{
            return item.id!=id;
        });
        setList(v);
    }
    return (
        <div className="app border bg-grey col-6">
            <h1>Student Info</h1>
            <Table striped bordered hover>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
                {
                    list.map((item)=>(
                        <tr >
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td><Button onClick={()=>deleteRowHandler(item.id)}>Delete</Button></td>
                        </tr>
                    ))
                }
            </Table>
        </div>
    );
}

export default About;