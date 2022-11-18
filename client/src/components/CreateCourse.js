import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { AuthConsumer } from "./Context";

const CreateCourse = () => {

    const navigate = useNavigate(); //Allow for the url and route to reflect the searched for defaultValue(Navigates to the given url)

    return (
        <AuthConsumer>
            { authContext => {
                const authUser = authContext.firstName;

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

            <form>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" defaultValue=""/>

                        <p>By {authUser}</p>

                        <label htmlFor="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription"></textarea>
                    </div>
                    <div>
                        <label htmlFor="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" defaultValue=""/>

                        <label htmlFor="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
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