import React from "react";
import { useNavigate, Link } from 'react-router-dom';

const UserSignIn = () => {

    const navigate = useNavigate(); //Allow for the url and route to reflect the searched for defaultValue(Navigates to the given url)

    return (
        <div  className="form--centered">
            <h2>Sign In</h2>

            <form>
                <label htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" defaultValue=""/>

                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" defaultValue=""/>
                
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