import React from 'react'
import { Button } from 'react-bootstrap'
function AlignSelf() {
    return (
        <div>
            <div className="d-flex " style={{ height: '150px', backgroundColor:"lightgrey" }}>
                <Button className="btn-secondary  m-1">Flex 1</Button>
                <Button className="btn-secondary align-self-start m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
            <div className="d-flex " style={{ height: '150px', backgroundColor:"lightgrey" }}>
                <Button className="btn-secondary  m-1">Flex 1</Button>
                <Button className="btn-secondary align-self-end m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
            <div className="d-flex " style={{ height: '150px', backgroundColor:"lightgrey" }}>
                <Button className="btn-secondary  m-1">Flex 1</Button>
                <Button className="btn-secondary align-self-center m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
        </div>
    )
}

export default AlignSelf
