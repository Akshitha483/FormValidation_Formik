import { Formik, Form, Field, ErrorMessage} from 'formik';
import React from 'react'
import * as yup from 'yup';
import { withRouter } from 'react-router-dom'

import './login.css'

function SignUp(props) {


    let navigateToLogin=()=>{
        // console.log(props);
        props.history.push('/login')
       }

    let initialValues={
        
            firstName:'',
            lastName:'',
            username:'',
            password:'',
            
        
    }

    let validationSchema = yup.object().shape({
        firstName: yup.string().firstName("please enter valid First name").required("Firstname is required"),
        lastName: yup.string().lastName("please enter valid Last name").required("Lastname is required"),
        username: yup.string().email("please enter email").required("username required"),
        password: yup.string().required("password is required").min("5").max("10"),
        
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
                    <label htmlfor="exampleInputEmail1" class="form-label">First Name</label>
                    <Field
                     type="text" className="form-control" id="exampleInputEmail1"  name="firstName" autoComplete="off" />
                <p className='error'><ErrorMessage name="firstName"/></p> 
                </div>

                <div class="mb-3">
                    <label htmlfor="exampleInputLastname" class="form-label">Last Name</label>
                    <Field
                     type="text" className="form-control" id="exampleInputLastname"  name="lastName" autoComplete="off" />
                <p className='error'><ErrorMessage name="lastName"/></p> 
                </div>

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

               
                
                <button type="submit" className="btn btn-primary"  >Submit</button>

                <h4 style={{cursor:'pointer'}} onClick={navigateToLogin}>Already have an account? Login here !</h4>
            </Form>
            )}
            </Formik>
        </div>
        
    );
}

export default withRouter(SignUp)
