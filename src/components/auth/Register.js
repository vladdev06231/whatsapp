import React, { useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
    Form,
    Button,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { signInWithGoogle } from '../../firebase';

// import store from '../../Store';
import { registerUser } from '../../hooks/useApi';

import bg_login from '../../assets/img/bg-login.svg'
import google_icon from '../../assets/img/google-icon.svg'
import './sign.css'


const Register = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const fName = useRef({});
    fName.current = watch("fName", "");

    const lName = useRef({});
    lName.current = watch("lName", "");

    const email = useRef({});
    email.current = watch("email", "");

    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = async data => {
        registerUser("post", "/user/register", data)
            .then(res => {
                if (res) navigate("/login");
                else console.log("exist")
            })
            .catch(error => {
                console.log(error);
            })
        // store.dispatch(
        //     userAdded({ username: username, email: email, password: password })
        // );
    };

    return (
        <div>
            <div className="container-fluid main-content">
                <div className="row">

                    {/* Sign Up - Left Side */}
                    <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center m-auto left-side">
                        <div className='py-3'>
                            <h1 className="sign-header">Registrarse</h1>
                        </div>

                        <div className="col-md-9 col-sm-9 col-10 col-lg-6 m-auto">
                            <Form className="d-flex flex-column justify-content-center" onSubmit={(e) => e.preventDefault()}>
                                <Form.Group className="mb-3" controlId="formBasicFName">
                                    <div className="text-start">
                                        <Form.Label className="font-weight-400">First Name</Form.Label>
                                    </div>
                                    <Form.Control
                                        name='fName'
                                        type="text"
                                        placeholder="Marlin"
                                        {...register('fName', {
                                            required: 'You must specify a First Name',
                                        })}
                                    />
                                </Form.Group>
                                {errors.fName && <p className='error-message'>{errors.fName.message}</p>}

                                <Form.Group className="mb-3" controlId="formBasicLName">
                                    <div className="text-start">
                                        <Form.Label className="font-weight-400">Last Name</Form.Label>
                                    </div>
                                    <Form.Control
                                        name='lName'
                                        type="text"
                                        placeholder="Yost"
                                        {...register('lName', {
                                            required: 'You must specify a Last Name',
                                        })}
                                    />
                                </Form.Group>
                                {errors.lName && <p className='error-message'>{errors.lName.message}</p>}


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className="text-start">
                                        <Form.Label className="font-weight-400">Email</Form.Label>
                                    </div>
                                    <Form.Control
                                        name='email'
                                        type="email"
                                        placeholder="ejemplo@gmail.com"
                                        {...register('email', {
                                            required: 'You must specify a Email',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                    />
                                </Form.Group>
                                {errors.email && <p className='error-message'>{errors.email.message}</p>}


                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <div className="text-start">
                                        <Form.Label>Contraseña</Form.Label>
                                    </div>
                                    <Form.Control
                                        name='password'
                                        type="password"
                                        placeholder="Password"
                                        {...register('password', {
                                            required: 'You must specify a password',
                                            minLength: {
                                                value: 8,
                                                message: "Password must have at least 8 characters"
                                            },
                                        })}
                                    />
                                </Form.Group>

                                {errors.password && <p className='error-message'>{errors.password.message}</p>}

                                <Form.Group className="mb-3" controlId="checkPassword">
                                    <div className="text-start">
                                        <Form.Label>Comprobar contraseña</Form.Label>
                                    </div>
                                    <Form.Control
                                        name='password_repeat'
                                        type="password"
                                        placeholder="Confirm Password"
                                        {...register('password_repeat', {
                                            validate: value =>
                                                value === password.current || "The passwords do not match"
                                        })}

                                    />
                                </Form.Group>

                                {errors.password_repeat && <p className='error-message'>{errors.password_repeat.message}</p>}

                                <Button
                                    className="sign-btn login-btn text-white pb-2 pt-2 m-auto mb-3"
                                    variant="transparent"
                                    type="button"
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    Registrate con tu Email
                                </Button>

                                <Button
                                    className="sign-btn google-sign-btn pb-2 pt-2 m-auto position-relative "
                                    variant="transparent"
                                    type="button"
                                    onClick={signInWithGoogle}
                                >
                                    <img
                                        src={google_icon}
                                        alt="Google Icon"
                                        className="google-icon position-relative"
                                    />
                                    Registrate con Google
                                </Button>

                            </Form>
                        </div>

                        <div className='py-3'>
                            <h5 className="to-signup-text">
                                ¿Ya tienes una cuenta? &nbsp;
                                <Link to={"/login"} className='cursor-pointer'> Log In</Link>
                            </h5>
                        </div>
                    </div>

                    {/* ----------------- Sign In - Right Side ---------------- */}
                    <div className="d-none d-sm-none d-md-flex col-md-6 right-side d-flex flex-column">

                        <div className="row">
                            <h1 className="text-end text-white pe-5 pt-3 it">
                                IT
                            </h1>
                        </div>

                        <div className="d-flex flex-column m-auto">
                            <div className="row">
                                <img
                                    src={bg_login}
                                    alt="Sign Background Image"
                                    className="bg-sign col-md-9 m-auto"
                                />
                                <h2 className="text-white pt-5 sign-description-text">
                                    Una sola herramienta<br />
                                    para poder cumplir todas<br />
                                    sus ventas
                                </h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;