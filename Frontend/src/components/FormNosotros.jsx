import React from "react";
import { Link } from "react-router-dom";

export default class FormNosotros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleChange(event) {
        this.setState({ username: "", password: "" });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <nav class="top-bar" data-topbar role="navigation">
                    <ul class="title-area">
                        <li class="name">
                            <br/>
                            <br/>
                            <br/>
                        </li>
                    </ul>
                </nav>
            </div>

        );
    }
}