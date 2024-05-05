import { useRef, useEffect } from 'reactn'
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useForm } from "react-hook-form";
import {
    Form,
    Button,
} from "react-bootstrap";

// import store from '../../Store';
import { googleOAuth2 } from '../../actions/auth/google';
import { login } from '../../hooks/useApi';
import { signInWithGoogle } from '../../firebase';

import bg_login from '../../assets/img/bg-login.svg'
import google_icon from '../../assets/img/google-icon.svg'
import './sign.css'

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const email = useRef({});
    const password = useRef({});
    email.current = watch("email", "");
    password.current = watch("password", "");

    const onSubmit = async data => {
        login("post", "/user/login", data)
            .then(res => {
                if (res) {
                    navigate('/company/contacts');
                }
                else console.log("error")
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

                    {/* Sign In - Left Side */}
                    <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center m-auto left-side">
                        <div>
                            <h1 className="sign-header">Login</h1>
                        </div>

                        <div className="col-md-9 col-sm-9 col-10 col-lg-6 m-auto">
                            <Form className="d-flex flex-column justify-content-center" onSubmit={(e) => e.preventDefault()}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className="text-start">
                                        <Form.Label className="font-weight-400">Email</Form.Label>
                                    </div>
                                    <Form.Control
                                        name="email"
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
                                        type="password"
                                        placeholder="Password"
                                        {...register('password', {
                                            required: 'You must specify a password',
                                            minLength: {
                                                value: 8,
                                                message: "Invalid Password."
                                            },
                                        })}
                                    />
                                </Form.Group>
                                {errors.password && <p className='error-message'>{errors.password.message}</p>}

                                <Button
                                    className="sign-btn login-btn text-white pb-2 pt-2 m-auto mb-3 mt-3"
                                    variant="transparent"
                                    type="button"
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    LOGIN con tu Email
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
                                    LOGIN con Google
                                </Button>

                            </Form>
                        </div>

                        <div>
                            <h5 className="to-signup-text">
                                ¿No tienes una cuenta? &nbsp;
                                <Link to={"/register"} className='cursor-pointer'>SIGN UP</Link>
                            </h5>
                        </div>
                    </div>

                    {/* Sign In - Right Side */}
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

// function mapStateToProps(state) {
//     return {
//         ...state,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ googleOAuth2 }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;