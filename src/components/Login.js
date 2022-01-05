import { Formik, Form, Field, ErrorMessage} from 'formik';
import React from 'react'
import * as yup from 'yup';
import { withRouter } from 'react-router-dom'

import './login.css'

function Login(props) {
    
    let navigateToSignup = () => {
        // console.log(props);
        props.history.push('/signup')
    }

    let initialValues={
        username:'',
        password:'',
        remember:false,
    }

    let validationSchema = yup.object().shape({
        username: yup.string().email("please enter valid email").required("email is required"),
        password: yup.string().required("password is required").min("5").max("10")
    })

    let onSubmit=(values,props)=>{
        console.log(values);
        props.resetForm()
    }

    return (
        <div className='container border mt-5'>
            <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>

            {(props)=>(
                
            <Form>
                <div class="mb-3">
                    <label htmlfor="exampleInputEmail1" class="form-label">Email address</label>
                    <Field
                    type="email" className="form-control" id="exampleInputEmail1" name="username" autoComplete="off" />
                   <p className='error'><ErrorMessage name="username"/></p> 
                </div>

                <div class="mb-3">
                    <label htmlfor="exampleInputPassword1" class="form-label">Password</label>
                    <Field
                     type="password" className="form-control" id="exampleInputPassword1"  name="password" autoComplete="off" />
                <p className='error'><ErrorMessage name="password"/></p> 
                </div>
                <div class="mb-3 form-check">
                    <Field
                     type="checkbox" className="form-check-input" id="exampleCheck1" name="remember"/>
                    <label className="form-check-label" htmlfor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary"  >Submit</button>

                <h4 style={{ cursor: 'pointer' }} onClick={navigateToSignup}>Don't have an account? Signup here !</h4>
            </Form>
            )}
            </Formik>
        </div>
    );
}

export default withRouter(Login)
