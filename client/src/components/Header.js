import React from "react";
import { Link } from "react-router-dom";

import { AuthConsumer } from "./Context";


const Header = () =>{
    return (
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><Link to="/">Courses</Link></h1>
                <nav>
                <AuthConsumer>
                    { context => {
                        if(context.emailAddress && context.emailAddress !== 'undefined') {
                            return (
                                <ul className="header--signedin">
                                    <li>Welcome, {context.firstName} {context.lastName}!</li>
                                    <li><Link to="/signout">Sign Out</Link></li>
                                </ul>
                            );
                        } else {
                            return (
                                <ul className="header--signedout">
                                    <li><Link to="/signup">Sign Up</Link></li>
                                    <li><Link to="/signin">Sign In</Link></li>
                                </ul>
                            );
                        }
                    }}
                </AuthConsumer>
                </nav>
            </div>
        </header>
    )
}

export default Header;