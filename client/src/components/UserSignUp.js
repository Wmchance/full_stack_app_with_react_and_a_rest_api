import React from "react";
import { useNavigate } from 'react-router-dom';

const UserSignUp = () => {

    const navigate = useNavigate(); //Allow for the url and route to reflect the searched for defaultValue(Navigates to the given url)

    return (
        <div  className="form--centered">
            <h2>Sign Up</h2>

            <form>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" defaultValue=""/>
                
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" defaultValue=""/>
                
                <label htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" defaultValue=""/>

                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" defaultValue=""/>
                
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

            <p>Already have a user account? Click here to <a href="sign-in.html">sign in</a>!</p>
        </div>
    )

}

export default UserSignUp;