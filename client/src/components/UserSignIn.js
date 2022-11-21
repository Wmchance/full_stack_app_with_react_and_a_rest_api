import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const UserSignIn = () => {

    const url = 'http://localhost:5000/api/users';
    const navigate = useNavigate(); //Allow for the url and route to reflect the searched for defaultValue(Navigates to the given url)
    const [formBody, updateFormInfo] = useState({
        emailAddress: '',
        password: ''
    })

    const [userId, updateUserId] = useState({
        emailAddress: '',
        firstname: '',
        id: '',
        lastName: ''
    })

    const getUser = () => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8", 
                "Authorization": 'Basic ' + btoa(`${formBody.emailAddress}:${formBody.password}`)
            }
        })
        .then(response => response.json())
        .then(data => {
            updateUserId(data.user)
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    }

    return (
        <div  className="form--centered">
            <h2>Sign In</h2>

            <form
                onSubmit={(e) => {
                    getUser()
                    e.preventDefault()
                }}
            >
                <label htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" defaultValue=""
                    onChange = {(e) => updateFormInfo(prevState => ({...prevState, emailAddress: e.target.value}))}
                />

                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" defaultValue=""
                    onChange = {(e) => updateFormInfo(prevState => ({...prevState, password: e.target.value}))}
                />
                
                <button type="submit" className="button">Sign In</button>
                <button 
                    className="button button-secondary" 
                    onClick={(e) => {
                        e.preventDefault() 
                        navigate('/')
                    }}
                >Cancel
                </button>
            </form>

            <p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p>
        </div>
    )

}

export default UserSignIn;