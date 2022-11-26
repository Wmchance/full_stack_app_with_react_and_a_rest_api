import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from 'react-router-dom';

const UserSignIn = ({liftUserInfo}) => {

    const url = 'http://localhost:5000/api/users';
    const navigate = useNavigate();
    const location = useLocation();


    const [formBody, updateFormInfo] = useState({
        emailAddress: '',
        password: ''
    })

    const [userId, updateUserId] = useState({})

    const prevLocation = location.state?.prevLocation;

    //Navigate to the previous page in history w/ state sent from the page that directed to the signIn page - https://reactrouter.com/en/v6.3.0/upgrading/v5#use-usenavigate-instead-of-usehistory
    useEffect(() => {
        if(userId.id) {
            liftUserInfo(userId);
        }

        const failPaths = ['/error', '/forbidden', '/notfound', '/signout', '/signin', '/signup'];
        if(userId.id) {
            if(!location.state || failPaths.includes(prevLocation)) {
                navigate('/');
            } else {
                navigate(prevLocation);
            }
        }
        // eslint-disable-next-line
    }, [userId])

    const getUser = () => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8", 
                "Authorization": 'Basic ' + btoa(`${formBody.emailAddress}:${formBody.password}`)
            }
        })
        .then(res => {
            if(res.status === 500) {
                navigate('/error');
            } else if(res.status === 401) {
                navigate('/forbidden');
            } else {
                return res.json();
            }
        })
        .then(data => {
            if(data.user) {
                updateUserId(data.user);
                updateUserId(prevState => ({...prevState, password: formBody.password}));
            } else {
                console.log(data.message);
            };
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
                    e.preventDefault()
                    getUser()
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