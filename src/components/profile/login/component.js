import React, {Component} from "react";
import {Button, Form, FormGroup, Input} from 'reactstrap';
import './component.scss';
import UserProfile from '../../../__services__/user-profile';

export default class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            validForm: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    // componentDidMount() {

    //   console.log(this.state.loggedIn);
    //
    //      fetch('http://localhost:5005/users')
    //             .then(res => res.json())
    //             .then(users => Paginator.paginate(users))
    //             .then(console.log)
    // }


    validateForm = () => {

        let email = this.state.email,
            password = this.state.password;
        let validPassRegex = new RegExp('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)){7,20}');

        if (!!email && !!password && validPassRegex.test(password)) {
            this.setState({validForm: true})
        } else {
            this.setState({validForm: false})
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        this.validateForm();
    };

    handleSubmit = event => {
        event.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password
        };

        this.state.validForm && UserProfile.login(data)
            .then(() => this.props.history.push('/dashboard'))
            .catch(error => console.log(`Login un successful ${error}.`));

    };

    render() {
        return (
            <Form name="login" onSubmit={this.handleSubmit}>
                <h1>login</h1>
                <FormGroup>
                    <Input type="email"
                           name="loginEmail"
                           id="email"
                           value={this.state.email}
                           placeholder="please enter email here.."
                           onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Input type="password"
                           name="loginPassword"
                           id="password"
                           value={this.state.password}
                           placeholder="please enter password here.."
                           onChange={this.handleChange}/>
                </FormGroup>
                <div className="actions">
                    <a href="/forgot">Don't remember your password?</a>
                    {this.state.validForm && <Button type="submit">Login</Button>}
                </div>
            </Form>
        );
    }

}