import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./services/auth.service";

function NavBar() {

    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    //this.logOut = this.logOut.bind(this);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
            setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, [currentUser]);

    //logOut(() => { AuthService.logout(); });
    console.log("test1");
    console.log(currentUser);
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            {currentUser ? (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/dashboard"} className="nav-link">
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/forum"} className="nav-link">
                            Forum
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/notification"} className="nav-link">
                            Notification
                        </Link>
                    </li>
                    {showModeratorBoard && (
                        <li className="nav-item">
                            <Link to={"/mod"} className="nav-link">
                                Moderator Board
                            </Link>
                        </li>
                    )}
                    {showAdminBoard && (
                        <li className="nav-item">
                            <Link to={"/admin"} className="nav-link">
                                Admin Board
                            </Link>
                        </li>
                    )}
                    {currentUser && (
                        <li className="nav-item">
                            <Link to={"/user"} className="nav-link">
                                User
                            </Link>
                        </li>
                    )}
                    <li className="nav-item">
                        <a href="/login" className="nav-link" onClick={AuthService.logout()/*this.logOut*/}>
                            LogOut
                        </a>
                    </li>
                </div>
            ) : (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/register"} className="nav-link">
                            Sign Up
                        </Link>
                    </li>
                </div>
            )}
        </nav>
    )
}

export default NavBar;