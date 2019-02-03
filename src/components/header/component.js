import React from 'react';
import {Link, Route} from "react-router-dom";
import {
    Collapse,
    Button,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import UserProfile from '../../__services__/user-profile';


export default class AppHeader extends React.Component {

    constructor(props) {

        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout = () => {
        UserProfile.logout();
    }

    render(){
        return(
            <div className= "appHeader">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Promotion Triumph</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Profile
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link to="/login">Login</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/register">Register</Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <Button onClick={this.logout}>Logout</Button>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar></div>
        );
    }
}