import React, { Component, useState, useEffect } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './Dashboard';
import NavBar from "./NavBar";
import ForumPage from './Forum';
import NotificationPage from './Notification';
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator";
import BoardAdmin from "./components/board-admin";

function App() {

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  });

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container mt-3">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/forum" component={ForumPage} />
          <Route path="/notification" component={NotificationPage} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);

/*<div className="App">
  <div className="navigation">
    <NavBar />
  </div>
  <div>
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/forum' element={<ForumPage />} />
      <Route path='/notification' element={<NotificationPage />} />
    </Routes>
  </div>


  return (
  <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/"} className="navbar-brand">
        AI 4 Biodiv
      </Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
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
      </div>
      {currentUser ? (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              {currentUser.username}
            </Link>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link" onClick={this.logOut}>
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
    <div className="container mt-3">
      <Routes>
        <Route exact path={["/", "/home"]} element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/user" element={<BoardUser />} />
        <Route path="/mod" element={<BoardModerator />} />
        <Route path="/admin" element={<BoardAdmin />} />
      </Routes>
    </div>
  </div>
  );
  }*/