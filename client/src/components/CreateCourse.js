import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { AuthConsumer } from "./Context";

const CreateCourse = () => {

    const url = 'http://localhost:5000/api/courses';
    const navigate = useNavigate(); //Allow for the url and route to reflect the searched for defaultValue(Navigates to the given url)
    const [formBody, updateFormInfo] = useState({
        title: '',
        description: '',
        userId: '',
        estimatedTime: '',
        materialsNeeded: ''
    })

    const [authUser, updateUser] = useState({
        emailAddress: '',
        password: ''
    })

    const createCourse = () => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Basic ' + btoa(`${authUser.emailAddress}:${authUser.password}`)
              },
            body: JSON.stringify(formBody)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.log('Error:', error);
        });
    }
   
    return (
        <AuthConsumer>
            { context => {
                formBody.userId = context.id;
                // add in onSubmit - use updateUser
                authUser.emailAddress = context.emailAddress;
                authUser.password = context.password;

                return(
                    <div  className="wrap">
                        <h2>Create Course</h2>

                        <div className="validation--errors">
                            <h3>Validation Errors</h3>
                            <ul>
                                <li>Please provide a value for "Title"</li>
                                <li>Please provide a value for "Description"</li>
                            </ul>
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                createCourse()
                            }}
                        >
                            <div className="main--flex">
                                <div>
                                    <label htmlFor="courseTitle">Course Title</label>
                                    <input id="courseTitle" name="courseTitle" type="text" defaultValue=""
                                        onChange = {(e) => updateFormInfo(prevState => ({...prevState, title: e.target.value}))}
                                    />

                                    <p>By {`${context.firstName} ${context.lastName}`}</p>

                                    <label htmlFor="courseDescription">Course Description</label>
                                    <textarea id="courseDescription" name="courseDescription" 
                                        onChange = {(e) => updateFormInfo(prevState => ({...prevState, description: e.target.value}))}
                                    ></textarea>
                                </div>
                                <div>
                                    <label htmlFor="estimatedTime">Estimated Time</label>
                                    <input id="estimatedTime" name="estimatedTime" type="text" defaultValue=""
                                        onChange = {(e) => updateFormInfo(prevState => ({...prevState, estimatedTime: e.target.value}))}
                                    />

                                    <label htmlFor="materialsNeeded">Materials Needed</label>
                                    <textarea id="materialsNeeded" name="materialsNeeded"
                                        onChange = {(e) => updateFormInfo(prevState => ({...prevState, materialsNeeded: e.target.value}))}
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit" className="button">Create Course</button>
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
                );
            }}
        </AuthConsumer>
    )

}

export default CreateCourse;