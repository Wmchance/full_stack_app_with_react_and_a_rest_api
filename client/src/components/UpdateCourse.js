import React from "react";
import { useNavigate } from 'react-router-dom';

const UpdateCourse = () => {

    const navigate = useNavigate(); //Allow for the url and route to reflect the searched for defaultValue(Navigates to the given url)

    return (
        <div  className="wrap">
            <h2>Update Course</h2>

            <form>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" defaultValue="Build a Basic Bookcase"/>

                        <p>By Joe Smith</p>

                        <label htmlFor="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription" defaultValue="High-end furniture projects are great to dream about."></textarea>
                    </div>
                    <div>
                        <label htmlFor="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" defaultValue="14 hours"/>

                        <label htmlFor="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded" defaultValue="* 1/2 x 3/4 inch parting strip&#13;&#13;"></textarea>
                    </div>
                </div>

                <button type="submit" className="button">Update Course</button>
                <button 
                    className="button button-secondary" 
                    onClick={(e) => {
                        e.preventDefault() 
                        navigate('/')
                    }}
                >Cancel
                </button>
            </form>

        </div>
    )

}

export default UpdateCourse;