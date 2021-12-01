import React from "react";
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange(event) {
        this.setState({ username: "", password: "" });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="content-all">
                <form className="ctn-form" onSubmit={this.handleSubmit}>
                    <label>Username: </label><br />
                    <input type="text" name="username"></input>
                    <label>Password: </label><br />
                    <input type="password" name="password"></input>
                    <input type="submit" value="submit" />
                    <p><Link to="/register">Register</Link></p>
                </form>
            </div>

        )
    }
}