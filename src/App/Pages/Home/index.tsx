import React, { useState } from "react";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../Redux/B_actions/user";
import { AppState } from "../../../Redux/D_reducers";
import { getListOfNewUsers } from "../../../Redux/E_selectors/user";

import Template from "../../Template";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

import { SIGNUP_PATH, POKEDEX_PATH } from "../../../Config/constants/ROUTER_URLs";

import styles from "./Home.module.scss";

const Home = ({ ...props } : any) => {

    const [ invalidLogin, setInvalidLogin ] = useState<boolean | null>(null);
    const newUsers : Array<any> = useSelector((state: AppState) => getListOfNewUsers(state));

    const dispatch = useDispatch();
    
    const { register, watch, errors, triggerValidation, handleSubmit } = useForm()
    const onSubmit = (data : any) => { 
        
        if(Array.isArray(newUsers)) {            
            if(newUsers.some((storedUser) => (storedUser.email === data.email && storedUser.password === data.password))) {
                dispatch(userLogin(data));    
                console.log(data);
                props.history.push(POKEDEX_PATH);        
            }
        }                        
        setInvalidLogin(true);
    }

    return (
        <Template>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.HomeWelcome}> Welcome to pokedex app! </div>
                { (Array.isArray(newUsers) && newUsers.length) ? <div className={styles.HomeSuccess}><p><FontAwesomeIcon icon={faCheck} /> Account created!, Login now!</p></div> : ""}
                { invalidLogin && <div className={styles.HomeError}><p><FontAwesomeIcon icon={faTimes} /> There is an error in your credentials, check inputs or Create a new account!</p></div>}
                <div className={styles.HomeLogin}>
                    <div className={styles.HomeLoginTitle}>Login </div>
                    <div className={styles.HomeLoginCaption}>Please fill the form inputs</div>
                    <div className={`input-group ${styles.HomeUsername}`}>
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
                        <div className="invalid-feedback">Please check your email!</div>
                    </div>

                    <div className={`input-group ${styles.HomePassword}`}>
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
                        <div className="invalid-feedback">Please check your password!</div>
                    </div>
                    
                    <div className={styles.HomeCreateAccount}>
                        <p>Don't have an account? <Link to={SIGNUP_PATH}>Create one.</Link></p> 
                    </div>      

                    <div className={styles.HomeButtons}> 
                        <button type="submit" className={`${styles.HomeButton} ${styles.Login}`}>Sign in</button>                    
                        <Link to={SIGNUP_PATH} className={`${styles.HomeButton} ${styles.Create}`}>Create Account</Link>
                    </div> 
                </div>
            </form>
        </Template>
    );
};

export default Home;