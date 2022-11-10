import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const UpdateCourse = () => {

    const navigate = useNavigate(); //Allow for the url and route to reflect the searched for defaultValue(Navigates to the given url)
    
    const location = useLocation(); //React hook to grab data about the location of the current page
    const [courseId, updateId] = useState(location.pathname.split("/")[1]);
    
    const url = `http://localhost:5000/api/courses/${courseId}`;

    const [courseInfo, updateInfo] = useState([]);

    const getCourse = () => {
        fetch(url)
        .then((res) => res.json())    
        .then((res) => {
            updateInfo(res.course)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        updateId();
        getCourse();
        // eslint-disable-next-line
      }, [location.pathname]
    ) 

    return (
        <div  className="wrap">
            <h2>Update Course</h2>

            <form>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" defaultValue={courseInfo.title}/>

                        <p>By {courseInfo.User?.firstName} {courseInfo.User?.lastName}</p>

                        <label htmlFor="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription" defaultValue={courseInfo.description}></textarea>
                    </div>
                    <div>
                        <label htmlFor="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" defaultValue={courseInfo.estimatedTime}/>

                        <label htmlFor="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded" defaultValue={courseInfo.materialsNeeded}></textarea>
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