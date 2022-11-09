import React, { useState, useEffect } from "react";

//Message seen before a search is made
const Courses = () => {
    
    const url = 'http://localhost:5000/api/courses';
    const [coursesInfo, updateInfo] = useState([]);

    const getCourses = () => {
        fetch(url)
        .then((res) => res.json())    
        .then((res) => {
            updateInfo(res.courses)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        getCourses()
      }, []) 

    return (
        <div className="wrap main--grid">
            {coursesInfo.map((course) => {
                return(
                    <a className="course--module course--link" href="course-detail.html" key={course.id}>
                        <h2 className="course--label">{course.title}</h2>
                        <h3 className="course--title">{course.description}</h3>
                    </a>
                )
            })}
        </div>
    )

}

export default Courses;