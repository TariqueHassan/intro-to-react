import React,{useRef } from 'react'
import { Button,Form } from 'react-bootstrap'
export default function Task8Uncontrolled() {

    const name = useRef(null);
    const name1 = useRef(null);
    
    let nameValue="hi";
    function showText() {
    nameValue = name.current.value;    
        console.log("username: "+nameValue)
        // console.log("password: "+name1.current.value);
    }
    return (
        <div className="app border col-4">
            <h3>Uncontrolled Component using ref </h3>
            <p>Input Text: {nameValue}! </p>
            <Form>
                <Form.Group>
                    <Form.Control ref={name} type="text"  placeholder="Enter some text..."/>
                </Form.Group>
                <Form.Group>
                    <Form.Control ref={name1} type="password"  placeholder="Enter some text..."/>
                </Form.Group>
                
                <Button onClick={showText}>Uncontrolled</Button>
            </Form>
        </div>
    )
}
