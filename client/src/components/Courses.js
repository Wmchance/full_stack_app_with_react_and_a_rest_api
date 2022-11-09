import React, { useState, useEffect } from "react";

//Message seen before a search is made
const Courses = () => {
    
    const url = 'http://localhost:5000/api/courses';
    const [courseInfo, updateInfo] = useState('hello');

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
        <div>
            <h2>Welcome to our React Photo Gallery!</h2>
            <p>{courseInfo[1].description}</p>
        </div>
    )

}

export default Courses;