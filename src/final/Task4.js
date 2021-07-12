import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

export const Task4 = () => {

    const [names, setNames] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((data) => data.json())
            .then((items) => {
                setNames(items);
            })
    }, [])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        names.map((item) => (
                            <tr>
                                <td>{item.userId}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}