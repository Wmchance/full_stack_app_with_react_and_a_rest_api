import React from "react";
import { useNavigate } from "react-router-dom";

const UserSignOut = () => {
    const navigate = useNavigate(); //Allow for the url and route to reflect the searched for defaultValue(Navigates to the given url)

    return (
        navigate("/")
    )
}

export default UserSignOut;