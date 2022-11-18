import React, { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; //https://www.npmjs.com/package/react-markdown

const CourseDetails = () => {
    
    const location = useLocation(); //React hook to grab data about the location of the current page
    const [courseId, updateId] = useState(location.pathname);

    const url = `http://localhost:5000/api/courses${courseId}`;

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
        <React.Fragment>
            <div className="actions--bar">
                <div className="wrap">
                    <Link className="button" to={`/${courseInfo.id}/update`}>Update Course</Link>
                    <Link className="button" to="delete.html">Delete Course</Link> {/* create live link */}
                    <Link className="button button-secondary" to="/">Return to List</Link>
                </div>
            </div>
            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{courseInfo.title}</h4>
                            <p>By {courseInfo.User?.firstName} {courseInfo.User?.lastName}</p> {/* ? used to check that User isn't Null before getting lastName - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
                            <ReactMarkdown 
                                children={courseInfo.description}
                            />
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{courseInfo.estimatedTime}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ReactMarkdown 
                                className="course--detail--list"
                                children={courseInfo.materialsNeeded}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )

}

export default CourseDetails;
