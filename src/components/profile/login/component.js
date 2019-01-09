import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button, Form, FormGroup, Input} from 'reactstrap';
import './component.scss';

export default class LoginComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            validForm: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm = () => {

        let email = this.state.email;
        let password = this.state.password;
        let validPassRegex = new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)');

        if (!!email && !!password && password.length > 7 && validPassRegex.test(password)) {
            this.setState({validForm: true})
        } else {
            this.setState({validForm:false})
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
        this.validateForm();
    };

    handleSubmit = event => {
        event.preventDefault();


        const data = {
            email: this.state.email,
            password: this.state.password
        };

        this.state.validForm && console.log(data);
        // UserService.login(data);
        // UserService.login(data).then(() => {
        //                 return <Redirect to="/dashboard"/>
        //             })

    };

    render() {
        return (
            <Form name="login" onSubmit={this.handleSubmit}>
                <h1>login</h1>
                <FormGroup>
                    <Input type="email"
                           name="loginEmail"
                           id="email"
                           placeholder="please enter email here.."
                           onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Input type="password"
                           name="loginPassword"
                           id="password"
                           placeholder="please enter password here.."
                           onChange={this.handleChange}/>
                </FormGroup>
                <div className="actions">
                    <Link to="/forgot">Don't remember your password?</Link>
                    {this.state.validForm && <Button type="submit">Login</Button>}
                </div>
            </Form>
        );
    }

}