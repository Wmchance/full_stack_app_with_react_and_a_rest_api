import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthConsumer } from "./Context";

const UpdateCourse = () => {

    const navigate = useNavigate(); //Allow for the url and route to reflect the searched for defaultValue(Navigates to the given url)
    const location = useLocation(); //React hook to grab data about the location of the current page
    
    const [courseId, updateId] = useState(location.pathname.split('/')[2]);
    const url = `http://localhost:5000/api/courses/${courseId}`;

    const [authUser, updateUser] = useState({
        emailAddress: '',
        password: '',
        id: ''
    })

    /*
    ** Load current course data from db so that it can be displayed 
    */
    const [courseInfo, updateInfo] = useState([]);

    const getCourse = () => {
        fetch(url)
        .then((res) => {
            if(res.status === 404) {
                navigate('notfound');
            } else {
                return res.json();
            }
        })    
        .then((data) => {
            if(data.course.id !== authUser.id) {
                navigate('forbidden');
            } else {
                updateInfo(data.course);
                updateFormInfo({
                    id: data.course.id,
                    title: data.course.title,
                    description: data.course.description,
                    userId: data.course.userId,
                    estimatedTime: data.course.estimatedTime,
                    materialsNeeded: data.course.materialsNeeded
                });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        updateId(location.pathname.split('/')[2]);
        getCourse();
        // eslint-disable-next-line
      }, [location.pathname]
    ) 

    /*
     * Update course info & make PUT request to db
    */
    const [formBody, updateFormInfo] = useState({})

    // const [authUser, updateUser] = useState({
    //     emailAddress: '',
    //     password: ''
    // })

    const [valErrors, updateErrors] = useState([])
    
    const updateCourse = () => {
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Basic ' + btoa(`${authUser.emailAddress}:${authUser.password}`)
              },
            body: JSON.stringify(formBody)
        })
        .then(res => {
            console.log(res.status);
            if(res.status === 204) {
                navigate('/');
            } else {
                return res.json();
            }
        })
        .then(data => {
            if(data) {
                console.log(data);
                console.log(data.errors);
                updateErrors(data.errors);
            }
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    }

    return (
        <AuthConsumer>
            { context => {
                authUser.emailAddress = context.emailAddress;
                authUser.password = context.password;
                authUser.id = context.id;

                return(
                    <div  className="wrap">
                        <h2>Update Course</h2>

                        <>
                            {valErrors.length > 0 &&
                                <div className="validation--errors">
                                    <h3>Validation Errors</h3>
                                    <ul>
                                        {valErrors.map((error, i) => {
                                            return(
                                            <li key={i}>{error}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            }
                        </>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                updateCourse()
                            }}
                        >
                            <div className="main--flex">
                                <div>
                                    <label htmlFor="courseTitle">Course Title</label>
                                    <input id="courseTitle" name="courseTitle" type="text" defaultValue={courseInfo.title}
                                        onChange = {(e) => updateFormInfo(prevState => ({...prevState, title: e.target.value}))}
                                    />

                                    <p>By {courseInfo.User?.firstName} {courseInfo.User?.lastName}</p>

                                    <label htmlFor="courseDescription">Course Description</label>
                                    <textarea id="courseDescription" name="courseDescription" defaultValue={courseInfo.description}
                                        onChange = {(e) => updateFormInfo(prevState => ({...prevState, description: e.target.value}))}
                                    ></textarea>
                                </div>
                                <div>
                                    <label htmlFor="estimatedTime">Estimated Time</label>
                                    <input id="estimatedTime" name="estimatedTime" type="text" defaultValue={courseInfo.estimatedTime}
                                        onChange = {(e) => updateFormInfo(prevState => ({...prevState, estimatedTime: e.target.value}))}
                                    />

                                    <label htmlFor="materialsNeeded">Materials Needed</label>
                                    <textarea id="materialsNeeded" name="materialsNeeded" defaultValue={courseInfo.materialsNeeded}
                                         onChange = {(e) => updateFormInfo(prevState => ({...prevState, materialsNeeded: e.target.value}))}
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit" className="button">Update Course</button> {/* Make live */}
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
                );
            }}
        </AuthConsumer>
    )

}

export default UpdateCourse;