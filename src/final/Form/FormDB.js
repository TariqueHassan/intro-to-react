import React, {PureComponent, useState} from 'react'
import { useFormik } from 'formik';
import { Form,Button,Table } from 'react-bootstrap';
function FormDB() {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
        },
        onSubmit:textValues=>{
            console.log(textValues);

            fetch('http://localhost:8081/savedata', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(textValues),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        },
        validate:values=>{
            let errors={};
            if(!values.name)
            errors.name="Name Required!";
            if(!values.email)
            errors.email="Email Required";
            if(!values.password)
            errors.password="Password Required";

            return errors;
        }
    });
    console.log(formik.errors.name);
    const [stData,setStData] = useState([]);
    function dataHandler(){
        fetch('http://localhost:8081/getdata')
            .then((data)=>data.json())
            .then((value => {
                setStData(value);
            }))
    }
    return (
        <div className="app border m-5 col-4">
            <h3>FormDB RestAPI </h3>
            <hr/>
            <Form onSubmit={formik.handleSubmit}>
               <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange={formik.handleChange} type="text" placeholder="Enter username" name="name" value={formik.values.name} onBlur={formik.handleBlur}/>
                        {formik.touched.name && formik.errors.name?<div className="text-danger">{formik.errors.name}</div>:null}
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange={formik.handleChange} type="email" placeholder="Enter email" name="email" value={formik.values.email} onBlur={formik.handleBlur}/>
                        {formik.touched.email && formik.errors.email?<div className="text-danger">{formik.errors.email}</div>:null}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onChange={formik.handleChange} type="password" placeholder="Password" name="password" value={formik.values.password} onBlur={formik.handleBlur}/>
                        {formik.touched.password && formik.errors.password?<div className="text-danger">{formik.errors.password}</div>:null}
                    </Form.Group>
                    <Button variant="primary"  type="submit" >
                        Submit
                    </Button>
                </Form>
            <Button onClick={dataHandler}>Show Data</Button>
                <Table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                    {
                        stData.map((item)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                            </tr>
                        ))
                    }

                </Table>
        </div>
    );
}

export default FormDB;