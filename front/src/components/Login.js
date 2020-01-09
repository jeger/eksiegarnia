import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import './Login.scss'

const API_BASE_URL = "http://localhost:10010/";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "admin",
            password: "password"
        };
    };

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const payload = {
            "username": this.state.username,
            "password": this.state.password,
        };
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };
        axios
            .post(API_BASE_URL + 'login', payload, config)
            .then(function (response) {
                console.log(response);
                if (response.data.code === 200) {
                    console.log("200");
                } else if (response.data.code === 204) {
                    console.log("204");
                } else {
                    console.log("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div className={"box"}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId={"username"} className={"field"}>
                        <Form.Control
                            autoFocus
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId={"password"} className={"field"}>
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type={"password"}
                        />

                        <Button
                            block
                            disabled={!this.validateForm()}
                            type={"submit"}
                        >Login
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}