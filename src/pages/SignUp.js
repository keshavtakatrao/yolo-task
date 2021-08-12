import React from 'react';

import { Formik, Form ,Field,ErrorMessage} from 'formik';
import rocketImg from '../assets/rocket.png'
import { TextField } from '../component/TextField';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
const SignUp = () => {
    let history = useHistory();
    const validate = Yup.object({
        fullName: Yup.string()
          .matches(/^[aA-zZ\s]+$/, 'Only alpabet and space are allowed')
          .required('Required'),
        contactNmber: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Enter valid number')
        .max(10, 'Enter valid number')
        .required('Contact Number required'),
        gender: Yup.string()
            .required('Gender required'),
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
                            fullName: '',
                            contactNmber: '',
                            email: '',
                            password: '',
                            gender: ''
                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            alert("User Registered \r\n"+JSON.stringify(values))
                            history.push('/login')
                        }}
                        validateOnBlur={false}
                    >
                        {formik => (
                            <div>
                                <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                                <Form>
                                    <TextField label="First Name" name="fullName" type="text" />
                                    <TextField label="Contact Number" name="contactNmber" type="text" />
                                    <TextField label="Email" name="email" type="email" />
                                    <div className="mb-2">Gender</div>
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <label>
                                            <Field type="radio" name="gender" value="Male" />
                                            Male
                                        </label>
                                        <label>
                                            <Field type="radio" name="gender" value="Female"  />
                                            Female
                                        </label>
                                        <ErrorMessage component="div" name="gender" className="error" />
                                    </div>
                                    <TextField label="password" name="password" type="password" />
                                    <button className="btn btn-dark mt-3" type="submit">Register</button>
                                </Form>
                                <div className="float-right">if already registerd? <Link to="/login">Login</Link></div>
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

export default SignUp
