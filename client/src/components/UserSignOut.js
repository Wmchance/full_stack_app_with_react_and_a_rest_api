import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserSignOut = ({signOut}) => {
    const navigate = useNavigate(); //Allow for the url and route to reflect the searched for defaultValue(Navigates to the given url)
    useEffect(() => {
        signOut([])
        navigate("/")
        // eslint-disable-next-line
    }, [])
}

export default UserSignOut;