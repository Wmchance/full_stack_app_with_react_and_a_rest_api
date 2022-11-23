import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';


const UserSignUp = () => {

    const url = 'http://localhost:5000/api/users';
    const navigate = useNavigate(); //Allow for the url and route to reflect the searched for defaultValue(Navigates to the given url)
    const [formBody, updateFormInfo] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
    })

    const [valErrors, updateErrors] = useState([])

    const createUser = () => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(formBody)
        })
        .then(res => {
            console.log(res.status);
            if(res.status  === 201) {
                navigate('/');
            } else {
                return res.json();
            }
        })
        .then(data => {
            if(data) {
                console.log(data.errors);
                updateErrors(data.errors);
            }
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    }
    

    return (  
        <div  className="form--centered">
            <h2>Sign Up</h2>

            <>
                {valErrors.length > 0 &&
                    <div className="validation--errors">
                        <h3>Validation Errors</h3>
                        <ul>
                            {valErrors.map((error, i) => {
                                return(
                                <li key={i}>{error}</li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </>

            <form 
                onSubmit={(e) => {
                    createUser()
                    e.preventDefault()
                }}
            >
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" 
                    onChange = {(e) => updateFormInfo(prevState => ({...prevState, firstName: e.target.value}))}
                />
                
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" 
                    onChange = {(e) => updateFormInfo(prevState => ({...prevState, lastName: e.target.value}))}
                />
                
                <label htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" 
                    onChange = {(e) => updateFormInfo(prevState => ({...prevState, emailAddress: e.target.value}))}
                />

                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" 
                    onChange = {(e) => updateFormInfo(prevState => ({...prevState, password: e.target.value}))}
                />
                
                <button type="submit" className="button">Sign Up</button>

                <button 
                    className="button button-secondary" 
                    onClick={(e) => {
                        e.preventDefault() 
                        navigate('/')
                    }}
                    >Cancel
                </button>

            </form>

            <p>Already have a user account? Click here to <Link to="sign-in.html">sign in</Link>!</p>
        </div>
    )

}

export default UserSignUp;