import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.scss'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
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
    };

    render() {
        return (
            <div className={"box"}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId={"username"} bsSize={"large"} className={"field"}>
                        <Form.Control
                            autoFocus
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId={"password"} bsSize={"large"} className={"field"}>
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type={"password"}
                        />

                        <Button
                            block
                            bsSize={"large"}
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