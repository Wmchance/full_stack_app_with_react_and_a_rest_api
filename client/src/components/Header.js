import React from "react";

const Header = () =>{
    return (
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><a href="/">Courses</a></h1>
                <nav>
                    <ul className="header--signedout">
                        <li><a href="/sign-up">Sign Up</a></li>
                        <li><a href="sign-in.html">Sign In</a></li> {/* TODO: Make actual link */}
                    </ul>
                    <ul className="header--signedin">
                        <li>Welcome, Joe Smith!</li>
                        <li><a href="sign-out.html">Sign Out</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;