import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/notfound');
    }, [])
    
    return (
        <main>
            <div className="wrap">
                <h2>Not Found</h2>
                <p>Sorry! We couldn't find the page you're looking for.</p>
            </div>
        </main>
    );
}

export default NotFound;