import React,{useState} from 'react'
import { Button,Form } from 'react-bootstrap'
export default function Task8Controlled() {
    const [name, setName] = useState("");
    const [showNameStatus, setShowNameStatus] = useState(false);

    function inputEvent(e) {
        console.log(e.target.value)
        setName(e.target.value)
    }
    return (
        <div className="app border col-4">
            <h3>Controlled Component Example </h3>
            <p>Input Text: {showNameStatus?name:""}</p>
            <Form>
                <Form.Group>
                    <Form.Control 
                     type="text" onChange={inputEvent} placeholder="Enter some text..."/>
                </Form.Group>
                <Button onClick={()=>setShowNameStatus(true)}>Controlled</Button>
            </Form>
        </div>
    )
}
