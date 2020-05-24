import React, { useContext } from "react";
import { withRouter, __RouterContext } from "react-router";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNewUser } from "../../../Redux/B_actions/user";

import Template from "../../Template";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

import { HOME_PATH } from "../../../Config/constants/ROUTER_URLs";

import styles from "./SignUp.module.scss";

const useRouter = () => useContext(__RouterContext);

const SignUp = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const { history } = router;  

    const { register, watch, errors, triggerValidation, reset, clearError, handleSubmit } = useForm()
    const onSubmit = (data : any) => { 
        dispatch(setNewUser(data));    
        history.push(HOME_PATH)
    }
    
    const handleClear = () => {
        reset();
        clearError();
    };

    return (
        <Template>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.SignUp}>
                    <div className={styles.SignUpTitle}>Sign Up</div>
                    <div className={styles.SignUpCaption}>Please fill the form inputs</div>

                    <div className={`input-group ${styles.SignUpInput}`}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="nameForm">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                        </div>
                        <input 
                            name="name" 
                            type="text"
                            ref={ register({ 
                                required: true, 
                                minLength: 1,
                                maxLength: 30,
                                pattern: /^[A-Za-z0-9\sA-Za-z0-9]+$/i
                            }) }
                            onChange={async () => triggerValidation({ name: 'name' })}
                            className={`form-control ${ (watch("name") === undefined || watch("name") === "") ? "" : (errors.name === undefined ? "is-valid" : "is-invalid") }`} 
                            placeholder="Trainer full name" 
                            aria-label="Trainer full name" 
                            aria-describedby="nameForm" 
                        />    
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please complete input form! (max: 30)</div>
                    </div>

                    <div className={`input-group ${styles.SignUpInput}`}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="emailForm">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                        </div>
                        <input 
                            name="email"
                            type="email"
                            ref={
                                register({
                                    required: true,
                                    pattern:  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i                                    
                                })
                            }        
                            onChange={async () => triggerValidation({ name: 'email' })}
                            className={`form-control ${ (watch("email") === undefined || watch("email") === "") ? "" : (errors.email === undefined ? "is-valid" : "is-invalid") }`} 
                            placeholder="Email" 
                            aria-label="Email" 
                            aria-describedby="emailForm" 
                        />                        
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">It's not an email. Please complete input form!</div>
                    </div>

                    <div className={`input-group ${styles.SignUpInput}`}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="passwordForm">
                                <FontAwesomeIcon icon={faKey} />
                            </span>
                        </div>
                        <input 
                            name="password"
                            type="password" 
                            ref={ register({ 
                                required: true, 
                                minLength: 1,
                                maxLength: 10 
                            }) }
                            onChange={async () => triggerValidation({ name: 'password' })}
                            className={`form-control ${ (watch("password") === undefined || watch("password") === "") ? "" : (errors.password === undefined ? "is-valid" : "is-invalid") } `} 
                            placeholder="Password" 
                            aria-label="Password" 
                            aria-describedby="passwordForm" 
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please complete input form! (max: 10)</div>
                    </div>

                    <div className={`input-group ${styles.SignUpInput}`}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="confirmPasswordForm">
                                <FontAwesomeIcon icon={faKey} />
                            </span>
                        </div>                        
                        <input 
                            name="confirmPassword"
                            type="password"                            
                            ref={
                                register({
                                    minLength: 1,
                                    maxLength: 10,
                                    validate: value => value === watch("password")
                                })
                              } 
                            onChange={async () => triggerValidation({ name: 'confirmPassword' })}
                            className={`form-control ${ (watch("confirmPassword") === undefined || watch("confirmPassword") === "") ? "" : (errors.confirmPassword === undefined ? "is-valid" : "is-invalid") } `} 
                            placeholder="Confirm password"
                            aria-label="Confirm password"
                            aria-describedby="confirmPasswordForm" 
                        />
                        
                        <div className="valid-feedback">Passwords match!</div>
                        <div className="invalid-feedback">Passwords don't match. Please complete input form!</div>
                    </div>


                    <div className={styles.SignUpCreateAccount}>
                        <p>Do you have an account? <Link to={HOME_PATH}>Login.</Link></p> 
                    </div>          

                    <div className={styles.SignUpRegisterButtons}> 
                        <button type="submit" className={`${styles.SignUpButton} ${styles.Register}`}>Create!</button>
                        <button onClick={handleClear} className={`${styles.SignUpButton} ${styles.Clear}`}>Clear</button>
                        <Link to={HOME_PATH} className={`${styles.SignUpButton} ${styles.Cancel}`}>Cancel</Link>
                    </div>                      
                </div>
            </form>
        </Template>
    );
};

export default withRouter(SignUp);