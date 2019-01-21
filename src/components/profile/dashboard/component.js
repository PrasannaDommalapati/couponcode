import React from 'react';

export default class Dashboard extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            loggedIn: true
        };
    }

    handleClick = () =>{
       this.props.history.push('/login')
    }

    render() {
        return (

            <div>
                Dashboard
                <button type="button" onClick={this.handleClick}>Login</button>
            </div>);
    }
}