import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
// import reactStringReplace from 'react-string-replace';

const CourseDetails = () => {
    
    const location = useLocation(); //React hook to grab data about the location of the current page
    const [courseId, updateId] = useState(location.pathname);

    const url = "http://localhost:5000/api/courses"+courseId;

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
        updateId(location.pathname);
        getCourse();
        // eslint-disable-next-line
      }, [location.pathname]
    ) 

    return (
        <div className="wrap">
            <h2>Course Detail</h2>
            <form>
                <div>
                    <h3 className="course--detail--title">Course</h3>
                    <h4 className="course--name">{courseInfo.title}</h4>
                    <p>By {courseInfo.User?.firstName} {courseInfo.User?.lastName}</p> {/* ? used to check that User isn't Null before getting lastName - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
                    <p>{courseInfo.description}</p>
                </div>
                <div>
                    <h3 className="course--detail--title">Estimated Time</h3>
                    <p>{courseInfo.estimatedTime}</p>

                    <h3 className="course--detail--title">Materials Needed</h3>
                    <ul className="course--detail--list">
                    {/* {reactStringReplace(courseInfo.materialsNeeded, /(*)/g, (i) => (
                        <li key={i}/>
                    ))} */}
                    </ul>
                </div>
            </form>
        </div>
    )

}

export default CourseDetails;
