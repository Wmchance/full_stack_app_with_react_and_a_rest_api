import React from "react";
import { Link } from "react-router-dom";


const Header = () =>{
    return (
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><Link to="/">Courses</Link></h1>
                <nav>
                    <ul className="header--signedout">
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                    </ul>
                    <ul className="header--signedin">
                        <li>Welcome, Joe Smith!</li>
                        <li><Link to="sign-out.html">Sign Out</Link></li> {/* TODO: make live link */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;