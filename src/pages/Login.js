import React from 'react';

import { Formik, Form ,Field,ErrorMessage} from 'formik';
import rocketImg from '../assets/rocket.png'
import { TextField } from '../component/TextField';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
const Login = () => {
    let history = useHistory();
    const validate = Yup.object({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
      })

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <Formik
                        initialValues={{
                            email:"",
                            password : ""
                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            alert("User Login Success \r\n"+JSON.stringify(values))
                            history.push('/dashboard')
                        }}
                        validateOnBlur={false}
                    >
                        {formik => (
                            <div>
                                <h1 className="my-4 font-weight-bold .display-4">Login</h1>
                                <Form>
                                    <TextField label="Email" name="email" type="email" />
                                    <TextField label="password" name="password" type="password" />
                                    <button className="btn btn-dark mt-3" type="submit">Login</button>
                                </Form>
                                <div className="float-right">if don't have account? <Link to="/signup">Sign Up</Link></div>
                            </div>
                        )}
                    </Formik>

                </div>
                <div className="col-md-7 my-auto">
                    <img className="img-fluid w-100" src={rocketImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
