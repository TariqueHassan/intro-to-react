import React from 'react'
import { Button } from 'react-bootstrap'
function AlignItems() {
    return (
        <div>
            <h4></h4>
            <div className="d-flex align-items-start m-2" style={{ height: '150px', backgroundColor:"lightgrey" }}>
                <Button className="btn-secondary m-1">Flex 1</Button>
                <Button className="btn-secondary m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
            <div className="d-flex align-items-end m-2" style={{ height: '150px', backgroundColor:"lightgrey" }}>
                <Button className="btn-secondary m-1">Flex 1</Button>
                <Button className="btn-secondary m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
            <div className="d-flex align-items-center justify-content-center m-2" style={{ height: '150px', backgroundColor:"lightgrey" }}>
                <Button className="btn-secondary m-1">Flex 1</Button>
                <Button className="btn-secondary m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
            <div className="d-flex align-items-baseline m-2" style={{ height: '150px', backgroundColor:"lightgrey" }}>
                <Button className="btn-secondary m-1">Flex 1</Button>
                <Button className="btn-secondary m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
            <div className="d-flex align-items-stretch m-2" style={{ height: '150px', backgroundColor:"lightgrey" }}>
                <Button className="btn-secondary m-1">Flex 1</Button>
                <Button className="btn-secondary m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
        </div>
    )
}

export default AlignItems
