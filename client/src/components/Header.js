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
                        if(context.id && context.id !==0) {
                            return (
                                <ul className="header--signedin">
                                    <li>Welcome, {context.firstName} {context.lastName}!</li>
                                    <li><Link to="sign-out.html">Sign Out</Link></li> {/* TODO: make live link */}
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