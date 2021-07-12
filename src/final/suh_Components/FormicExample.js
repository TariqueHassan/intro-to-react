import React, { PureComponent } from 'react'
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
function FormicExample() {

    const formik =useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },
        onSubmit: values=>{
            console.log(values);
        },
        validate: values=>{
            let errors={};
            if(!values.name){
                errors.name="Required";
            }
            if(!values.email){
                errors.email="Required";
            }
            if(!values.password){
                errors.password="Required";
            }
            return errors;
        }
    });
    return (
        <div className="app border m-5 col-4">
            <h1>Formik </h1>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter username" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.name && formik.errors.name? <div className="text-danger">{formik.errors.name}</div>:null}
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.email && formik.errors.email? <div className="text-danger">{formik.errors.email}</div>:null}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.password && formik.errors.password? <div className="text-danger">{formik.errors.password}</div>:null}
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>

        </div>
    );
}

export default FormicExample;