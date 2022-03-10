import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { withRouter } from "react-router-dom";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
        console.log("test 9");
        console.log(this.currentUser);
    }
    render() {
        //const { currentUser } = this.state;
        console.log("test10");
        console.log(this.currentUser);
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{this.currentUser.username}</strong> Profile
                    </h3>
                </header>
                <p>
                    <strong>Token:</strong>{" "}
                    {this.currentUser.accessToken.substring(0, 20)} ...{" "}
                    {this.currentUser.accessToken.substr(this.currentUser.accessToken.length - 20)}
                </p>
                <p>
                    <strong>Id:</strong>{" "}
                    {this.currentUser.id}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {this.currentUser.email}
                </p>
                <strong>Authorities:</strong>
                <ul>
                    {this.currentUser.roles &&
                        this.currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
            </div>
        );
    }
}

export default withRouter(Profile);