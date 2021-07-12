import React from 'react'
import { Button } from 'react-bootstrap';
function JustifyContent() {
    return (
        <div>
            <h4>Justify-content-end,start,center</h4>
            <div className="d-flex justify-content-end">
                <Button className="btn-secondary m-1">Flex 1</Button>
                <Button className="btn-secondary m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
            <div className="d-flex justify-content-start">
                <Button className="btn-secondary m-1">Flex 1</Button>
                <Button className="btn-secondary m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
            <div className="d-flex justify-content-center">
                <Button className="btn-secondary m-1">Flex 1</Button>
                <Button className="btn-secondary m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
            <hr/>
            <h4>Justify-content-between,around</h4>
            <div className="d-flex justify-content-between">
                <Button className="btn-secondary m-1">Flex 1</Button>
                <Button className="btn-secondary m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
            <div className="d-flex justify-content-around">
                <Button className="btn-secondary m-1 ">Flex 1</Button>
                <Button className="btn-secondary m-1">Flex 2</Button>
                <Button className="btn-secondary m-1">Flex 3</Button>
            </div>
            <hr/>
            

        </div>

    )
}

export default JustifyContent
